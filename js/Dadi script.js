// creazione array con elenco delle facce del dado

const numbersDice = [1, 2, 3, 4, 5, 6];

console.log(numbersDice);


let userNumber = Math.floor(Math.random()*6) + 1;

let pcNumber = Math.floor(Math.random()*6) + 1;

console.log(userNumber);

console.log(pcNumber);

if (userNumber > pcNumber) {

    console.log("User win");

}

else if (userNumber < pcNumber) {

    console.log("PC win");
    
}

else {

    console.log("Draw");
    
}


