//NAVIGATION 

function myFunction(){
    var container = document.getElementById("nav");
    console.log(container.style.display);
    if(container.style.display === "none" || container.style.display === ""){
        container.style.display = "block";
    }
    else{
        container.style.display = "none";
    }
}



//button  to top

//Button appeares when it reaches 100px;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// SMOOTH SCROLL
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// MODAL

//Get the modal
var modal = document.getElementById("myModal");
//get the button
var btn = document.getElementById("myBtn1");
//close button
var span = document.getElementsByClassName("close")[0];
//button click event
btn.onclick = function() {
    modal.style.display = "block";
}
// X click event
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}




