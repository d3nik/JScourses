let date = new Date();
let hours;
let minutes;
let seconds;
let currentTime = document.getElementById('time');

let clock = function(){
    date.getHours() < 10 ? hours = "0" + date.getHours() : hours = date.getHours();
    date.getMinutes() < 10 ? minutes = "0" + date.getMinutes() : minutes = date.getMinutes();
    date.getSeconds() < 10 ? seconds = "0" + date.getSeconds() : seconds = date.getSeconds();
    currentTime.innerHTML = hours + ":" + minutes + ":" + seconds;
    
    return window.location.reload();
}

let time = setInterval(clock, 10);