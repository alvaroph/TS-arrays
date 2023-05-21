export function arrayLength(input){
let i =0;
    while ( input[i]!=undefined){
        i=i+1
    }
    return i;
}
//VERSION 1--> esto funciona con COMMONJS require --> module.exports=array_length;


export function arrayPush(array,element){
    array[arrayLength(array)]=element;
    return array;
}

export function arrayPop(array){
    let arra2 = new Array();
    for (let index = 0; index < arrayLength(array)-1; index++) {
        arrayPush(arra2,array[index])
    }
    return arra2;
}