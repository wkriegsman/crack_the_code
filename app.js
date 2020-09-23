
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
 
 

const checkCode = function() {
//returns the response of userGuess
//get secret array
//get the user's guess (create var userGuess[])
//check secret[0] against userGuess[0] - if statement with a return of pin1
//then an else if with a for loop that checks secret[i] === userGuess[0]
//else return pin3 (and empty pin)

//nest this in a loop that runs through userGuess

    
     
//   for (let i = 0; i < secret.length; i++){
//       if (userGuess[i].color === secret[i]){
//         //   return pin1
//         console.log("match in sequence")
//       }else if(userGuess[i].color === secret[i]){
//         //   return pin2
//         console.log("color match")
//       }
        
//       }
    for (i = 0; i < secret.length; i++){
     if (userGuess[0].color === secret[0]){
        // return pin1
        console.log("match at index 0")
     }else if(userGuess[0].color === secret[i]){
        // return pin2
        console.log("correct color at index 0")
     } else {console.log("no match")}
    }

    for (i = 0; i < secret.length; i++){
        if (userGuess[1].color === secret[1]){
           // return pin1
           console.log("match at index 1")
        }else if(userGuess[1].color === secret[i]){
           // return pin2
           console.log("correct color at index 1")
        } else {console.log("no match")}
       }

    
       for (i = 0; i < secret.length; i++){
        if (userGuess[2].color === secret[2]){
           // return pin1
           console.log("match at index 2")
        }else if(userGuess[2].color === secret[i]){
           // return pin2
           console.log("correct color at index 2")
        } else {console.log("no match")}
       }

       for (i = 0; i < secret.length; i++){
        if (userGuess[3].color === secret[3]){
           // return pin1
           console.log("match at index 3")
        }else if(userGuess[3].color === secret[i]){
           // return pin2
           console.log("correct color at index 3")
        } else {console.log("no match")}
       }
}

const checkWinner = function(){
    //compare userGuess against secret
    //if they are equal declare winner
    //else generate a new line (and ideally make the old line unclickable)
    
    for (i = 0; i < secret.length; i++){
        if (userGuess[0].color === secret[0] 
            && userGuess[1].color === secret[1] 
            && userGuess[2].color === secret[2] 
            && userGuess[3].color === secret[3])
        
            console.log("You are a winner!")
        
    }
    }
    


document.getElementById('check').addEventListener('click', function() {
    console.log('checked');
    checkCode();
    checkWinner();
  })





