
// BINARY TO DEMICAL
// function binaryToDemical (num){
//    num = num.toString()
//    let sum = 0
//    for (let i = 0, j = num.length; i < j, j > 0; i++, j--) {
            
//              sum += num[i] * 2 ** j
//    	}
//    	 console.log(sum / 2);
// }
// binaryToDemical(10111001)


// DEMICAL TO BINARY
function demicalToBinary (num) {
    console.log(num);
   let a
   let A = []
   if (num > 1){
   do {
    a  = (num - (num % 2)) / 2
           A.push(num % 2)
   	num =Math.floor(num / 2) 
   }
   while ( a > 1);
   A.push(1)
   console.log('Result -> ',A.reverse().join(''));
   }
   else if(num == 1) console.log(1);
 }
 demicalToBinary(14)