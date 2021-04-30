function comparisonOfNumbers(){
 const num1 = +prompt('Enter a number:');
 const num2 = +prompt('Enter another number');

 if(num1 < num2){
     alert('-1');
 } else if(num1 > num2){
     alert('1');
 } else {
     alert('0');
 }
}

function fact(){
    const num = +prompt('Enter a number:');
    let rval = 1;
    for (let i = 2; i <= num; i++)
        rval = rval * i;
        alert(`${rval}`)
}

function oneNumber(){
    const numOne = prompt('Enter first number: ');
    const numTwo = prompt('Enter second number: ');
    const numThree = prompt('Enter third number: ');

    alert(`${numOne}${numTwo}${numThree}`);

}

/*function rectangle(){
    const a=prompt("Enter a: ");
    const b=prompt("Enter b: ");
    if(a!=''&&b!='')
        alert(a*b);
    else if(a!=''&&b=='')
        alert(a*a);
    else if(a==''&&b!='')
        alert(b*b); 
   
    }*/

    function rectangle() {
    const a = +prompt("Enter a: ");
    const b = +prompt("Enter b: ");
        if(b == 0) { 
         alert(a**2); 
        }
         alert(a*b);
     }

function  perfectNumber(){
const number = +prompt('Enter a number:');
let temp = 0;
   for(let i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       alert("It is a perfect number.");
        } 
     else
        {
       alert("It is not a perfect number.");
        }   
 } 

 function getPerfect() {
    const min = +prompt('Enter first number:');
    const max = +prompt('Enter second number:');
    let result = [];
    for (let i = min; i < max; i++) {
      let sum = 0;
      
      for (let n = 1; n <= i/2; n++) {
        if (i % n === 0) sum += n;
      }
      if (i === sum) result.push(i);
    }
    alert(`Perfect numbers are: ${result}`);
  }

  function getTime(){
      let hours = +prompt('Enter hours:');
      let minutes = +prompt('Enter minutes:');
      let seconds = +prompt('Enter seconds:');
      if(  !isNaN(minutes) && !isNaN(minutes) && !isNaN(seconds)){
          if(hours <= 9 ){
            hours = `0${hours}`;3
          } if(minutes <= 9){
            minutes = `0${minutes}`;
          } if(seconds <= 9){
              seconds = `0${seconds}`;
          }
          result = `${hours}:${minutes}:${seconds}`;
          alert(result);
      }

  }

  function getTimeInSeconds(){
    let hours = +prompt('Enter hours:');
    let minutes = +prompt('Enter minutes:');
    let seconds = +prompt('Enter seconds:');
    let time = new Date();
    
       let result = `${hours}:${minutes}:${seconds}`;
        time.setHours(hours, minutes, seconds);
        result = (hours*3600)+(minutes*60)+seconds;
        alert(result);
    
  }


  function getTimeInHours(){
    let secs = +prompt('Enter seconds:');
  

    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours + " hours",
      "m": minutes + " minutes",
      "s": seconds + " seconds"
  };
  alert(JSON.stringify(obj, null, 4));
  
}

    
function getDateDifference(){
  
    let hours1 = +prompt('Enter hours for the first date:');
    let minutes1 = +prompt('Enter minutes for the first date:');
    let seconds1 = +prompt('Enter seconds for the first date:');
    let time1 = new Date();

    let hours2 = +prompt('Enter hours for the second date:');
    let minutes2 = +prompt('Enter minutes for the second date:');
    let seconds2 = +prompt('Enter seconds for the second date:');
    let time2 = new Date();
    let result;
    


    
       let result1 = `${hours1}:${minutes1}:${seconds1}`;
        time1.setHours(hours1, minutes1, seconds1);
        result1 = (hours1*3600)+(minutes1*60)+seconds1;
        

       let result2 = `${hours2}:${minutes2}:${seconds2}`;
        time2.setHours(hours2, minutes1, seconds1);
        result2 = (hours2*3600)+(minutes2*60)+seconds2;
        
        if(result1 > result2){
          result = result1-result2;
        } else{
          result = result2-result1;
        }
        let finalResult = result;

          let hours = Math.floor(finalResult / (60 * 60));

          let divisor_for_minutes = finalResult % (60 * 60);
          let minutes = Math.floor(divisor_for_minutes / 60);

          let divisor_for_seconds = divisor_for_minutes % 60;
          let seconds = Math.ceil(divisor_for_seconds);
          let obj = {
            "h": hours + " hours",
            "m": minutes + " minutes",
            "s": seconds + " seconds"
        };
    alert(`time difference is ${JSON.stringify(obj, null, 4)}`);
}  
   

