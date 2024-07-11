// let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let myDate = new Date();
//   let current = myDate.getMonth();
  
//   let currentMonth = months[current];
//   let previous = [];
//   let previousIndex = 0;
//   let next = [];
//   let nextIndex = 0;
  
  
//   for (let i = 2; i > 0; i--) {
//     let prevMonthIndex = (current - i);
//     previous[previousIndex] = months[prevMonthIndex];
//     previousIndex++;
//   }
  
//   for (let i = 1; i <= 3; i++) {
//     let nextMonthIndex = (current + i);
//     next[nextIndex] = months[nextMonthIndex];
//     nextIndex++;
//   }
  
//   console.log(`${previous}, ${currentMonth}, ${next}`);
  

//   2. 
function calculateBirthday(day) {
    let birthDay = new Date(day);
    let today = new Date();
  
    let age = today.getFullYear() - birthDay.getFullYear();
    let months = today.getMonth() - birthDay.getMonth();
    let days = today.getDate() - birthDay.getDate();
  
    if (months < 0 && days < 0) {
      age--;
    }
    let nextBirthday = new Date(
      today.getFullYear(),
      birthDay.getMonth(),
      birthDay.getDate()
    );

    let remainingTime = nextBirthday - today;
    let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let remainingMonths = Math.floor(remainingDays / 30);
    remainingDays = remainingDays % 30;
    
    return {
      age,remainingMonths, remainingDays
    };
  }
  
  let day = ('1999-10-27');
  let birthDayOutput = calculateBirthday(day);
  console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days ultill next birthday.`);
  