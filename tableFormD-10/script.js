//fetch table data
let onSubmit = document.getElementById("submit");
onSubmit.classList.add("submitBtnColor");
onSubmit.addEventListener("click", () => {
    let rcvFname = document.getElementById("fname").value;
    let rcvLname = document.getElementById("lname").value;
    let rcvTech = document.getElementById("tech").value;
    fetch("http://localhost:3000/form", {
        method: "POST",
        body: JSON.stringify({
            fname: rcvFname,
            lname: rcvLname,
            tech: rcvTech,
        }),
        headers: { 'content-type': 'application/json' },
    }).then(response => response.json()).then(data => data).catch(error => error)

})

//table starts



let table = document.createElement("table");
console.log(table);
table.classList.add("table-width"); // for style

//table head starts.
let headers = [{ header: "Id", key: "id" }, { header: "First Name", key: "fname" }, { header: "Last Name", key: "lname" }, { header: "Technology", key: "tech" },];
function thead(table) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (const iterator of headers) {
        let th = document.createElement("th");
        row.appendChild(th);
        let text = document.createTextNode(iterator.header)
        th.appendChild(text);
    }
    let th = document.createElement("th");    //for action column 
    let text = document.createTextNode("Action");
    th.appendChild(text);
    row.appendChild(th);

}
thead(table, thead);
//table head ends.
//to fetch data from db.json to table
window.addEventListener("load", fetch("http://localhost:3000/form").then(response => response.json()).then(data => {
    let tBody = table.createTBody("tbody");
    for (const element of data) {
        let row = tBody.insertRow();
        for (const iterator of headers) {
            let td = row.insertCell();
            let text = document.createTextNode(element[iterator["key"]]);
            td.appendChild(text);
        }
        let td = document.createElement("td");
        let deletBtn = document.createElement("button");
        let deleteBtnText = document.createTextNode("Delete");
        deletBtn.appendChild(deleteBtnText);
        td.appendChild(deletBtn);
        deletBtn.addEventListener("click", () => {
            fetch(`http://localhost:3000/form/${element.id}`,
                { method: "DELETE" });      //TO DELET THE DATA

        });
        deletBtn.classList.add("delete-color-space", "border-radius", "cursor-pointer");
        let editBtn = document.createElement("button");
        let editBtnText = document.createTextNode("Edit");
        editBtn.appendChild(editBtnText);
        td.appendChild(editBtn);
        row.appendChild(td)

        editBtn.addEventListener("click", () => {
            document.getElementById("fname").value = element.fname;
            document.getElementById("lname").value = element.lname;
            document.getElementById("tech").value = element.tech;
            //TO UPDATE THE DATA
            let updateBTn = document.getElementById("update");
            updateBTn.addEventListener("click", () => {
                fetch(`http://localhost:3000/form/${element.id}`,
                    {
                        method: "PUT",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(
                            {
                                fname: document.getElementById("fname").value,
                                lname: document.getElementById("lname").value,
                                tech: document.getElementById("tech").value
                            }),
                    }).then(response => response.json()).then(data => data)

            })
        }); editBtn.classList.add("edit-color", "edit-color-onclick", "border-radius", "cursor-pointer");



    }
}))
 let tableContainer = document.createElement("div");
tableContainer.className="table-scroll";
 tableContainer.appendChild(table);

//table in  body
let body =document.querySelector("body");
body.appendChild(tableContainer);

