// scroll-up button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// navbar
let z = document.querySelector(".fa-bars");
var m = document.querySelector(".list");
z.addEventListener("click", click_navbar);
var x = window.matchMedia("(max-width: 950px)");
var close1 = document.querySelector(".fa-regular");
close1.addEventListener("click", closefn);
var body = document.querySelector(".body");
//navbar scrolling

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "white"); 
    }

    else{
      $(".navbar").css("background" , "none");  
    }
  })
})
// function when clickink on the span in the navbar 
function click_navbar(e) {
  e.preventDefault();
  if (x.matches) {
    close1.style.display = "block";
    // g.style.backgroundColor = "#0056B3";
    body.style.opacity = "0.8";
    m.classList.toggle("hey");
    //  m.style.display = "block";
  } else {
    console.log("hey");
  }
}
// function for the close icon in the navbar
function closefn(e) {
  e.preventDefault();
  m.classList.remove("hey");
  close1.style.display = "none";
  body.style.opacity= "1";
  // click_navbar.disabled = true;
}


// // container 11 
// var press = document.querySelectorAll(".accordion");
// press.forEach((accordion) => {
//   accordion.onclick = function () {
//     this.classList.toggle("is-open");
//     let content = this.nextElementSibling;
//     console.log(content);
//     // hide and show the head of each content
//     content.classList.toggle("container11-item2");
//     var container = document.querySelector(".container11");
//     container.classList.toggle("container11_height");
//     // document.getElementById("show").style.display = "block";
//     if (content.style.maxHeight) {
//       //this is if the accordion is open
//       content.style.maxHeight = null;
//     } else {
//       //if the accordion is currently closed
//       content.style.maxHeight = content.scrollHeight + "px";
//       console.log(content.style.maxHeight);
//     }
//   };
// });



// // when pressing on the + show the content
// var plus = document.querySelectorAll(".pressing");

// // plus.addEventListener("click", show);
// // function show() {
// //   let content2 = this.nextElementSibling;
// //   // document.getElementById("show5").style.display = "block";
// //   console.log(content2);
// //   content2.classList.toggle("container11-content2");
// // }
// plus.forEach((show) => {
//   show.onclick = function(){
//     this.classList.toggle("is-open1");
  
//     let content2 = this.nextElementSibling;
// //   // document.getElementById("show5").style.display = "block";
//   //  console.log(content2);
//   content2.classList.toggle("container11-content2");
  


//   }
// });
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


// const press =$('.accordion1');
// const show =$('.accordion');
// press .click(function(){
//     const this_title =$(this);
//     const this_content = $(this).parent().find(".accordion")
//     // show.toggle();
//     this_content.toggle();
//     show.not(this_content).hide();
    
// })
// Cache out buttons container, and all of the panels
const buttons = document.querySelector('.accordion2');
const panels = document.querySelectorAll('.accordion');

// Add an event listener to the buttons container
buttons.addEventListener('click', handleClick);

// When a child element of `buttons` is clicked
function handleClick(e) {
 
  // Check to see if its a button
  if (e.target.matches('button')) {

    // For every element in the `panels` node list use `classList`
    // to remove the show class
    panels.forEach(panel => panel.classList.remove('show'));

    // "Destructure" the `id` from the button's data set
    const { id } = e.target.dataset;

    // Create a selector that will match the corresponding
    // panel with that id. We're using a template string to
    // help form the selector. Basically it says find me an element
    // with a "panel" class which also has an id that matches the id of
    // the button's data attribute which we just retrieved.
    const selector = `.accordion[id="${id}"]`;

    // Select the `div` and, using classList, again add the
    // show class
    console.log(selector)
    document.querySelector(selector).classList.toggle('show');
  //   if(document.getElementsByClassName("accordion").style.display == "block"){
  //   document.querySelector(selector).classList.toggle('show');
  //   }
  //   else{
  //     document.querySelector(selector).classList.remove('show');
  //   }
  }
}


// container 11 
const btnns = document.querySelectorAll('.accordion1');
btnns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;
    console.log(content);
    // hide and show the head of each content
    // content.classList.toggle("container11-item2");
    var container = document.querySelector(".container11");
    container.classList.toggle("container11_height");
    // document.getElementById("show").style.display = "block";
  //   if (content.style.maxHeight) {
  //     //this is if the accordion is open
  //     content.style.maxHeight = null;
  //   } else {
  //     //if the accordion is currently closed
  //     content.style.maxHeight = content.scrollHeight + "px";
  //     console.log(content.style.maxHeight);
  //   }
  };
});

