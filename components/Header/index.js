// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // setup elements

    const header = document.createElement('div');

    const date1 = document.createElement('span');

    const heading = document.createElement('h1');

    const temp = document.createElement('span');

    // set content

    date1.textContent = `Smarch 28, 2019`;

    heading.textContent = `Lambda Times`;

    temp.textContent = `98°`

    // setup structure of elements

    header.appendChild(date1);

    header.appendChild(heading);

    header.appendChild(temp);

    // setup class names

    header.classList.add('.header');

    date1.classList.add('.date');

    temp.classList.add('.temp')

    // return header
    
    return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());