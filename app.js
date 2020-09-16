//sanity check
function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Bill");

const colors = ["purple", "blue", "red", "green", "yellow", "white"]

generateCode = function() {
    const len =  colors.length;
        const secret = [];   

    for (i = 0; i <= 3; i++) {
      secret.push(colors[Math.floor(Math.random() * len)]);
    }

    console.log(secret);
  }
  

  const checkCode = function() {

  for (i = 0; i < colors.length; i++){
      if (pg1 === secret[0]){
          return pin1
      }else{(pg1 === secret[i]);{
          return pin2
      }
          
      }
  }

  for (i = 0; i < colors.length; i++){
    if (pg2 === secret[1]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}

for (i = 0; i < colors.length; i++){
    if (pg3 === secret[2]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}

for (i = 0; i < colors.length; i++){
    if (pg4 === secret[3]){
        return pin1
    }else{(pg1 === secret[i]);{
        return pin2
    }
        
    }
}
}

const checkWinner = function(){

}









