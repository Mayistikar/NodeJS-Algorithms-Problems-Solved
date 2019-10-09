const transformString = (newString, char) => newString += `.${char}`;

process.stdin.once('data', (input) => {
    let withOutVowels = input.toString().trim().toLowerCase().replace(/[aeiouy]/gi, '');
    let newString = Array.from( withOutVowels ).reduce( transformString, '' );    
    console.log(newString);
    process.exit();
});
