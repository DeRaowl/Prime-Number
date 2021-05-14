      var readLineSync = require('readline-sync');
      const chalk = require('chalk');

      var dataSet = [31,29,31,30,31,30,31,31,30,31,30,31];

      console.log("Let's check if your date of birth comes under Leap Year\n")
      var userName= readLineSync.question(chalk.inverse("\nEnter your name: "));

      console.log(`\nHey ${userName} are you excited to check?`)

      function getPrime(){
      var dateOfBirth = readLineSync.question(chalk.blueBright("Enter your date of birth in DD/MM format: "));
      var isPrime = dateOfBirth.split('/');
      var day = isPrime[0];
      var month = isPrime[1];

      result(day,month);
      }

      var year = getPrime();

      function result(primeDay,primeMonth){
      if(isNaN(primeDay) || isNaN(primeMonth)){
        console.log(chalk.redBright("\nEnter valid DOB\n"));
        getPrime();
      }
      else if( primeDay>31 || primeDay<1 || primeMonth<1 || primeMonth > 12){
        console.log(chalk.redBright("\nEnter Valid DOB\n"));
        getPrime();
      }
      else if(primeDay>dataSet[primeMonth-1]){
        console.log(chalk.redBright("\nEnter Valid Day\n"));
        getPrime();
      }
      else if(primeDay%2!=0 || primeMonth%2!=0){
        console.log(chalk.green('\nHurry!! Your DOB is a prime number :)'));
      }
      else{
        console.log(chalk.bgRedBright('\nOops!! Its not a prime number'));
      }
      }