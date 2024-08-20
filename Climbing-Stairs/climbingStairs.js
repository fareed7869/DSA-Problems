function climbingStairCase(n){

    let numOfWays=[1,2];

    for(let i=2;i<=n;i++){
        console.log("check",numOfWays)
        numOfWays[i]=numOfWays[i-1]+numOfWays[i-2]
    }

    return numOfWays[n-1];
}

console.log(climbingStairCase(5)) // result 8