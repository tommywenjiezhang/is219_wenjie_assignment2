

(function () {
    let jsonObj = obj;
    let table = document.querySelector("table");
    let TableHeadings = Object.keys(jsonObj[0]).map(d => d.substring(3));
    console.log(jsonObj[0])
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, jsonObj);

})();

function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function getResponseText(url){
    let request = new  XMLHttpRequest();
    request.open("GET",url,false);
    request.send()
    return request.responseText;
}



