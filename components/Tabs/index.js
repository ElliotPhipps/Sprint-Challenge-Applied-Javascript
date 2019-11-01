// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {

    console.log(response.data.topics);
  
    const lambdatopics = document.querySelector('.topics');

    return response.data.topics.forEach(e => {

        lambdatopics.appendChild(tabs(e));

    })

})

.catch(error => {

    console.log(error);

})

function tabs(topics){

    // setup element

    const tab = document.createElement('div');

    //set content

    tab.textContent = topics;

    //setup class names

    tab.classList.add('tab');

    return tab;
    
}