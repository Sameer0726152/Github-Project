const profile = document.querySelector("#profile");
export default function displayProfile(data)
{
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

        <div class="repo-search">
            <input
                id="repo-search"
                placeholder="Search repositories">
        </div>

        <div class="repo-controls">
            <select id="sort-repositories">
                <option value="default">Default</option>
                <option value="nameasc">Name (A-Z)</option>
                <option value="namedesc">Name (Z-A)</option>
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
                <option value="updated">Recently Updated</option>
                <option value="all">All Repos</option>
            </select>
        </div>

        <div class="repo-container"></div>
        `;
}
