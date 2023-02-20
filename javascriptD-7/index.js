let employee = [{ "name": "sweta", "age": 22, "address": "valsad" }, 
{ "name": "harsh", "age": 19, "address": "surat" }, 
{ "name": "namrata", "age": 27, "address": "chikhli" }]
let table = document.createElement("table");
console.log(table);


function tableHead(table, employee) {

    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key in employee[0]) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
tableHead(table, employee);

function tableBody(table, employee) {
    let tBody = table.createTBody();
    for (const iterator of employee) {


        let row = tBody.insertRow();
        for (const key in iterator) {

            let td = row.insertCell();
            let text = document.createTextNode(iterator[key]);
            td.appendChild(text);

        }

    }
}
tableBody(table, employee);
document.body.appendChild(table);
table.style.backgroundColor= "pink";
table.style.border= "1px solid black"











