let arr= ['CSK','RCB', 'MI','DC','RR','KKR','SRH','LSG','PBKS','GT']


let btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length)
    let winner = arr[num];
    console.log(winner)
    h1.innerHTML = winner
})
