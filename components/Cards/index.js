// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

    // console.log(response);
  
    const tabs = document.querySelector('.topics');
  
    tabs.appendChild(Header(response.data));
  
});

function newCard(object) {

    // define new elements
  
    const card = document.createElement('div');

    const headline = document.querySelector('div');

    const author = document.querySelector('div');

    const imgContainer = document.querySelector('div')
  
    const image = document.createElement('img');
  
    const authorName = document.createElement('span');
  
    //set content
  
    image.src = object.authorPhoto;
  
    authorName.textContent = object.authorName;

    headline.textContent = object.headline;
  
    // setup structure of elements
  
    card.appendChild(headline);

    card.appendChild(author);
  
    author.appendChild(imgContainer);
  
    author.appendChild(authorName);
  
    imgContainer.appendChild(image);
  
    // setup class names
  
    card.classList.add('card')
  
    headline.classList.add('headline')
  
    author.classList.add('author')
  
    imgContainer.classList.add('img-container')
  
    // return card
    
    return newCard
  
}