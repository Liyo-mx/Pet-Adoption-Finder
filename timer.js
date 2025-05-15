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
