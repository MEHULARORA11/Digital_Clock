let main = document.querySelector('.main')
let clock = document.querySelector('#clock')
 
setInterval(function(){
  let date = new Date()
  clock.innerHTML = `<span>${date.toLocaleTimeString('en-IN')}</span>`
},1000)

