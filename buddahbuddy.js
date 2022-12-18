// SOme commenents
// Creating button element
var button = document.createElement('BUTTON');
button.setAttribute("id", "button");
//button.setAttribute("onclick", "alert('What we are reluctant to touch often seems the very fabric of our salvation - White Noise by Don DeLillo')");
button.setAttribute("onclick", "location.href='./buddahbuddy.html'");

// On click, produce message in browser
function message() {
	var alert = document.createElement('DIV');
        alert.setAttribute("class", "alert");
        var span = document.createElement('SPAN');
        span.setAttribute("class", "closebtn");
        alert.appendChild(span);
        var text = 'hey';
        return alert.append(text);
};

                 
// Creating text to be displayed on button
var text = document.createTextNode("Click Me!");
                 
// Appending text to button
button.appendChild(text);

// Create own alert box
/*
var alert = document.createElement('DIV');
alert.setAttribute("class", "alert");
var span = document.createElement('SPAN');
span.setAttribute("class", "closebtn");
alert.appendChild(span);
var text = 'hey';
alert.append(text);*/

                 
// Appending button to div
document.body.append(button);

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

 // Create new link Element
var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'buddahbuddy.js';
 
        // Append link element to HTML head
        head.append(link);


