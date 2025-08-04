// [no,district,+ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Idukki", 14000, 3000, 25000, 30000, 1000],
  [3, "Thrissur", 24000, 4000, 33000, 24000, 2500],
  [4, "Pathanamthitta", 20000, 2000, 45000, 22000, 1500],
  [5, "Kozhikode", 44000, 5000, 12000, 21000, 500],
  [6, "Palakkad", 27000, 1000, 20000, 23000, 3400],
  [7, "Kottayam", 27000, 1500, 27000, 14000, 1000],
  [8, "Kollam", 14000, 2500, 25000, 18000, 2700],
];

//1. District having Highest +ve case:
console.log("\n---------Highest Positive cases:----------");
console.log(covid_data.reduce((a, b) => (a[2] > b[2] ? a : b)));

//2. District having highest 1st dose vaccine :
console.log("---------Highest 1st dose vaccine:--------");
console.log(covid_data.reduce((a, b) => (a[5] > b[5] ? a : b)));

//3. District having lowest death rate :
console.log("---------District having lowest death rate:-------- ");
console.log(covid_data.reduce((a, b) => (a[3] < b[3] ? a : b)));

//4.  sort data with +ve case in descending order :
console.log("---------sort data with +ve case in descending order :--------");
covid_data.sort((a, b) => b[2] - a[2]).forEach((emp) => console.log(emp));

//5.  Is districts with +ve cases > 15000 ?
console.log("---------is districts with +ve cases > 15000 ?--------");
console.log(covid_data.some((district) => district[2] > 15000) ? "Yes" : "NO");
console.log(
  `is all districts with +ve cases > 15000: ${
    covid_data.every((district) => district[2] > 15000) ? "Yes" : "NO"
  }`
);

//6.  sort data with 1st dose vaccine :
console.log("---------sort data with 1st dose vaccine--------");
covid_data.sort((a, b) => a[5] - b[5]).forEach((vac) => console.log(vac));

//7.  Print thrissur details:
console.log("---------thrissur details--------");
console.log(covid_data.find((item) => item[1] == "Thrissur"));

//8.  Print total number of positive cases:
console.log("---------total number of positive cases:--------");
console.log(covid_data.reduce((sum, pos) => sum + pos[2], 0));

//9. Print total number of curred cases :
console.log("---------total number of curred cases:--------");
console.log(covid_data.reduce((sum, pos) => sum + pos[4], 0));

//10. print curred cases in idukki:
console.log("---------curred cases in idukki:--------");
console.log((covid_data.find((item) => item[1] == "Idukki")[4]));
