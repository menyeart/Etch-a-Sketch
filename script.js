
//Creates divs where vairable 'boxNumber' is the amount and adds CSS styling to distribute them on the page.

let boxNumber = 100;

function boxCreator(boxNumber) {

    let size = "calc(100% /" + Math.ceil(Math.sqrt(boxNumber)) + ")";

    for (i = 0; i < boxNumber; i++) {
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('content');
 //       content.textContent = 'test';
        container.appendChild(content);
        content.style.height = size;
        content.style.width = size;
        content.style.color = 'white';
        content.addEventListener('mouseover', 
  e => e.target.classList.add('cellBackground')
)
        }
}

//styling the container
container.style.cssText = 'display:flex; height:650px; width: 650px; background: black; flex-wrap: wrap; align-contenet:flex-start; border: 75px solid red;'


button.addEventListener("click", myFunction);


// button  to remove the used boxes and create new ones based on the users choice.

function myFunction(removedOb) {

    boxRemover('content');
    let boxNumber = window.prompt("Choose the number of boxes","100");
    boxCreator(boxNumber);
}

//function to loop through js created dom nodes and remove them

function boxRemover(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

