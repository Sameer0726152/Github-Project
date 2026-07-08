const usernameInput = document.querySelector("#username")
const searchBtn = document.querySelector("#search");
const profile = document.querySelector("#profile");
const loader = document.querySelector("#loader");

searchBtn.addEventListener("click", loadProfile);
usernameInput.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        loadProfile();
    }
});
async function loadProfile()
{
    try
    {
        const username = usernameInput.value;
        if(username === "")
        {
            profile.innerHTML = 
            `<h2 class = "error">Please enter a Username</h2>`;
            return;
        }
        loader.style.display = "flex";
        const url = `https://api.github.com/users/${username}`; 
        const response = await fetch(url);
        if (!response.ok)
        {
            profile.innerHTML = `<h2 class = "error">User not found</h2>`;
            return;
        }
        const data = await response.json();
        profile.innerHTML = 
        `
        <div class="profile-header">
            <img
                class="avatar"
                src="${data.avatar_url}"
                alt="Profile Picture">

            <div class="profile-info">
                <h2>${data.name}</h2>
                <p>${data.bio || "No bio available"}</p>
                <div class="stats">
                <div class="stat-card">
                    <h3>👥</h3>
                    <h4>Followers</h4>
                    <p>${data.followers}</p>
                </div>
                <div class="stat-card">
                    <h3>➕</h3>
                    <h4>Following</h4>
                    <p>${data.following}</p>
                </div>
                <div class="stat-card">
                    <h3>📁</h3>
                    <h4>Repositories</h4>
                    <p>${data.public_repos}</p>
                </div>
            </div>
            </div>
        </div>
        `;

        // Adding Repository Cards

        const repoURL = `https://api.github.com/users/${username}/repos`;
        const repoResponse = await fetch(repoURL);
        if(!repoResponse.ok)
        {
            throw new Error("No repositories available");
        }
        const repoData = await repoResponse.json();
        let repoHTML = "";
        if(repoData.length === 0)
        {
            repoHTML =
            "<p>No repositories found.</p>";
        }
        for (const repo of repoData.slice(0, 5))
        {
            repoHTML += `
                        <div class="repo-card">
                            <h3>${repo.name}</h3>
                            <p>
                                Language :
                                ${repo.language || "Not Specified"}
                            </p>
                            <p>
                                ⭐ Stars :
                                ${repo.stargazers_count}
                            </p>
                            <p>
                                🍴 Forks :
                                ${repo.forks_count}
                            </p>
                            <a href = "${repo.html_url}" target = "_blank">
                                View Repository
                            </a>
                        </div>`;
        }
        profile.innerHTML += `<div class = "repo-container">${repoHTML}</div>`;
        const avatar = document.querySelector(".avatar");
        avatar.addEventListener("click", function ()
        {
            overlayImage.src = avatar.src;
            overlay.classList.add("active");
        });

    }
    catch(error)
    {
        profile.innerHTML = 
        `<h2>${error.message}</h2>`
    }
    finally
    {
        loader.style.display = "none";
    }
    
}

const overlay = document.querySelector("#overlay");
const overlayImage = document.querySelector("#overlay-image");
const avatar = document.querySelector(".avatar");

overlay.addEventListener("click", function()
{
    overlay.classList.toggle("active");
});
overlayImage.addEventListener("click", function(event)
{
    event.stopPropagation();
});

