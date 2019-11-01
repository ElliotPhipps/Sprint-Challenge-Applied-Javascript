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

    const header1 = document.createElement('div')

    const date = document.createElement('span')

    const heading = document.createElement('h1')

    const temp = document.createElement('span')

    // set content

    date.textContent = 'SMARCH 28, 2019',

    heading.textContent = 'Lambda Times',

    temp.textContent = '98°'

    // setup structure of elements

    headerContainer.appendChild(header1)

    header1.appendChild(date)

    header1.appendChild(heading)

    header1.appendChild(temp)

    // setup class names

    header1.classList.add('.header')

    date.classList.add('.date')

    temp.classList.add('.temp')

    // return header
    
    return header1
}

const headerContainer = document.querySelector('.header-container')

Header();