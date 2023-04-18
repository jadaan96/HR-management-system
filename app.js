'use strict';



function Employee(fullName, department, level, image, employeeID = 0) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.employeeID = employeeID;
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








Employee.prototype.cards = function () {
    const admin = document.getElementById('Administration')
    const dev = document.getElementById('Development')
    const fin = document.getElementById('Marketing')
    const mark = document.getElementById('Finance')

    const divE = document.createElement('div')
    divE.className = "divclass"
    if (this.department === "Administration") {
        admin.appendChild(divE);
    } else if (this.department === "Finance") {
        fin.appendChild(divE)
    } else if (this.department === "Marketing") {
        mark.appendChild(divE)
    } else if (this.department === "Development") {
        dev.appendChild(divE)
    }

    
    const imgelemant = document.createElement('img')
    imgelemant.src = this.image
    divE.appendChild(imgelemant)
    imgelemant.className = "imagclass"
    const pelemant = document.createElement('p')
    pelemant.textContent = `Name: ${this.fullName} - ID ${this.employeeID}`
    divE.appendChild(pelemant)
    pelemant.className = "paragraph"
    const p2elemant = document.createElement('p')
    p2elemant.textContent = `Department ${this.department} - Level ${this.level} `
    p2elemant.className = "paragraph"
    divE.appendChild(p2elemant)
    const salaryelemant = document.createElement('p')
    salaryelemant.textContent = ` ${this.salary}`
    salaryelemant.className = "paragraph"
    divE.appendChild(salaryelemant)
        ;


}


let ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true", 1000)
let lanaAli = new Employee('Lana Ali', 'Finance', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true", 1001)
let tamaraAyoub = new Employee('Tamara Ayoub', 'Marketing', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true", 1002)
let safiWalid = new Employee('Safi Walid', 'Administration', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true", 1003)
let omarZaid = new Employee('Omar Zaid', 'Development', 'Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true", 1004)
let ranaSaleh = new Employee('Rana Saleh', 'Development', 'Junior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true", 1005)
let hadiAhmad = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true", 1006)

let array = [ghaziSamer, lanaAli, tamaraAyoub, safiWalid, omarZaid, ranaSaleh, hadiAhmad]
for (let i = 0; i < array.length; i++) {
    array[i].cards()
}











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


}




const formApply = document.getElementById('employeeForm')
formApply.addEventListener('submit', funcEmployee)
// Employee.prototype.old = function () {
//     const parantelemant = document.getElementById("show")
//     const divEle = document.createElement('div');
//     parantelemant.appendChild(divEle)
//     divEle.className = "divclass"
//     const imga = document.createElement('img')
//     imga.src = this.image
//     imga.className = "imagclass"
//     divEle.appendChild(imga)
//     const firstp = document.createElement('p')
//     firstp.textContent = `Name: ${this.fullName} -ID ${this.employeeID} ${this.department}`
//     divEle.appendChild(firstp);
//     firstp.className = "paragraph"
//     // const secp = document.createElement('p')
//     // secp.textContent = `Department ${this.department} - Level ${this.level} `
//     // secp.className = "paragraph"
    // divEle.appendChild(secp)
    // const salaryele = document.createElement('p')
    // salaryele.textContent = ` ${this.salary}`
    // salaryele.className = "paragraph"
    // divEle.appendChild(salaryele)
// }
// const show = document.getElementById('show')
    // const carrdsForEmployee = document.createElement('div')
    // show.appendChild(carrdsForEmployee)
    // const divEle = document.createElement('div');
    // carrdsForEmployee.appendChild(divEle)
        // creatimg.setAttribute("src",this.image)
