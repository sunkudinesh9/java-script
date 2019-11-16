// var result = 10

// if(result >= 35 && result <=100){ 
//     var result2 = 100
//     console.log('You are passed...!' + result)
// }else if (result < 35 || result == 0) {
//     console.log('Your failed....!')
// } else {
//     console.info('input Error...!')
// }

//console.log(result2)

// if(true){
//     var result = 10
//     console.info(result)
// }

// console.info(result)

// var frnds = ['Sai', 'Shashank', 'Nikhil', 'Anil', 'Chandu', 'Ravi'];

// for(var i=0; i<=frnds.length-1 ; i++){
//     console.log(frnds[i]);
// }

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let message = function(){
//     console.log("H Dinesh...!")
// }
// days.forEach(message); 

// days.forEach(function(day, index){
//     console.log(index+1 + "." + day);
// });


// for(let i=days.length-1;i>=0;i--){
//     console.log(days[i]);
// };



let gread = function(marks){
    if(marks <=90 & marks>=100){
        console.log('A');
    }else if(marks <=80 & marks>=90){
        console.log('B');
    }else if(marks <=70 & marks>=80){
        console.log('C');
    }else if(marks <=60 & marks>=70){
        console.log('D');
    }else if(marks <=50 & marks>=60){
        console.log('E');
    }else{
        console.log('Fail')
    }
};

gread(10);