let table = document.createElement("table");
console.log(table);

let headers = [{ header: "Id", key: "id" }, { header: "First Name", key: "fname" }, { header: "Last Name", key: "lname" }, { header: "Personal Email", key: "pEmail"},
{ header: "Organization Email", key: "oEmail"},{ header: "Password ", key: "pass"},
{ header: "Phone number ", key: "phone"},{ header: "Salary ", key: "salary"}];


//table head starts
function thead(table) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (const iterator of headers) {
        let th = document.createElement("th");
        row.appendChild(th);
        let text = document.createTextNode(iterator.header)
        th.appendChild(text);
    }
}
thead(table, thead);
//table head starts
let body = document.querySelector("body");


window.addEventListener("load", fetch("http://localhost:3000/table").then(response=>response.json()).then(data=>{
    let tBody= table.createTBody();
    for (const element of data) {
        let row = tBody.insertRow();
        for (const iterator of headers) {
            let td =document.createElement("td")
             row.appendChild(td);
            let text = document.createTextNode(element[iterator["key"]]);
            td.appendChild(text);
        }
            }
}
)

)

body.appendChild(table);
table.classList.add("table-width");// for style

// let createInput = document.createElement("input");



// table.setAttribute("id","myTable") ;






