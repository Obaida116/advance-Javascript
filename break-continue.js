const numbs = [3,4,5,-6,15,-8,16,-9,18,19,21,23];
for(let i = 0; i < numbs.length; i++){
    console.log(numbs[i]);
    if(numbs[i]>5){
        break;
    }
    
}
for(let i = 0; i < numbs.length; i++){
    
    if(numbs[i]<0){
        continue;
    }
    console.log(numbs[i]);
}