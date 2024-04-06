function randomNum(n){
    let arr=new Array(n);
    for(let i=0;i<arr.length;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    return arr.reduce((sum, val)=> sum+val, 0)
}

export {randomNum, sum}