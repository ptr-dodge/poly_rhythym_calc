var rows = []
var polyRhythym = numberToArray(rows)

function addRow(beats) {
    rows.push(beats)
    updateRows(rows)
}

function newDiv() {
    var d = document.createElement('div')
    return d
}

function numberToArray(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr[i] = nthArray(num)
    }
    return arr
}

function nthArray(n) {
    var arr = []
    for (var i = 0; i < n; i++) {
        arr[i] = 1
    }
    return arr
}

function updateRows(rowArray) {
    const container = document.querySelector('.generator')

    for (let i = 0; i < rowArray.length; i++) {
        let row = newDiv()
        row.classList.add('row')

        for (let j = 0; j < rowArray[i].length; j++) {
            let beat = newDiv()
            beat.classList.add('beat')
            row.appendChild(beat)
        }
        container.appendChild(row)
    }

}