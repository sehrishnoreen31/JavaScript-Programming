let follower_count = 0;

function increaseCount(){
    follower_count++;
    displayCount();
    checkCount();
}

function displayCount(){
    document.getElementById('followers').innerText = `${follower_count}`;
}

function checkCount(){
    if (follower_count === 10){
        alert('You gained 10 followers!');
    } else if (follower_count === 15){
        alert('You gained 15 followers!');
    }
}


function resetCount(){
    follower_count = 0;
    document.getElementById('followers').innerText = `${follower_count}`;
}