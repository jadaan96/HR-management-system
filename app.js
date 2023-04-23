'use strict';



function Employee(fullName, department, level, image, employeeID = 0) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.employeeID = employeeID;
    this.salary = this.salaryEmployee();
    Employee.allemployee.push(this);

}
Employee.allemployee = [];

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
// let adminTotalsalary = 0;
// let finTotalsalary = 0;
// let marketTotalsalary = 0;
// let devlopTotalsalary = 0;
// let numberOfadmin = 0
// let numberOfFin = 0
// let numberOfmarket = 0
// let numberOfDev = 0

Employee.prototype.cards = function () {
    const admin = document.getElementById('Administration')
    const dev = document.getElementById('Development')
    const fin = document.getElementById('Finance')
    const mark = document.getElementById('Marketing')

    admin.innerHTML = '';
    dev.innerHTML = '';
    fin.innerHTML = '';
    mark.innerHTML = '';


    /*for loop to render all the information in the page*/
    for (let i = 0; i < Employee.allemployee.length; i++) {
        let final = Employee.allemployee[i]
        const divE = document.createElement('div')
        divE.className = "divclass"

        if (final.department === "Administration") {
            admin.appendChild(divE);
            
        } else if (final.department === "Finance") {
            fin.appendChild(divE)
            // console.log(finTotalsalary)
        } else if (final.department === "Marketing") {
            mark.appendChild(divE)
            // marketTotalsalary = marketTotalsalary + final.salary
            // numberOfmarket = numberOfmarket + 1
        } else if (final.department === "Development") {
            dev.appendChild(divE)
            // devlopTotalsalary = devlopTotalsalary + final.salary
            // numberOfDev = numberOfDev + 1
        }

        const imgelemant = document.createElement('img')
        imgelemant.src = final.image
        divE.appendChild(imgelemant)
        imgelemant.className = "imagclass"
        const pelemant = document.createElement('p')
        pelemant.textContent = `Name: ${final.fullName} - ID ${final.employeeID}`
        divE.appendChild(pelemant)
        pelemant.className = "paragraph"
        const p2elemant = document.createElement('p')
        p2elemant.textContent = `Department ${final.department} - Level ${final.level} `
        p2elemant.className = "paragraph"
        divE.appendChild(p2elemant)
        const salaryelemant = document.createElement('p')
        salaryelemant.textContent = ` ${final.salary}`
        salaryelemant.className = "paragraph"
        divE.appendChild(salaryelemant)
            ;
    }
    // console.log(adminTotalsalary)
    
}

// let avaragSalaryAdmin = adminTotalsalary / numberOfadmin
// console.log(finTotalsalary)
// console.log(finTotalsalary)

// let avaragSalaryFin = finTotalsalary / numberOfFin
// let avaragSalaryMarket = marketTotalsalary / numberOfmarket
// let avaragSalaryDevlop = devlopTotalsalary / numberOfDev

let ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true", 1000)
let lanaAli = new Employee('Lana Ali', 'Finance', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true", 1001)
let tamaraAyoub = new Employee('Tamara Ayoub', 'Marketing', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true", 1002)
let safiWalid = new Employee('Safi Walid', 'Administration', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true", 1003)
let omarZaid = new Employee('Omar Zaid', 'Development', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true", 1004)
let ranaSaleh = new Employee('Rana Saleh', 'Development', 'Junior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true", 1005)
let hadiAhmad = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true", 1006)
// console.log(Employee.allemployee)
// let array = [ghaziSamer, lanaAli, tamaraAyoub, safiWalid, omarZaid, ranaSaleh, hadiAhmad]
// for (let i = 0; i < Employee.allemployee.length; i++) {
//     Employee.allemployee[i].cards()
// }










Employee.prototype.randomeID = function (heightEmpID, lowID) {
    this.employeeID = Math.floor(Math.random() * (heightEmpID - lowID + 1)) + lowID
    return this.employeeID
}


function funcEmployee(element) {
    element.preventDefault();

    let fullName = element.target.fullName.value;
    let department = element.target.Department.value;
    let level = element.target.Level.value;
    let image = element.target.img.value;

    const newEmployee = new Employee(fullName, department, level, image);
    newEmployee.randomeID(1000, 9999)
    newEmployee.cards()
    console.log(newEmployee)
    saveDataToLocal();

}

gitElemantFromLocalStorage();


for (let i = 0; i < Employee.allemployee.length; i++) {
    Employee.allemployee[i].cards()
}
console.log(Employee.allemployee)


const formApply = document.getElementById('employeeForm')
formApply.addEventListener('submit', funcEmployee)

/*  we will save all data to local storge here*/
 function saveDataToLocal() {
    let employeeData = JSON.stringify(Employee.allemployee)
     localStorage.setItem('employeeKey', employeeData)


}

function gitElemantFromLocalStorage() {
    let gittingElemant = localStorage.getItem('employeeKey')
    let newShap = JSON.parse(gittingElemant)
    if (newShap !== null) {     
        Employee.allemployee = [];
        for (let i = 0; i < newShap.length; i++) {

            new Employee(newShap[i].fullName, newShap[i].department, newShap[i].level, newShap[i].image, newShap[i].employeeID, newShap[i].salary)

            console.log(Employee.allemployee)
        }
        // Employee.allemployee[0].cards()
    }
}
saveDataToLocal()