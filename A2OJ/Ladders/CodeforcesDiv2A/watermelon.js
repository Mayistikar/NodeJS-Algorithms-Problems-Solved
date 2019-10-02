const readline = require('readline');

async function getLine(){
    return new Promise( function(done){

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on('line', (input) => {
            rl.close();
            done(input);
        });
    })
}

async function run(){
    let number = await getLine();
    let response = parseInt(number) < 4 ? 'NO' : parseInt(number) % 2 == 0 ? 'YES' : 'NO';
    console.log(response);
}

run();