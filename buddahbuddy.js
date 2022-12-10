//var hello = alert('"What we are reluctant to touch often seems the very fabric of our salvation" - White Noise By Don Delillo');

g = document.createElement('div');
g.setAttribute("id", "Div1");

// creating button element
var button = document.createElement('BUTTON');
button.setAttribute("id", "button");
button.setAttrubute("onclick", "message()");
                 
// creating text to be
//displayed on button
var text = document.createTextNode("Click Me!");

                 
// appending text to button
button.appendChild(text);
                 
// appending button to div
document.body.append(button);

// on click produce text with quote

// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

 // Create new link Element
var link = document.createElement('link');
 

        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = './styles.css';
 
        // Append link element to HTML head
        head.appendChild(link);

// on click, produce message in browser
function message() {
	document.getElementById("")
}
