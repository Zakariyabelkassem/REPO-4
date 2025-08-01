let nov = document.querySelector(".nov");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");

let all = document.querySelector(".all");
let did = document.querySelector(".did");
let h1 = document.querySelector("h1");
let ofline = document.querySelector(".ofline");

let to = document.getElementById("to");

let right = document.getElementById("right");
let left = document.getElementById("left");
let persliders = document.querySelectorAll(".perslid");


let so = document.getElementById("so");
let nav = document.querySelector("nav");
let  hidegrand = document.querySelector(".hidegrand");
let co = document.getElementById("co");

let hide2 = document.querySelector(".hide2");

let userr = document.getElementById("userr");




let containerjs = document.querySelector(".containerjs");



let p = document.querySelectorAll("p");
let h2 = document.querySelectorAll("h2");




let img = document.getElementById("mog");


function get(value){
    img.src = value
}




containerjs.addEventListener("click" , (eo)=>{
   if(eo.target.id === "login"){
    userr.classList.remove("active");
 let inputs = containerjs.querySelectorAll(".in1");
   inputs.forEach(in1=>{
    in1.value = ""
   })

   }
  

})




hide2.addEventListener("click" , (eo)=>{
    if(eo.target.className === 'bx bx-search-alt'){
        hidegrand.classList.remove("active")
    }
    texteur.value = "";
})

// let alle = document.querySelector("all");
nav.addEventListener("click" , (eo)=>{
    if(eo.target.className === 'bx bx-search'){
        hidegrand.classList.add("active")

    }else if(eo.target.className === 'bx bx-user'){
        userr.classList.add("active")
    }
     if(eo.target.className === 'bx bx-brightness-half'){
        all.classList.toggle("active");
        
    }

})


function disslider(index){
    persliders.forEach(slider=>{
        slider.classList.remove("active");
    })

    persliders[index].classList.add("active");
    
}


let turn = 0;

function righ(){
turn++;

if(turn > 2){
    turn = 0;
}

disslider(turn);

}


function lef(){
    turn--;

    if(turn< 0){
        turn = 2
    }

    disslider(turn)
}


right.addEventListener("click" , function(){
    righ()
})

left.addEventListener("click" , function(){
    lef()
})

setInterval(function(){
    turn++;
    if(turn > 2){
        turn = 0
    }
    disslider(turn);
},3000)




window.onscroll = function(){
    if(scrollY >= 400){
        to.style.display = "block";

    }else {
        to.style.display = "none";
    }
}


to.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
}




window.onload = function(){
    nov.classList.add("hiden");

    // if(window.navigator.onLine){
    //     online()
    // }else{
    //     offline()
    // }
    
}

// window.addEventListener("online" , function(){
//     online()
// })
// window.addEventListener("offline" , function(){
//     offline()
// })

i2.onclick = function() {
    nov.classList.remove("hiden");
    i2.classList.add("hiden");
    i1.style.display = "block";
}

i1.onclick = function(){
    nov.classList.add("hiden");
    i2.classList.remove("hiden");
    i1.style.display = "none";
    
}




// ofline.onclick = function(){
//     location.reload()
// }
// function online(){
//     did.style.display = "none";
//     all.style.display = "block";
// }

// function offline(){
//     all.style.display = "none";
//     did.style.display = "block";
//     h1.innerHTML = "you are offline now";
//     h1.style.color = "red"

    
// }





