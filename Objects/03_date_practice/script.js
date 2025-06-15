start = new Date();
document.getElementById('show-time').addEventListener('click', ()=>{
    const end = new Date();
    const timeSpentSeconds = Math.floor((end - start)/1000); //seconds

    const hoursSpent = Math.floor(timeSpentSeconds/3600);
    const minutesSpent = Math.floor(timeSpentSeconds/60);
    const secondsSpent = timeSpentSeconds % 60;

    const timeSpentOnPage = document.getElementById('time-spent');
    timeSpentOnPage.textContent = `You have spent ${hoursSpent}:${minutesSpent}:${secondsSpent} on this page!`;
        });
