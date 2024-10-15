// Challenge 2 Starter
// Event listener for the body to handle events bubbling up
document.body.addEventListener
('click', function(event) {
if (event.target.id === 'button1') {
    event.target.textContent ="Bubbled Up!"
}
else if (event.target.id === 'button2') {
    event.target.textContent ="Hovered!"
}
else if (event.target.id === 'button3') {
    event.target.textContent ="Double clicked!"
}
});


