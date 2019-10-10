let nombre1 = 'dcdf';
let nombre2 = 'hcdf';

Array.from( nombre1.toLowerCase()).forEach( (curr, indx, arr) => {
    let difference = curr > nombre2.toLowerCase()[indx] ? 1 : curr < nombre2.toLowerCase()[indx] ? -1 : 0;
    if( indx === arr.length - 1 && difference === 0 ){
        console.log(0);
    }else if( difference !== 0 ){
        console.log(difference);
        break;
    }
});
