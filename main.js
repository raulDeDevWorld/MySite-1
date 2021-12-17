let app = document.getElementById('presentation')
let appTwo = document.getElementById('presentationTwo')
let appThree = document.getElementById('presentationThree')
let string = 'RAÚL CHOQUE ROMERO'
let stringTwo = 'Desarrollador Web'
let stringThree = 'Profesor de computación e ingles '
let timeout = 100

function maquina(text, container, timeout){
  let i = 0;
  let interval = setInterval(()=>{
            i < text.length
            ? container.textContent += text.charAt(i)
            :clearInterval(interval);
            i++
          }, timeout)
}
maquina(string, app, timeout)
maquina(stringTwo, appTwo, timeout)
maquina(stringThree, appThree, timeout)



let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let pp1 = document.getElementById('pp1')
let pp2 = document.getElementById('pp2')
let pp3 = document.getElementById('pp3')
let pp4 = document.getElementById('pp4')

p1.addEventListener('click', ()=>{
  window.location.assign("https://docs.google.com/spreadsheets/d/1yAtF4wvUJxuEGmVuT5-gg2S-IsDWdfnEVU07eXkWaRw/edit?usp=drivesdk")
})
p2.addEventListener('click', ()=>{
  window.location.assign("https://docs.google.com/spreadsheets/d/1AK3PM-Q62wCIH6QeqhMUt6vd2LUzL4Db9NbB4403yL8/edit?usp=drivesdk")
})
p3.addEventListener('click', ()=>{
  window.location.assign("https://docs.google.com/spreadsheets/d/1Llz3LtcW7OAuNZ7r8zk30CcFi9Z1aPdK2dR2p-ygmzg/edit?usp=drivesdk")
})
p4.addEventListener('click', ()=>{
  window.location.assign("https://docs.google.com/spreadsheets/d/13NzbgrbCP4y2a9mmZNJoK7lfcEmfhfleeHj4JdKqSPQ/edit?usp=drivesdk")
})
pp1.addEventListener('click', ()=>{
  window.location.assign("https://swoou.com/")
})
pp2.addEventListener('click', ()=>{
  window.location.assign("https://swoou.com/")
})
pp3.addEventListener('click', ()=>{
  window.location.assign("https://cargo.swoou.com/")
})
pp4.addEventListener('click', ()=>{
  window.location.assign("https://cargo.swoou.com/")
})









