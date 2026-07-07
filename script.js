const usernameInput = document.querySelector("#username")
const searchBtn = document.querySelector("#search");
const profile = document.querySelector("#profile");

searchBtn.addEventListener("click", loadProfile);

async function loadProfile()
{
    try
    {
        const username = usernameInput.value;
        if(username === "")
        {
            profile.innerHTML = 
            `<h2>Please enter a Username</h2>`;
            return;
        }
        const url = `https://api.github.com/users/${username}`; 
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error("User not found");
        }
        const data = await response.json();
        profile.innerHTML = 
        `<img src = "${data.avatar_url}" height = 150px width = 150px alt = "Profile Picture">
        <h2>Name : ${data.name}</h2>
        <p>Bio : ${data.bio || "No bio available"}</p>
        <p>Followers : ${data.followers}</p>
        <p>Following : ${data.following}</p>
        <p>Repositories : ${data.public_repos}</p>`;

        // Adding Repository Cards

        const repoURL = `https://api.github.com/users/${username}/repos`;
        const repoResponse = await fetch(repoURL);
        if(!repoResponse.ok)
        {
            throw new Error("No repositories available");
        }
        const repoData = await repoResponse.json();
        let repoHTML = "";
        for (const repo of repoData)
        {
            repoHTML += `<h3>${repo.name}</h3>`;
        }
        profile.innerHTML += repoHTML;

    }
    catch(error)
    {
        profile.innerHTML = 
        `<h2>User not found </h2>`
    }
    
}

