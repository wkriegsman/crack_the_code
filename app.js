//sanity check
function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Bill");

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
 
 

const checkCode = function() {//returns the response of userGuess
//get secret array
//get the user's guess (create var userGuess[])
//check secret[0] against userGuess[0] - if statement with a return of pin1
//then an else if with a for loop that checks secret[i] === userGuess[0]
//else return pin3 (and empty pin)

//next this in a loop that runs through userGuess


  for (i = 0; i < secret.length; i++){
      if (pg0 === secret[0]){
          return pin1
      }else{(pg1 === secret[i]);{
          return pin2
      }
          
      }
  }

  for (i = 0; i < colors.length; i++){
    if (pg1 === secret[1]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}

for (i = 0; i < colors.length; i++){
    if (pg2 === secret[2]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}

for (i = 0; i < colors.length; i++){
    if (pg3 === secret[3]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}
}

document.getElementById('check').addEventListener('click', function() {
    console.log('checked');
    checkCode();
  })



const checkWinner = function(){
//compare userGuess against secret
//if they are equal declare winner
//else generate a new line (and ideally make the old line unclickable)
//
}









