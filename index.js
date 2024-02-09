const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let pass1;
let pass2;

function generatePassword(){
    
    pass1 = characters[Math.floor(Math.random() * characters.length)];
    pass2 = characters[Math.floor(Math.random() * characters.length)];
    
    for(let l = 0; l < 14; l++){
        pass1 = pass1 + characters[Math.floor(Math.random() * characters.length)];
        pass2 = pass2 + characters[Math.floor(Math.random() * characters.length)];
    }
    password1.innerText = pass1;
    password2.innerText = pass2;
}
