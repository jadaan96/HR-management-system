'use strict';

let firstStorege = window.localStorage.getItem('employeeKey')
let secandStorge = JSON.parse(firstStorege)
let adminTotalsalary = 0
let finTotalsalary = 0
let marketTotalsalary = 0
let devTotalsalary = 0

let adminArray = [];
let finArray = [];
let marketArray = [];
let devArray = [];

for (let i = 0; i < secandStorge.length; i++) {

    if (secandStorge[i].department === "Administration") {
        adminTotalsalary = adminTotalsalary + secandStorge[i].salary
        adminArray.push(secandStorge[i])
    } else if (secandStorge[i].department === "Finance") {
        finTotalsalary = finTotalsalary + secandStorge[i].salary
        finArray.push(secandStorge[i])

    } else if (secandStorge[i].department === "Marketing") {
        marketTotalsalary = marketTotalsalary + secandStorge[i].salary
        marketArray.push(secandStorge[i])

    } else if (secandStorge[i].department === "Development") {
        devTotalsalary = devTotalsalary + secandStorge[i].salary
        devArray.push(secandStorge[i])
    }
}

let numberOfAdmin = adminArray.length
let numberOfFin = finArray.length
let numberOfMarket = marketArray.length
let numberOfDev = devArray.length


let totalNumberOfEmployee = numberOfAdmin+numberOfFin+numberOfMarket+numberOfDev
let totalSalaryOfEmployee = adminTotalsalary+finTotalsalary+marketTotalsalary+devTotalsalary
const adminTr = document.getElementById('AdministrationTd')
let thAdmin = document.createElement('th')
let totalSalryAdmin = document.createElement('th')
let averageSlaryAdmin = document.createElement('th')
adminTr.appendChild(thAdmin)
adminTr.appendChild(totalSalryAdmin)
thAdmin.textContent = numberOfAdmin
totalSalryAdmin.textContent = adminTotalsalary
adminTr.appendChild(averageSlaryAdmin)
averageSlaryAdmin.textContent = adminTotalsalary/numberOfAdmin



const financTr = document.getElementById('FinanceTd')
let thFinanc = document.createElement('th')
let FinancTotalSalary = document.createElement('th')
financTr.appendChild(thFinanc)
financTr.appendChild(FinancTotalSalary)
FinancTotalSalary.textContent = finTotalsalary
thFinanc.textContent = numberOfFin
let averageSlaryFin = document.createElement('th')
financTr.appendChild(averageSlaryFin)
averageSlaryFin.textContent = finTotalsalary/numberOfFin

const marketTr = document.getElementById('marketTd')
let numberOfMarketempl = document.createElement('th')
let marketTotalSalary = document.createElement('th')
marketTr.appendChild(numberOfMarketempl)
marketTr.appendChild(marketTotalSalary)
marketTotalSalary.textContent = marketTotalsalary
numberOfMarketempl.textContent = numberOfMarket
let averageSlaryMarket = document.createElement('th')
marketTr.appendChild(averageSlaryMarket)
averageSlaryMarket.textContent = marketTotalsalary/numberOfMarket

const devTr = document.getElementById('devTr')
let numberOfDevempl = document.createElement('th')
let DevTotalSalarya = document.createElement('th')
devTr.appendChild(numberOfDevempl)
devTr.appendChild(DevTotalSalarya)
DevTotalSalarya.textContent = devTotalsalary
numberOfDevempl.textContent = numberOfDev
let averageSlaryDevlop = document.createElement('th')
devTr.appendChild(averageSlaryDevlop)
averageSlaryDevlop.textContent = devTotalsalary/numberOfDev

const tottal = document.getElementById('totalall')
let total1 = document.createElement('th')
let total3 = document.createElement('th')
let total2 = document.createElement('th')
tottal.appendChild(total1)
tottal.appendChild(total2)
tottal.appendChild(total3)
total2.textContent =  `Total number of employees= ${totalNumberOfEmployee}`
total1.textContent = ` Total salary for all departments= ${totalSalaryOfEmployee}`
total3.textContent = ` Average salary for all departments= ${totalSalaryOfEmployee/totalNumberOfEmployee}`

