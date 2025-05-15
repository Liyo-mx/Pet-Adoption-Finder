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


