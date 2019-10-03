const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){    
    rl.on('line', function(input){
        //TODO operar sobre el input
    });
}

main();

//IMPORTANTE: No se cierra el readline pero en un caso real debe cerrarse con rl.close();