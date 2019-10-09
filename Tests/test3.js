let newString = '';

let transformString = ( character ) => { 
    if( !character.match(/[aeiouy]/gi) ){
        newString += `.${character}`;
    }
};
process.stdin.once('data', (input) => {
    Array.from( input.toString().trim().toLowerCase() ).map( ( char ) => transformString( char ) );    
    console.log(newString);
    process.exit();
});
