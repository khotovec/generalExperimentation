/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

var pageTitle = document.getElementById('pageTitle'),
    mainBody = document.getElementById('mainBody'),
    firstTitle = document.getElementById('firstTitle'),
    firstPara = document.getElementById('firstPara'),
    secondTitle = document.getElementById('secondTitle'),
    secondPara = document.getElementById('secondPara'),
    mainBody = document.getElementById = ('mainBody');

function home() {
    "use strict";
    location.reload();
}

function news() {
    "use strict";
    pageTitle.innerHTML = "NEWS";
    firstTitle.innerHTML = "Looks like we have News!";
    firstPara.innerHTML = "There is some serious crap going on in the world today. We need to look at these unbelievable cities and realms. The North never forgets, winter is coming. Miles below the World I knew never understood the dread I've felt.";
    secondTitle.style.display = 'none';
    secondPara.style.display = 'none';
}

function contactPage() {
    "use strict";
    var contactForm = document.createElement = "div";
    pageTitle.innerHTML = "CONTACT US";
    mainBody.append('contactForm');
    contactForm.innerHTML = "We'd Love to hear from you!";
    firstTitle.style.display = 'none';
    firstPara.style.display = 'none';
    secondTitle.style.display = 'none';
    secondPara.style.display = 'none';
    //contactBody.innerHTML = "<input type=text id='firstName' placeholder='First Name'><br><input type='text' id='lastName' placeholder='Last Name'>";
}