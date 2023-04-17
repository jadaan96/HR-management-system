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
let lanaAli =  addEmployee(1001, 'Lana Ali', 'Finance', 'Senior', "")
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


