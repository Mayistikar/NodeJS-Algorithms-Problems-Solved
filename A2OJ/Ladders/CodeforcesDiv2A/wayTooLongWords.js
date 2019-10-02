const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let abbreviateWords = word => word.length <= 10 ? word : `${word[0]}${word.length-2}${word[word.length-1]}`;

async function readAllLines(){
    return new Promise( function(done) {
        rl.on( 'line', (input) => { 
            if( Number.isNaN( parseInt(input) ) ) {
                console.log( abbreviateWords(input) );
            }                    
            done(input);          
        });
    });
}

async function main(){
    await readAllLines();             
    rl.close();
}

main();