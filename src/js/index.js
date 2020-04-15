(function () {

    let cities = [{
        "fldName": "Tokyo",
        "fldLat": 35.6850,
        "fldLong": 139.7514,
        "fldCountry": "Japan",
        "fldAbbreviation": "JPN",
        "fldCapitalStatus": "primary",
        "fldPopulation": 35676000
    }, {
        "fldName": "New York",
        "fldLat": 40.6943,
        "fldLong": -73.9249,
        "fldCountry": "United States",
        "fldAbbreviation": "USA",
        "fldCapitalStatus": "NA",
        "fldPopulation": 19354922
    }];


    let table = document.querySelector("table");
    let TableHeadings = Object.keys(cities[0]);
    table.classList.add("table");
    generateTableHead(table, TableHeadings);
    generateTable(table, cities);

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

