(function () {
    let citiesJson;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            citiesJson = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "../data.json", true);
    xmlhttp.send();

    console.log(citiesJson);

    let table = document.querySelector("table");
    let TableHeadings = Object.keys(citiesJson[0]);
    table.classList.add("table");
    generateTableHead(table, TableHeadings);
    generateTable(table, citiesJson);

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

