/*   Challenge 1: Student Grade Generator.  
 Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:    A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40.   */      
 //Challenge 1:   //Function that takes in an input between 0-100 and returns the output of the correct grade
 // const grade= number; 
//else the output is an error.   
      function gradeGenerator(number){ 
    if(number>79){   
            return 'A';   
        }else if(number>=60,number<79){ 
            return 'B';   
     }else if(number>=49,number<60){ 
            return 'C';  
        }else if(number>=40,number<49){    
            return 'D';   
    }else if(number>=0,number<40){   
            return 'E';  
     }else{    
        return 'Please input a number'  
 }   }   gradeGenerator(); 
  //end of program      
  
  /*Challenge 2: Speed Detector.   
  Write a program that takes as input the speed of a car e.g 80.    
  If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.  
   For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.   */ 
     //const speed=num;   
     const speedDetector=function(num){ 
           if (num<=70){ 
         return "Ok.";  
        }else if(num>70){  
         diff= num-70;   
        point= diff/5;  
        return Math.ceil(point);  
 }   } 
 const licenseCheck=function(fn){  
      if(point>=12){   
        return 'License suspended.'  
        }else{
            return fn;
        } 
 } 
licenseCheck(speedDetector()); 

//end of program    

//Challenge 3:Net Salary Calculator.  
/*Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
 Calculate the payee (i.e. Tax), 
NHIFDeductions,  
NSSFDeductions,  
gross salary, and net salary. */ 
const basicPay=prompt('Enter basic salary: ');  
const benefits=prompt('Enter your benefits amount: ');  
const totalPay= basicPay+benefits;   
const NHIFDeductions=prompt('Enter NHIF deductions: '); 
const NSSFDeductions=prompt('Enter NSSF deductions: '); 
const deductions= NHIFDeductions+NSSFDeductions;   
 //calculating Payee 
const payeeCalculator=function(totalPay){ 
    //logic   
    if(totalPay<=24000){  
          return (totalPay*0.10)
        }else if(totalPay>24000,totalPay<=32,333){   
             return(totalPay*0.25) 
        }else if(totalPay>32333){   
            return(totalPay*0.30)  
    }   
}   
payeeCalculator();             
const netSalary=function(totalPay,NHIFDeductions,NSSFDeductions){ 
    let salary=totalPay-(`${NHIFDeductions}` + `${NSSFDeductions}`); 
        console.log(salary)
} 
const grossSalary=function(basicPay,benefits){  
        totalPay=basicPay+benefits  
            return totalPay 
}  
 grossSalary();