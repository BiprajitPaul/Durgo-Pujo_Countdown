

const dest = new Date("oct 09, 2024 10:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = dest - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days);

    let hours = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60));
    console.log(hours);

    let Min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(Min);
    let Sec = Math.floor((diff % (1000 * 60)) / (1000));
    console.log(Sec);

    document.querySelector('#days').innerHTML = days;
    document.querySelector('#Hrs').innerHTML = hours;
    document.querySelector('#Min').innerHTML = Min;
    document.querySelector('#sec').innerHTML = Sec;
},1000);





// 1day = 24 hrs
// 1hr = 60min;
// 1min = 60sec;
