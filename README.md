# 🏏 IPL Random Winner Selector

A fun JavaScript project that picks a **random IPL team** as the winner every time you click a button. It uses basic DOM manipulation and random number generation to display the result on the screen.

## 🚀 How It Works

- List of all IPL teams is stored in an array.
- On clicking the button, a team is randomly selected.
- The selected team name is displayed inside the `<h1>` tag.
- The result is also printed in the browser console.

## 🧠 Code Explanation

```js
let arr = ['CSK', 'RCB', 'MI', 'DC', 'RR', 'KKR', 'SRH', 'LSG', 'PBKS', 'GT']

#This is the array that holds all IPL team names

let btn = document.querySelector('button')
var h1 = document.querySelector('h1')

#We select the button and <h1> element from the DOM
btn.addEventListener('click', function() {
    let num = Math.floor(Math.random() * arr.length)
    let winner = arr[num]
    console.log(winner)
    h1.innerHTML = winner
})
```
- A random number is generated from 0 to 9 (array length).
- That number is used to select a team from the array.
- The team name is then shown in the ```<h1>```  tag.
