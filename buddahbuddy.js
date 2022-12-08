//var hello = alert('"What we are reluctant to touch often seems the very fabric of our salvation" - White Noise By Don Delillo');

//var elemDiv = document.createElement('div');
//elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
//document.body.appendChild(elemDiv);

g = document.createElement('div');
g.setAttribute("id", "Div1");

// creating button element
var button = document.createElement('BUTTON');
button.setAttribute("class", "button");
                 
// creating text to be
//displayed on button
var text = document.createTextNode("Button");

                 
// appending text to button
button.appendChild(text);
                 
// appending button to div
document.body.append(button);
