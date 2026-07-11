export function saveHistory(username)
{
    let history = JSON.parse(localStorage.getItem("history")) || [];
    if(!history.includes(username))
    {
        history.unshift(username);
        history = history.slice(0, 5);
        localStorage.setItem("history", JSON.stringify(history));   
    }
    displayHistory();
}

export function displayHistory()
{
    const historyList = document.querySelector("#history-list");
    historyList.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("history")) || [];
    let html = "";
    for (const item of history)
    {
        html += 
        `
        <div class = "history-item" data-user = "${item}">
        ${item}
        </div>
        `;
    }
    historyList.innerHTML = html;
}
export function setupHistory(onHistoryClick)
{
    document.addEventListener("click", function(event)
    {
        if(event.target.classList.contains("history-item"))
        {
            const username = event.target.dataset.user;
            onHistoryClick(username);
        }
    });
}