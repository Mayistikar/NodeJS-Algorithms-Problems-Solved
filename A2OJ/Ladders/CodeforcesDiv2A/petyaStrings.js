const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on( 'line', ( line )=>{
    rl.on( 'line', ( input )=>{        
        let flag = false;
        for(let i = 0; i < line.length; i+=1){
            if( input.toLowerCase().charCodeAt(i) > line.toLowerCase().charCodeAt(i) ){
                console.log(-1);
                rl.close();                
                flag = true;
                break;
            }else if( input.toLowerCase().charCodeAt(i) < line.toLowerCase().charCodeAt(i) ){
                console.log(1);
                rl.close();
                flag = true;
                break;
            }
        }        
        //console.log(`Line: ${line} Input: ${input}`);
        flag || console.log(0);
        rl.close();
    });
});