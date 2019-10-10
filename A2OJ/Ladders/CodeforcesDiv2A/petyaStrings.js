const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on( 'line', ( line )=>{
    rl.on( 'line', ( input )=>{ 
        const totalValueString = ( acum, curr ) => acum + parseInt( curr.charCodeAt(0) );
        let stringDiff = Array.from(line).reduce( totalValueString, 0 ) - Array.from(input).reduce( totalValueString, 0 );
        console.log(  stringDiff < 0 ? 1 : stringDiff > 0 ? -1 : 0 );
        rl.close();
    });
});