var smenu = document.querySelector(".smenu");
var darkBtn = document.getElementById("darkbtn")


function sMenu(){
    smenu.classList.toggle("smenuheight");
}
darkbtn.onclick = function(){
    darkBtn.classList.toggle("darkon");
    document.body.classList.toggle("dark");
    
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
          localStorage.setItem("theme", "light");
    }
    
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("darkon");
     document.body.classList.remove("dark");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("darkon");
    document.body.classList.add("dark");
}
else{
    localStorage.setItem("theme","light");
}
