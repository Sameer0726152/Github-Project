import {showLoader, hideLoader, searchBtn} from "./ui.js";
import { getUser, getRepositories } from "./github.js";
import displayProfile from "./profile.js";
import { saveHistory, setupHistory, displayHistory } from "./history.js";
import initializeOverlay from "./overlay.js";
import {displayRepositories, setupRepositorySearch, setupRepositorySorting} from "./repositories.js";


const usernameInput = document.querySelector("#username")
const profile = document.querySelector("#profile");

searchBtn.addEventListener("click", function()
{
    loadProfile(usernameInput.value.trim());
});
usernameInput.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        loadProfile(usernameInput.value.trim());
    }
});

async function loadProfile(username)
{
    try
    {
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
        displayRepositories(repoData);
        setupRepositorySearch();
        setupRepositorySorting(); 
        saveHistory(username);
        displayHistory();
        setupHistory(function(username)
        {
            usernameInput.value = username;
            loadProfile(username);
        });
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
