'use strict';



function Employee(employeeID, fullName, department, level, image) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = this.salaryEmployee();

}

Employee.prototype.salaryEmployee = function () {


    const taxPercent = 7.5;
    let level = this.level;
    let minLevelSalary = 0;
    let maxLevelSalary = 0;

    if (level === "Senior") {

        minLevelSalary = 1500;
        maxLevelSalary = 2000;
    } else if (level === "Mid-Senior") {
        minLevelSalary = 1000;
        maxLevelSalary = 1500;
    }
    else if (level === "Junior") {
        minLevelSalary = 500;
        maxLevelSalary = 1000;
    }



    let salary = Math.floor(Math.random() * (maxLevelSalary - minLevelSalary + 1)) + minLevelSalary;

    let netSalary = salary - (salary * (taxPercent / 100));

    salary = Math.floor(netSalary)

    return salary;


};


let array = []
function addEmployee(id, employeeName, section, lvl, img) {
    let x = new Employee(id, employeeName, section, lvl, img);
    array.push(x)
    return array;
}
let ghaziSamer = addEmployee(1000, "Ghazi Samer", "Administration", "Senior", "")
let lanaAli = addEmployee(1001, 'Lana Ali', 'Finance', 'Senior', "")
let tamaraAyoub = addEmployee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', "")
let safiWalid = addEmployee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', "")
let omarZaid = addEmployee(1004, 'Omar Zaid', 'Development', 'Senior', "")
let ranaSaleh = addEmployee(1005, 'Rana Saleh', 'Development', 'Junior', "")

let hadiAhmad = addEmployee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', "")





for (let i = 0; i < array.length; i++) {
    const showThePargaraph = document.createElement('p')
    showThePargaraph.textContent = ` The employee ID is ${array[i].employeeID}  the employee Full name is
    ${array[i].fullName}   employee Department is ${array[i].department} employee Level is ${array[i].level} 
    the employee salary will be after taxes   ${array[i].salaryEmployee()}  `

    const parantelemant = document.getElementById("divv")
    parantelemant.appendChild(showThePargaraph)

}



// console.log(array)
// let ghaziSamer = new Employee(1000,"Ghazi Samer", "Administration", "Senior","");
// let lanaAli = new Employee(1001, 'Lana Ali', 'Finance', 'Senior',"");
// let tamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior',"");
// let safiWalid = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior',"");
// let omarZaid = new Employee(1004, 'Omar Zaid', 'Development', 'Senior',"");
// let ranaSaleh = new Employee(1005, 'Rana Saleh', 'Development', 'Junior',"");
// let hadiAhmad = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior',"");



// const showThePargaraph = document.getElementById("hi")

// showThePargaraph.textContent = ` The employee ID is ${ghaziSamer.employeeID}  theemployee Full name is
//  ${ghaziSamer.fullName}   employee Department is ${ghaziSamer.department} employee Level is ${ghaziSamer.level} 
//    the employee salary will be after taxes   ${ghaziSamer.salaryEmployee()}               `


// function Employee(fullName,employeeId,department,level,image)
// {
    // this.fullName = fullName;
// this.employeeId = employeeId;
// this.department =department;
// this.level = level;
// this.image =image;
// this.salary = this.salaryfun();
//  = function (){
//     if (employee.level ==="Senior"){
//       let  salary = 1500 }
//     }
// }
// console.log(employee.salaryx)
// let ghaziSamer = new Employee("Ghazi Samer",1000,"Administration","Senior","")
// let lanaAli	 = new employee("Lana Ali",1001,"Finance","Senior","")
// let tamaraAyoub= new employee("tamara Ayoub",1002,"Marketing","Senior","")
// let safiWalid = new employee("safi Walid",1003,"Administration","Mid-Senior","")
// let omarZaid = new employee("omar Zaid",1004,"Development","Senior","")
// let ranaSaleh= new employee("rana Saleh",1005,"Development","Junior","")
// let hadiAhmad= new employee("Hadi Ahmad",1006,"Finance","Mid-Senior","")

// Employee.prototype.salaryfun= function (){
// //  let xo=this.level
// //  let salary=0
// // if (xo ==="Senior"){
// //  salary = 1500 }
//  return ("odai");
// // };

// console.log(ghaziSamer);
// // console.log(ghaziSamer)
// // console.log(lanaAli)