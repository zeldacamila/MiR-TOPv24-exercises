var casual = require('casual');

let i = 0;
let nameList = "";
while (i <= 999) {
    nameList = nameList + "\n" + casual.name
    i++
}

let fs = require('fs');
fs.writeFile('name.txt', nameList, (error) => {
    if(error){
        console.log('Ha ocurrido un error:', error);
    } else {
        console.log('El proceso ha terminado satisfactoriamente');
    }
})

