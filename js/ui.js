const loader = document.querySelector("#loader");
const searchBtn = document.querySelector("#search");
function showLoader()
{
    loader.style.display = "flex";
    searchBtn.disabled = true;
    searchBtn.innerText = "Searching...";
}

function hideLoader()
{
    loader.style.display = "none";
    searchBtn.disabled = false;
    searchBtn.innerText = "Search";
} 