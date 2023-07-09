// let arr = [1,2,3,4,5,6,7,8,9,12,2,3123,12,1];
// for(let i = 0 ; i < arr.length;i++){
//     console.log(arr[i]);
// }
// for(let i in arr){
//     console.log(i);
// }
// for(let key of arr){
//     console.log(key);
// }
let obj = {
    name: "Nguyen Manh Quan",
    age: 15,
    gender: "male",
    cccd: 0984980980,
    Hobbise: ["Ngủ", "Coding", "movie"],    
    say: function () {
        alert('Hello How Are You?')
    }
}
console.log(obj.name);
obj.say();

obj.job = "dev"
obj.name = "quan"

delete obj.job;

obj.code = function(){
    alert("i am coder")
}

obj.code();
