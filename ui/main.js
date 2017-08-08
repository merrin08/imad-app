/*console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById ('main-text');
element.innerHTML = 'New Value';

//Move the image
var img= document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};*/

//Counter code
var button = document.getElementById ('Counter');
var counter = 0;
button.onclick = function() {
    
    //Make a request to the counter endpoint
        
    //capture the response and store it in a variable
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    //render the varriable in the correct span
};