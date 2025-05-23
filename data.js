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









