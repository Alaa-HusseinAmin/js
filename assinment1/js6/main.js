function main(){
    console.log("A");
    setTimeout(function print(){
        console.log("B");
    },0);
    console.log("C");
};
main();

// Outut A,C,B 
// beacause js is single page and can't wait for another loading to implement the code
