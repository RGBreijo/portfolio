

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', navBarClicked);

function navBarClicked()
{
    let nav = document.getElementsByTagName("nav")[0];
    let style = window.getComputedStyle(nav);

    if(style.getPropertyValue("display") == "none")
    {
        nav.style.display = "block";
        // now the transition
    }else{
        nav.style.display = "none";
    }
}