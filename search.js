// //in eventlistner put input

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


// //apply filters
// function applyFilters(){
//     const type=document.getElementById('typeFilter');
//     const ageRange=document.getElementById('ageFilter');
//     const gender=document.getElementById('genderFilter');

//     const filtered=pets.filter(pet=>{
//         const age=pet.age;

//         const typeMatch=type==="pet"|| pet.pet===type;
//         const genderMatch= gender==='gender'|| pet.gender===gender;

//         let ageMatch=false;
//         if(ageRange==='age'){
//             ageMatch=true
//         }else if(ageRange==='1-3yrs old'){
//             ageMatch= age>=1 && age<=3;
//         }else if(ageRange==='4-6yrs old'){
//             ageMatch= age>=4 && age<=6;
//         }else if(ageRange==='6+yrs old'){
//             ageMatch=age>=6;
//         }
//         return typeMatch && genderMatch && ageMatch;
//     });
//     applyFilters(filtered);
// }





