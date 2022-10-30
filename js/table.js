/*
File: table.js
GUI Assignment: HW3
Created on: 10/30/2022
Description: Contains javascript code to create dynamic multiplication table
Kyle Gaudet, UMass Lowell Computer Science, kyle_gaudet@student.uml.edu
Copyright (c) 2022 by Kyle Gaudet. All rights reserved.
Updated by KG on 10/30/2022
*/

// function to make table from form input
function makeTable() {
    // remove previous warning messages
    var warnings = Array.from(document.getElementsByClassName('warning'));
    warnings.forEach(warning => {
        warning.remove();
    });

    // remove previous table if one exists
    var table = document.getElementById('table');
    if (table != null)
        table.remove();

    // get values from the table
    var minX = parseInt(document.getElementById('minX').value);
    var maxX = parseInt(document.getElementById('maxX').value);
    var minY = parseInt(document.getElementById('minY').value);
    var maxY = parseInt(document.getElementById('maxY').value);

    var validInputs = true;

    // validate minX input
    if ( minX < -50 || minX > 50 || minX > maxX || isNaN(minX)) {
        // if input is invalid place a warning message above input
        var minXlabel = document.getElementById('minXlabel');
        minXlabel.insertAdjacentHTML('afterend', '<div class="warning" <br>Warning! Value is either NaN, out of range, or greater than max</div>');
        validInputs = false;
    }

    // validate maxX input
    if ( maxX < -50 || maxX > 50 || minX > maxX || isNaN(maxX)) {
        // if input is invalid place a warning message above input
        var maxXlabel = document.getElementById('maxXlabel');
        maxXlabel.insertAdjacentHTML('afterend', '<div class="warning" <br>Warning! Value is either NaN, out of range, or less than min</div>');
        validInputs = false;
    }

    // validate minY input
    if ( minY < -50 || minY > 50 || minY > maxY || isNaN(minY)) {
        // if input is invalid place a warning message above input
        var minYlabel = document.getElementById('minYlabel');
        minYlabel.insertAdjacentHTML('afterend', '<div class="warning" <br>Warning! Value is either NaN, out of range, or greater than max</div>');
        validInputs = false;
    }

    // validate maxX input
    if ( maxY < -50 || maxY > 50 || minY > maxY || isNaN(maxY)) {
        // if input is invalid place a warning message above input
        var maxYlabel = document.getElementById('maxYlabel');
        maxYlabel.insertAdjacentHTML('afterend', '<div class="warning" <br>Warning! Value is either NaN, out of range, or less than min</div>');
        validInputs = false;
    }

    // create table
    var table = document.createElement('table');
    table.setAttribute('id', 'table');

    // if inputs are valid fill table 
    if(validInputs) {
        // create top row and top left td
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(""));
        tr.appendChild(th);

        // fill first row with minX - max X
        for(var j = minX; j <= maxX; j++) {
            var th = document.createElement('th');
            var temp = j;
            var tempstr = temp.toString();
            th.appendChild(document.createTextNode(tempstr));
            tr.appendChild(th);
        }
        table.appendChild(tr);


        // create all other trs and tds
        for(var i = minY; i <= maxY; i++) {
            tr = document.createElement('tr');
            // create first th with vals from minY - maxY
            th = document.createElement('th');
            temp = i;
            tempStr = temp.toString();
            th.appendChild(document.createTextNode(tempStr));
            tr.appendChild(th);

            // create tds with multiplied values for each row
            for(var j = minX; j <= maxX; j++) {
                td = document.createElement('td');
                temp = i * j;
                tempstr = temp.toString();
                td.appendChild(document.createTextNode(tempstr));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        // add the table to its div
        var tablediv = document.getElementById('tablediv');
        tablediv.appendChild(table);
    }
}
