const overlay = document.querySelector("#overlay");
const overlayImage = document.querySelector("#overlay-image");
overlay.addEventListener("click", function()
{
    overlay.classList.toggle("active");
});
overlayImage.addEventListener("click", function(event)
{
    event.stopPropagation();
});

function initializeOverlay()
{
    const avatar = document.querySelector(".avatar");
    if(!avatar)
    {
        return;
    }
    avatar.addEventListener("click", function ()
    {
        overlayImage.src = avatar.src;
        overlay.classList.add("active");
    });
}