const btnCal = document.getElementById("cal")

btnCal.addEventListener('click',() => {
    let min = document.getElementById('min')
    secs = parseInt(min.value*60)
    document.getElementById("seconds").innerHTML = secs + 'seconds'
});