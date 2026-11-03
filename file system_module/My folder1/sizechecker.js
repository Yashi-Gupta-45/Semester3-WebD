function sizeChecker(filename){
    const stats= fs.statSync(filename);
    const limit=2*1024*1024 //2mb

    //check the file size
    if(stats.size>limit){
        console.log("File should be less than 2mb");
    }
    else 
        console.log("file has been submitted successfully");
}

//IIFE
(()=>{
    console.log("hello");
})();

//high order function
//create list of numbers
const numbers=[1,2,3,4,5,6,7,8,9,10]
numbers.map((num, index) => {
    console.log(`number ${index+1}: ${num*2}`);
});