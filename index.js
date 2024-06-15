
const start = document.getElementById("start")
const stopInt = document.getElementById("stop")
const reset = document.getElementById("reset")

const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")

let interval

start.addEventListener("click", () => {

  let hr = parseInt(hours.innerText)
  let min = parseInt(minutes.innerText)
  let sec = parseInt(seconds.innerHTML)
  console.log(sec)


  interval = setInterval(() => {
    sec++

    console.log(sec)
    if (sec > 59) {
      sec = 0
      min++
    }

    if (min > 59) {
      min = 0
      hr++
    }

    // this make it work
    seconds.innerText = sec < 10 ? "0" + sec : sec
    minutes.innerText = min < 10 ? "0" + min : min
    hours.innerText = hr < 10 ? "0" + hr : hr

  }, 1000);



  stopInt.addEventListener("click", () => {
    clearInterval(interval)
    // alert("hello")
  })

  reset.addEventListener("click", () => {
    clearInterval(interval)
    seconds.innerText = "00"
    minutes.innerText = "00"
    hours.innerText = "00"
    alert("Are you sure you want to reset")
  })

})
