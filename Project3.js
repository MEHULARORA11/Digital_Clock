let main = document.querySelector('.main')
let clock = document.querySelector('#clock')
 
setInterval(function(){
  let date = new Date()
  clock.innerHTML = `<span>${date.toLocaleTimeString('en-IN')}</span>`
},1000)


//  const clock=document.getElementById('clock') // NOTE GETELEMENT ID GIVES VALUES DIRECTLY BUT GET ELEMENT CLASSNames give a HTML Collection
//  console.log(clock);
 
 
//  setInterval(()=>{ // POINT TO BE NOTED MILLI SECONDS // ALSO NOTE THE SYNTAX
// let myDate=new Date()
//  clock.innerHTML = `<span>${myDate.toLocaleTimeString('en-IN')}</span>`
//  },1000) 