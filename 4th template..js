//navbar responsive

//click close to hode the header bar
var close = document.querySelector("#close");
close = addEventListener("click", hide_head);
function hide_head() {
  var head = document.getElementById("headert");
  head.classList.add("hide_head");
}
document.getElementById("Myid").addEventListener("scroll", myFunction);

function myFunction() {
  document.getElementById("navbar").style.backgroundColor = "red";
}
// click on the i screen to control your screen display
var itt = document.querySelectorAll("i");
for (var i = 0; i < itt.length; i++) {
  if ((selected = document.querySelector("#i1"))) {
    var fontawesome = document.querySelector("#i1");

    fontawesome.addEventListener("click", display);

    function display() {
      var screen = document.getElementById("Myid");
      var nav = document.getElementById("navbar");
      var head = document.getElementById("headert");
      screen.classList.add("active");
      nav.classList.add("navbar2");
      head.classList.add("headt2");
    }
  }
  // if(selected = document.querySelector('#i2') ){
  var fontawesome2 = document.querySelector("#i2");

  fontawesome2.addEventListener("click", display2);

  function display2() {
    var screen = document.getElementById("Myid");
    var nav = document.getElementById("navbar");
    var head = document.getElementById("headert");
    var bar2 = document.getElementById("bar");
    screen.classList.add("active");
    nav.classList.add("navbar2");
    head.classList.add("headt2");
    bar2.classList.remove("bar");
    var press = document.getElementById("bar1");
    press.addEventListener("click", pressing);
    function pressing() {
      press.classList.add("navbar22");
      press.classList.remove("navbar2");
      // console.log(this)
    }
  }
  //navbar span
  document.querySelector("#bar1").addEventListener("click", toggleNav);

  function toggleNav() {
    var x = document.querySelector(".hey1");

    x.classList.toggle("hey");
  }

  var fontawesome3 = document.querySelector("#i3");

  fontawesome3.addEventListener("click", display3);

  function display3() {
    var screen = document.getElementById("Myid");
    var nav = document.getElementById("navbar");
    var head = document.getElementById("headert");
    var bar2 = document.getElementById("bar");
    screen.classList.add("active2");
    nav.classList.add("navbar3");
    bar2.classList.remove("bar");
    head.classList.add("headt3");
  }
}

// scrolling bar

var myNav = document.getElementById("navbar");
window.onscroll = function () {
  if (document.body.scrollTop >= 40) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

// download button
// const download = document.querySelector('#download_now')
// download.addEventListener('onclick',Open);
function Open() {
  window.open("https://startbootstrap.com/previews/creative", "_blank");
  // window.location.href = "https://www.google.com";
}

/////image slider////
//  var images =Array.from(document.querySelectorAll('.image-desc'));
//  images.forEach((images) => images.addEventListener('click',show_image))
//  function show_image(){
//   var new_div=document.createElement('div');
//   new_div.setAttribute('id','new_div');
//   div.classList.add('image-java');
//   var opened_image = this;
//   div.appendChild(opened_image).classList('image-java')

//  }
var show = document.querySelector(".carousel");
var img = Array.from(document.querySelectorAll(".img"));
console.log(img);
var images = Array.from(document.querySelectorAll(".cont_img"));
images.forEach((images) => images.addEventListener("click", show_image));
function show_image() {
  show.style.display = "block";
  var new_div = document.createElement("div");
  new_div.setAttribute("class", "image-java");
  var image = document.createElement("img");

  image.setAttribute("src", this.children[0].src);
  image.setAttribute("width", "100%");
  let slider = document.querySelector(".slide");
  var im2 = Array.from(slider);
  im2.push(img);
  console.log(im2);
  slider.innerHTML = "";
  slider.appendChild(image);
  var btn = document.querySelectorAll(".carousel-button");
  for (var btns of btn) {
    btns.addEventListener("click", button);
    console.log(this);
  }
}
function button() {
  if (this.id == "left") {
    slider.innerHTML = "";
    slider.append(im2[0]);
  } else {
    slider.innerHTML = "";
    slider.appendChild(image) + 1;
  }
}
////////////////////////////////////////////////////////////////////////////

// //// form ////////////////////////////////
document
  .querySelector('input[type="submit"]')
  .addEventListener("click", validation);
//stop the event until we validate
// function validation(e)
var inputs = document.querySelectorAll("input:not(input[type=submit]");
var error = 0;
function validation(event) {
  console.log("validation");
  // console.log('e.target:', e.target)

  //stop the default event of sending data to the backend
  event.preventDefault();

  //give me all the input except the submit button
  // inputs = [input, input, input, input]
  var inputs = document.querySelectorAll("input:not(input[type=submit]");
  console.log(inputs);

  //our validation rules
  for (var input of inputs) {
    if (input.value.length < 1) {
      //go to the paragh and write the error message
      // input.nextElementSibling.innerHTML="<span class='error'> this field is required </span>";
      input.nextElementSibling.classList.remove("hide_form");
      input.nextElementSibling.classList.add("error");
      error = 1;
      input.nextElementSibling.textContent = `${input.name} is required`;
    } else {
      //remove the text written in the paraph
      // input.nextElementSibling.innerHTML='';
      input.nextElementSibling.classList.add("hide_form");
    }
  }

  // the username char between 3 and 50 characters
  var username = Array.from(inputs).find((input) => input.name == "username");
  console.log(username.value.length);
  //2-create the validation
  if (username.value.length > 0) {
    if (username.value.length < 3 || username.value.length > 50) {
      username.nextElementSibling.classList.remove("hide_form");
      error = 1;
      username.nextElementSibling.textContent = `username must be between 3 and 50`;
    } else {
      username.nextElementSibling.classList.add("hide_form");
    }
  }

  // the email must be valid
  //email pattern
  let email_pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = Array.from(inputs).find((input) => input.name == "email");
  console.log(email_pattern.test(email.value));
  if (email.value.length > 0) {
    //if the condition is false
    if (!email_pattern.test(email.value)) {
      email.nextElementSibling.classList.remove("hide_form");
      error = 1;
      email.nextElementSibling.textContent = `email not valid`;
    } else {
      email.nextElementSibling.classList.add("hide_form");
    }
  }
  var phone = Array.from(inputs).find((input) => input.name == "Phonenumber");
  if (phone.value.length > 0) {
    if (phone.value.length < 14 || phone.value.length > 14) {
      phone.nextElementSibling.classList.remove("hide_form");
      error = 1;
      phone.nextElementSibling.textContent = `phone must be 14 number`;
    } else {
      phone.nextElementSibling.classList.add("hide_form");
    }
  }
}
