// changing the color of the its first element to red
// This selects the first <a> tag inside the <nav> element
document.querySelector("a").style.color = 'red';


//changing the color of first and last element to green

document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style.color = "green"; // From the nav, get the ul (first child), then the first li, and then the a tag
document.querySelector("nav").firstElementChild.lastElementChild.firstElementChild.style.color = "green"; // From the nav, get the ul (first child), then the last li, and then the a tag


// Select all <li> elements on the page.
const listItems = document.querySelectorAll('li');

// Loop through each element in the NodeList.
listItems.forEach(item => {
    // Change the background color of the current item.
    item.style.backgroundColor = 'gold';
});