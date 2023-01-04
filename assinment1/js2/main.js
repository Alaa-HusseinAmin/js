const numbers = [2, 5, 9, 1, 6, 7, 4, 8];
function smallest(){
    let result = numbers[0];
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] < result) {
            result = numbers[i];
        }
    }
    
    console.log("Smallest number is: " + result);
}
smallest();