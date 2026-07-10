const usernameInput = document.querySelector("#username")

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
        const username = usernameInput.value.trim();
        if(!username)
        {
            profile.innerHTML = 
            `<h2 class = "error">Please enter a Username</h2>`;
            return;
        }
        showLoader();
        const data = await getUser(username);
        displayProfile(data);
        const repoData = await getRepositories(username);
        totalRepositories = repoData; 
        displayRepositories(repoData);
        setupRepositorySearch();
        setupRepositorySorting(); 
        saveHistory(username);
        initializeOverlay();
    }
    catch(error)
    {
        profile.innerHTML = 
        `<h2>${error.message}</h2>`
    }
    finally
    {
        hideLoader();
    }
}
