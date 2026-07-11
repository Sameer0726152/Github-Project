let totalRepositories = [];
export function displayRepositories(repositories)
{
    if(totalRepositories.length === 0)
    {
        totalRepositories = repositories;
    }
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
                            <h3 class = "reponame">${repo.name}</h3>
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

function displayAllRepositories(repositories)
{
    const repoContainer = document.querySelector(".repo-container");
    let repoHTML = "";
        if(repositories.length === 0)
        {
            repoContainer.innerHTML = "<p>No repositories found</p>";
            return;
        }
        for (const repo of repositories)
        {
            repoHTML += `
                        <div class="repo-card">
                            <h3 class="reponame">${repo.name}</h3>
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

export function setupRepositorySearch()
{
    const repoSearch = document.querySelector("#repo-search");
        repoSearch.addEventListener("input", function()
        {
            const keyword = repoSearch.value.toLowerCase();
            const filtered = totalRepositories.filter(function(repo)
        {
            return repo.name.toLowerCase().includes(keyword);
        });
            displayRepositories(filtered);
        });
}

export function setupRepositorySorting()
{
    const sortSelect = document.querySelector("#sort-repositories");
    sortSelect.addEventListener("change", function()
    {
        const sorted = [...totalRepositories];
        if(sortSelect.value === "default")
        {
            displayRepositories(totalRepositories);
            return;
        }
        else if(sortSelect.value === "stars")
        {
            sorted.sort(function(a, b)
            {
                return b.stargazers_count - a.stargazers_count;
            });
        }
        else if(sortSelect.value === "forks")
        {
            sorted.sort(function(a, b)
            {
                return b.forks_count - a.forks_count;
            });
        }
        else if(sortSelect.value === "updated")
        {
            sorted.sort(function(a, b)
        {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
        }
        else if(sortSelect.value === "nameasc")
        {
            sorted.sort(function(a, b)
            {
                return a.name.localeCompare(b.name);
            });
        }
        else if(sortSelect.value === "namedesc")
        {
            sorted.sort(function(a, b)
            {
                return b.name.localeCompare(a.name);
            });
        }
        else if(sortSelect.value === "all")
        {
            displayAllRepositories(totalRepositories);
            return;
        }
    displayRepositories(sorted);
    });
}