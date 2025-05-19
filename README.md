# Pet Adoption Finder Code Explanation

This document provides a detailed explanation of the Pet Adoption Finder web application code. This gives a run down of a simple pet finder system built with HTML, CSS, and Javascript.

## Table of Contents

1. [HTML Structure](#html-structure)
2. [CSS Styling](#css-styling)
3. [Javascript Functionality](#javascript-Functionality)
4. [Checklist](#checklist)

## HTML Structure

The user interface is defined in the HTML Structure of the Pet Adoption Finder Web Application:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Pet Adoption Finder</title>
   <link  rel="stylesheet" href="style.css">

</head>
<body class="light">
   <div class="container">
       <div>
           <h1>🐶🐱Pet Adoption Finder</h1>
           <button class="btn" id="themeToggle">Toggle Theme</button>
       </div>
       <!-- search bar -->

           <input class="searchbar" id="search-input" type="search" placeholder="Enter Pet Name" aria-label="Search">
           <button class="btn" type="submit" >Search</button>
                 <!-- container for for generated adoption cards -->
       <div  class="subContainer" id="resultsContainer"></div>

       </div>


       <script src="greet.js"></script>
       <script src="data.js"></script>
       <script src="theme.js"></script>
       <script src="timer.js"></script>
       <script src="search.js"></script>
</body>
</html>
```

Key HTML Componets:

- Container `div` that contains the entire application
- Heading which displays titles
- Input variable with a searchbar functionalitys and an "Search" button.
- `div` container that holds rendered pet adoption cards

## CSS Styling

The visual appearance of the Pet Adoption Finder is define through the CSS styling

```CSS
*{
   margin:0;
   padding: 0;
   box-sizing: border-box;
   transition: background-color 0.3s, color 0.3s;
}

body{
   font-family:Arial, Helvetica, sans-serif;
   justify-content: center;
   align-items: center;
   background-color: var(--bg-color);
   color: var(--text-color);

}

.light{
   --bg-color:#f5f5f5;
   --text-color:#333;
   --card-bg:#fff;
   --card-border:#ddd;
   --button-bg: rgb(233, 101, 0);
--button-hover:rgb(172, 74, 0);
   --filterbtn-bg:#ffffff;
   --petcardbg:white;
}
.dark{
   --bg-color:#222;
   --text-color:#f5f5f5;
   --card-bg:#333;
   --card-border:#444;
   --button-bg:rgb(233, 101, 0);
   --button-text:#fff;
   --button-hover:rgb(172, 74, 0);
   --petcardbg:#333;
   --filterbtn-bg:#171616;
}
.container{
   font-size: 1.4em;
   text-align: center;
   margin-top:5%;
}
.btn{
   margin-top: 10px;
   background-color: var(--button-bg);
   border-radius: 30px;
   border: none;
   padding: 15px;
   font-size: 0.9em;
   font-weight: bold;
   color: white;
}
.btn:hover{
   background-color:var(--button-hover);
   transition: background-color 0.2s;
}
.searchbar{
   padding: 15px;
   width: 50%;
   border-radius:30px ;
}

  .pet-card{
 background-color: var(--petcardbg);
 box-shadow:0 2px 4px rgba(0,0,0,0.4);
   width: 25%;
   height: fit-content;
   padding: 10px;
   margin-left: 20px;
   margin-bottom: 50px;
   transition: transform 1s;
   border-radius: 10px;


 }

  .pet-img{
   width: 100%;
   height: 400px;
   border-radius: 10px;


 }
 .pet-card:hover{
   cursor: pointer;
   transform: scale(1.03);

 }
 .pet-card a:hover{
   text-decoration-line: underline;
   color: #444;
 }
 .pet-card a{
   margin-top: 10px;
   color:  rgb(233, 101, 0) ;
   font-size: 32px;
   text-decoration: none;
 }
 .pet-card p{
   display: inline;
   color: rgb(107, 107, 107);
   font-size: 16px;
 }
 .subContainer{
   margin-top: 5%;
   width: 98vw;
   flex-wrap: wrap;
   display: flex;
   justify-content: space-evenly;


 }
```

Key CSS features:

1. **Reset style**: Applies default margin, padding, and box-sizing for all elements
2. **Body styling**: Setting font to all text and aligning render items centered
3. **Light/Dark Theme style**: Defines the light and dark theme colors for the webpage
4. **Container**: Displays font size, align text, and margin for items within the container
5. **Button style**: Sets the appearance of the search button
6. **Searchbar style**:Sets the appearance of the searchbar
7. **Pet card style**: Sets the appearance of rendered pet cards, with tranformations, width and height properties to fit the content displayed
8. **Subcontainer**: Positions cards evenly including flex and wrap

## Javascript Functionality

Handles all dymanic behavior within the web application Pet Adoption Finder:

### Greeting Functionality

```javascript
//set cookie that expires in 7 days
function greetUser() {
  const hasVisitedBefore = document.cookie.includes("visitedBefore=true");
  if (hasVisitedBefore) {
    alert("👋 Welcome back to PetAdoption Finder!");
  } else {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    document.cookie = `visitedBefore=true;
       expires=${expiryDate.toUTCString()}; path=/`;
    alert("Welcome to PetAdoption Finder!");
  }
}
greetUser();
```

This section displays a greeting message upon opening the webpage to the user with setting cookies expiration date base on the users activity

### Data Array

```Javascript
//data array
const pets=
[
    {
        image:"cat1.png",
        name:"Pepper" ,
        age:"1",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog1.png",
        name:"Bolt",
        age:"5",
        gender:"male",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat2.png",
        name:"Maru",
        age:"2",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat3.png",
        name:"Princess",
        age:"2",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog3.png",
        name:"Rocky",
        age:"1",
        gender:"female",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog4.png",
        name:"Maximus Prime",
        age:"6",
        gender:"male",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog2.png",
        name:"Layla",
        age:"4",
        gender:"female",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat4.png",
        name:"Cocopuffs",
        age:"1",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat5.png",
        name:"Chicken Nugget",
        age:"10",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat6.png",
        name:"Stanely",
        age:"5",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    }



];
console.log(pets);
```

This section holds the necessary information in an object array for each pet within the Adoption Finder

### Render Pets

```Javascript
//render pets
function renderPets(pets){
    console.log('renderPets called with', pets.length, 'pets');

    const resultsContainer= document.getElementById('resultsContainer');
    //check if results container exist
    if(!resultsContainer){
        console.error('Results container not found');
        return;
    }

    //clear the container
    resultsContainer.innerHTML='';
    //if no pets found show message
    if(pets.length===0){
        console.log('No pets found, showing empty message ');
        resultsContainer.innerHTML= '<p id="noResults">No pets found</p>';
        return;
    }
    const petsElement=[];
    pets.forEach(pet =>{
        if(!pet || typeof pet.name !== 'string'){
            console.warn('Invalid pet object:', pet);
            return;
        }
        const petDiv= document.createElement('div');
        petDiv.className='pet-card';
        petDiv.innerHTML=`
            <div class="petHeader">
                <img src="${pet.image || ''}" alt="Image of ${pet.name}" class="pet-img">
                <a href="${pet.link}" target="_blank"><strong>${pet.name}</strong></a>
            </div>
                <p><strong>${pet.age} years old</strong></p>
                <p><strong>${pet.gender}</strong></p>
                 `;
                 petsElement.push(petDiv);

    });

    //append all pet cards at once
    petsElement.forEach(Element=>{
        resultsContainer.appendChild(Element);
    });
    console.log(`Successfully rendered ${pets.length} pets`);
}
renderPets(pets);
```
This function is tasked to display each pet with in the webpage, by using innerHTML in the Javascript to add the pet card apperance with the Pets array information
### Changing Theme
```Javascript
//setting theme change
//preference should store in local storage
const themeToggle= document.getElementById('themeToggle');

//load theme preference from localstorage
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}

//save theme preference to localstorage
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
});

//add keyboard shortcut
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key ==='D'){
        themeToggle.click();
    }
})
```
The Theme function gives funtionality to the toggle theme button, allowing the user to switch between light and dark mode including an theme preference for the user, displaying the same theme everytime the user visits the webpage
### Timer Functionality
```Javascript
//timer function
function startTimer(){
    console.log('Starting session timer');

    //checl if timer already exist
    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one');
        return;
    }

    //initialize session time at 0
    let sessionSeconds=0;

    //create timer display elements
    const timerElement=document.createElement('div');
    timerElement.id="sessionTimer";
    timerElement.style.marginTop="20px";
    timerElement.style.color="var(--button-bg)";
    timerElement.style.fontSize="18px";
    timerElement.style.textAlign="center";
    document.body.appendChild(timerElement);

    //update timer display
    updateTimerDisplay(timerElement, sessionSeconds);

    //update timer every second
    let timerInterval=setInterval(() =>{
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        //trigger special message
        if(sessionSeconds === 300){
            showLongSessionMessage();
        }
    }, 1000);

    //when page is about to unload
    window.addEventListener('beforeunload', ()=>{
        console.log('Page unloading, stopping timer');
        clearInterval(timerInterval);
    });
}

//function to format and display time
function updateTimerDisplay(elements, totalSeconds){
    const hours=Math.floor(totalSeconds/3600);
    const minutes=Math.floor((totalSeconds % 3600)/60);
    const seconds=totalSeconds %60;
    
    let timeText=`⏲Time on page:`;

    if(hours> 0){
        timeText+=`${hours}h`;
    }
    if(hours>0 || minutes>0){
        timeText+= `${minutes}m`;
    }
    timeText+=`${seconds}s`;
    elements.textContent=timeText;
}
//show message for users spending a long time on the site
function showLongSessionMessage(){
    console.log('Showing long session message(5minutes)');

    //check if message already exists to prevent duplicates
    if(document.getElementById('longSessionMessage')){
        console.log('Long session message already exits');
        return;
    }

    const messageDiv= document.createElement('div');
    messageDiv.id="longSessionMessage";
    messageDiv.style.padding='10px';
    messageDiv.style.margin='20px 0';
    messageDiv.style.backgroundColor='var(--button-bg)';
    messageDiv.style.color='var(--button-text)';
    messageDiv.style.borderRadius='8px';
    messageDiv.style.textAlign='center';
    messageDiv.innerHTML=`
        <p>You've been exploring for 5 minutes! Thanks for your interest in PetAdoption Finder!</p>
            <button id="dismissMessage" style="margin-top:10px; padding:5px 10px; border:none;
            border-radius:4px; cursor:pointer;"> Dismiss</button>
            `;

    //check if timer element exists
    const timerElement=document.getElementById('sessionTimer');
    if(timerElement){
        document.body.insertBefore(messageDiv, timerElement);
    }else{
        document.body.appendChild(messageDiv);
    }

    //add event listner to dismiss button
    const dismissButton= document.getElementById('dismissMessage');
    if(dismissButton){
        dismissButton.addEventListener('click', function(){
            const message= document.getElementById('longSessionMessage');
            if(message){
                message.remove();
            }
        });
    }
}
startTimer();
```
These functions make up the Timer functionality:
- `startTimer()`: Initializes the timer to begin upon opening the application
- `updateTimerDisplay()`: Updates the display of the Timer with real time countdown on the webpage 
- `showLongSessionMessage()`: Creates a message that display when the user spends 5 minutes on the webpage
### Search Functionality
```Javascript
const searchInput=document.getElementById('search-input');


searchInput.addEventListener("input", (event)=>{
     searchValue=event.target.value.trim().toLowerCase();
     //filter by name
    const filteredPets=pets.filter((pet)=>pet.name.toLowerCase().includes(searchValue));
    renderPets(filteredPets)  
});

searchInput.addEventListener('keydown', function(e){
    if(e.key ==='Enter'){
        const searchTerm=searchInput.value.trim().toLowerCase();
        console.log('Enter key pressed for search term:', searchTerm);

        if(searchTerm !==''){
            saveSearchTerm(searchTerm);
            searchInput.value='';
        }
    }//add keyboard shortcut
});



function saveSearchTerm(term){
    let searchHistory=JSON.parse(localStorage.getItem('searchHistory')) ||[];
    //limit history to 10 searches
    if(searchHistory.length >= 10){
        searchHistory.shift();//remove oldest search
    }
    //save only if not already in history
    if(!searchHistory.includes(term)){
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}
saveSearchTerm()
``` 
In this section it sets up a live searchbar using `addEventListener()`
Function `saveSearchTerm()` storage a search history with in the local storage

## Checklist

### Javascript Checklist
1. **Variable Naming:** Give a camelCase name for a variable- 
```Javascript
    let searchHistory
```
2. **Function Naming:** 
```Javascript
function renderPets(pets){}
```
3. **Array & Object:** Creates a list of animals to inlist on the webpage using an object array with information
```Javascript
const pets=
[
    {
        image:"cat1.png",
        name:"Pepper" ,
        age:"1",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog1.png",
        name:"Bolt",
        age:"5",
        gender:"male",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat2.png",
        name:"Maru",
        age:"2",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat3.png",
        name:"Princess",
        age:"2",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog3.png",
        name:"Rocky",
        age:"1",
        gender:"female",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog4.png",
        name:"Maximus Prime",
        age:"6",
        gender:"male",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"dog2.png",
        name:"Layla",
        age:"4",
        gender:"female",
        pet:"dog",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat4.png",
        name:"Cocopuffs",
        age:"1",
        gender:"female",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat5.png",
        name:"Chicken Nugget",
        age:"10",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    },
    {
        image:"cat6.png",
        name:"Stanely",
        age:"5",
        gender:"male",
        pet:"cat",
        link:"https://www.azhumane.org/adopt/"
    }



];
```
4. **Array Method:** Using filtered method to create a new array of pets base on the user search input
```Javascript
const filteredPets=pets.filter((pet)=>pet.name.toLowerCase().includes(searchValue));
 ```
5. **Looping:**
```Javascript
 if(hours> 0){
        timeText+=`${hours}h`;
    }
    if(hours>0 || minutes>0){
        timeText+= `${minutes}m`;
    }
    timeText+=`${seconds}s`;
    elements.textContent=timeText;
 ```
6. **JSON Data Handling:**
```Javascript
    let searchHistory=JSON.parse
```
7. **WebStorage:**
```Javascript
(localStorage.getItem('searchHistory')) ||[];
```
8. **Saving User Data:**
```Javascript
//save theme preference to localstorage
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
});

```
9. **Cookie with Expiry:**
```Javascript
const expiryDate=new Date();
        expiryDate.setDate(expiryDate.getDate()+7);
        document.cookie=`visitedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to PetAdoption Finder!");
```
10. **DOM Manipulation:**
```Javascript
 const petDiv= document.createElement('div');
 ```
 11. **CSS Manipulation:**
 ```Javascript
  timerElement.style.marginTop="20px";
  ```
12. **Theme Preference:**
```Javascript
 localStorage.setItem('theme','dark');
 ```
 13. **Comments:**
 ```Javascript
 //append all pet cards at once
 ```
 14. **Timer & Data Object**
 ```Javascript
  const expiryDate=new Date();
```
15. **Math string**
```Javascript
const hours=Math.floor(totalSeconds/3600);
```
16. **Event listner**
```Javascript
document.addEventListener('keydown', function(e){})
```
17. **Real time search history**
```Javascript
searchInput.addEventListener("input", (event)=>{})
```
18. **CRUD Functionality**
```Javascript
  searchHistory.push(term);
```   
### CSS Checklist
1. **Global Rest & Box Model**
```CSS
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
}
```
2. **Use of CSS Variables**
```CSS
 .pet-card:hover{
    cursor: pointer;
    transform: scale(1.03);
   
  }
```
3. **Comments**
```CSS
/* Button style */
```
4. **Typography Styling**
```CSS
 font-family:Arial, Helvetica, sans-serif;
```
5. **Color Scheme**
```CSS
background-color: var(--bg-color);
```
6. **Flexbox**
```CSS
 display: flex;
```
7. **Button styling**
```CSS
.btn{
    margin-top: 10px;
    background-color: var(--button-bg);
    border-radius: 30px;
    border: none;
    padding: 15px;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
}
.btn:hover{
    background-color:var(--button-hover);
    transition: background-color 0.2s;

```
8. **Componet reusability**
```CSS
.container{
    font-size: 1.4em;
    text-align: center;
    margin-top:5%;
}
```
9. **CSS Transition**
```CSS
 .pet-card:hover{
    cursor: pointer;
    transform: scale(1.03);
   
  }
```
10. **Hover/Focus Effect**
```CSS
.btn:hover{
    background-color:var(--button-hover);
    transition: background-color 0.2s;
}
```
11. **Layout Container**
```CSS
.container{
    font-size: 1.4em;
    text-align: center;
    margin-top:5%;
}

```
12. **Use of Pseudo classes/element**
```CSS
```
13. **Shadows & Borders**
```CSS
 .pet-card{
  background-color: var(--petcardbg);
  box-shadow:0 2px 4px rgba(0,0,0,0.4);
 }
```
14. **Theme customization**
```CSS
.light{
    --bg-color:#f5f5f5;
    --text-color:#333;
    --card-bg:#fff;
    --card-border:#ddd;
    --button-bg: rgb(233, 101, 0);
 --button-hover:rgb(172, 74, 0);
    --filterbtn-bg:#ffffff;
    --petcardbg:white;
}
```
15. **Naming Conventions**
```CSS
.pet-card{}
```











