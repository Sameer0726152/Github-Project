function displayRepositories(repositories)
{
    const repoContainer = document.querySelector(".repo-container");
    let repoHTML = "";
        if(repositories.length === 0)
        {
            repoContainer.innerHTML = "<p>No repositories found</p>";
            return;
        }
        for (const repo of repositories.slice(0, 6))
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
        repoContainer.innerHTML = repoHTML;
}

function setupRepositorySearch()
{
    const repoSearch = document.querySelector("#repo-search");
        repoSearch.addEventListener("input", function()
        {
            const keyword = repoSearch.value.toLowerCase();
            const filtered = allRepositories.filter(function(repo)
        {
            return repo.name.toLowerCase().includes(keyword);
        });
            displayRepositories(filtered);
        });
}