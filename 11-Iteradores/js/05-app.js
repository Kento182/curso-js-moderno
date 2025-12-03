let i = 0;

do {
    i++;
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ!`);
    }else if(i % 3 === 0){
        console.log(`${i} fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }
} while(i < 100);