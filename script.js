

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', navBarClicked);

function navBarClicked()
{
    let nav = document.getElementsByTagName("nav")[0];
    let style = window.getComputedStyle(nav);

    if(nav.style.height == "0px")
    {
          nav.style.display = "block";
          nav.style.height = "150px";
          nav.style.transition = "all 0.5s";
    }else{
        nav.style.height = "0px";
    }
}

// overflow hidden