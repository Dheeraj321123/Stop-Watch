var minHeading = document.getElementById("minHeading")
var minHeadingBtn = document.getElementById("minHeadingBtn")
var secHeading = document.getElementById("secHeading")
var secHeadingBtn = document.getElementById("secHeadingBtn")
var mSecHeading = document.getElementById("mSecHeading")


var min = 0
var sec = 0
var msec = 0
var interval;

function startTimer() {
    minHeadingBtn.disabled = true;
    interval = setInterval(timer, 10)
    



}
function timer() {
    msec++
    mSecHeading.innerHTML = msec
    if (msec == 100) {
        msec = 0
        sec++
        secHeading.innerHTML = sec
        if (sec == 60) {
            sec = 0
            min++
            minHeading.innerHTML = min
        }
    }
}

function stopTImer(){
    minHeadingBtn.disabled = false;


    clearInterval(interval)
}

function resetTimer(){
    clearInterval(interval)
    min= 0
    sec=0
    msec=0

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"

}