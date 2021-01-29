setInterval(printTime(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000); //one second is 1000ms
