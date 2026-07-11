const loader = document.querySelector("#loader");
export const searchBtn = document.querySelector("#search");
export function showLoader()
{
    loader.style.display = "flex";
    searchBtn.disabled = true;
    searchBtn.innerText = "Searching...";
}

export function hideLoader()
{
    loader.style.display = "none";
    searchBtn.disabled = false;
    searchBtn.innerText = "Search";
} 