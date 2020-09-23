
const colors = ["purple", "blue", "red", "green", "yellow", "white"]
const secret = [];
const userGuess = [];

generateCode = function() {
    const len =  colors.length;
           
    for (i = 0; i <= 3; i++) {
      secret.push(colors[Math.floor(Math.random() * len)]);
    }

    console.log(secret);
  }

howTo = function() {
    alert("Click on Start Game to play. Select a color from the bottom row and then click on the desired box to place it in. When all the row is filled, click Check Code.")
}  

document.getElementById('howto').addEventListener('click',function() {
    console.log("how-to");
    howTo();
})  

document.getElementById('start').addEventListener('click', function() {
    console.log('clicked');
    generateCode();
  })

let selectColor;

 const pegChoice = document.getElementById("color-container");
 pegChoice.addEventListener("click", (e) => {
    selectColor = e.target.id; 
    console.log(selectColor)
      
 })
     

 const pegContainer = document.getElementById("peg-container")
 pegContainer.addEventListener("click", (e) => {
     $(`#${e.target.id}`).css("background-color", selectColor)
     const idx = e.target.id.substr(2,3)
     console.log(idx)
     if (userGuess.length < 4){

        userGuess.push({
            color: selectColor,
            indexPosition: idx          
        })
    
    }else if (userGuess[idx].color !== selectColor) {
        console.log("userGuess", userGuess[idx]) 
        userGuess[idx].color = selectColor
     }
     console.log(userGuess)
     
 })
 
let matches = [] 

const checkCode = function() {
//returns the response of userGuess
//get secret array
//get the user's guess (create var userGuess[])
//check secret[0] against userGuess[0] - if statement with a return of pin1
//then an else if with a for loop that checks secret[i] === userGuess[0]
//else return pin3 (and empty pin)

//nest this in a loop that runs through userGuess
let text = ""
    for (let i = 0; i < secret.length; i++){
     if (userGuess[0].color === secret[0]){
        console.log("match at index 0")
        text = "Match in 1st box"
        matches.push(text)
     }else if(userGuess[0].color === secret[i]){
        console.log("correct color at index 0")
        text = "Correct color in 1st box"
        matches.push(text)
     } else {console.log("no match")}
    }

    for (let i = 0; i < secret.length; i++){
        if (userGuess[1].color === secret[1]){
            console.log("match at index 1")
            text = "Match in 2nd box"
            matches.push(text)
        }else if(userGuess[1].color === secret[i]){
            console.log("correct color at index 1")
            text = "Correct color in 2nd box"
            matches.push(text)
        } else {console.log("no match")}
       }

    
       for (let i = 0; i < secret.length; i++){
        if (userGuess[2].color === secret[2]){
            console.log("match at index 2")
            text = "Match in 3rd box"
            matches.push(text)
        }else if(userGuess[2].color === secret[i]){
            console.log("correct color at index 2")
            text = "Correct color in 3rd box"
            matches.push(text)
        } else {console.log("no match")}
       }

       for (let i = 0; i < secret.length; i++){
        if (userGuess[3].color === secret[3]){
            console.log("match at index 3")
            text = "Match in 4th box" 
            matches.push(text)
        }else if(userGuess[3].color === secret[i]){
            console.log("correct color at index 3")
            text = "Correct color in 4th box"
            matches.push(text)
        } else {console.log("no match")}
       }
       document.getElementById("text-response").innerHTML = matches
    //    matches.forEach(match => {
    //        $("#text-response").append(`<h6>${match}</h6>`)
    //    })
    for (let i = 0; i < 4; i++) {
        $(`#pg${i}`).css("background-color", "")
    }
    matches = []
}



const checkWinner = function(){
    //compare userGuess against secret
    //if they are equal declare winner
    //else generate a new line (and ideally make the old line unclickable)
    
    for (let i = 0; i < secret.length; i++){
        if (userGuess[0].color === secret[0] 
            && userGuess[1].color === secret[1] 
            && userGuess[2].color === secret[2] 
            && userGuess[3].color === secret[3])
        
            console.log("You are a winner!")
        
    }document.getElementById("text-response").innerHTML = "You have won! You are a Mastermind!"
    }
    


document.getElementById('check').addEventListener('click', function() {
    console.log('checked');
    checkCode();
    checkWinner();
  })





