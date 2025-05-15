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





