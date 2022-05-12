var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame,

    anim
var Loop = function (s) {
    s = s ? Loop.start() : Loop.stop()
    this.g = "g"
}

Loop.start = function() {
    anim = requestAnimationFrame(Play)
}

Loop.stop = function() {
    cancelAnimationFrame(anim)
}


function getRandomNote(min = 64, max = 375) {
    return Math.floor(Math.random() * (max - min) + min)
}

var timeSignaturesFromInputs = [4, 3],
    timeSignatures = removeDuplicates(timeSignaturesFromInputs),
    polyRhythym = intToArray(timeSignatures),
    noteMap = toneMap(timeSignatures),
    bpm = 120,
    interval = (60 / bpm) * 1000,
    commonTime = findCommonTime(timeSignatures),
    minNote = 65,
    maxNote = 262,

    canLoop = true,
    note = getRandomNote(minNote, maxNote)

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function findCommonTime(arr) {
    var min, range = arr
    min = arr[0] > arr[1] ? arr[1] : arr[0]

    let gcd = (a, b) => !b ? a : gcd(b, a % b)
    let lcm = (a, b) => (a * b) / gcd(a, b)

    var multiple = min
    range.forEach((n) => {
        multiple = lcm(multiple, n)
    })

    while (multiple % 2 == 0) {
        multiple = multiple / 2
    }

    return multiple
}


function wait(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

function toneMap() {
    let arr = []
    for (let i = 0; i < timeSignatures.length; i++) {
        arr[i] = getRandomNote()
    }
    return arr
}

function intToArray(rows) {
    var arr = []
    for (var i = 0; i < rows.length; i++) {
        arr[i] = []
        for (var j = 0; j < rows[i]; j++) {
            arr[i][j] = 1
        }
    }
    return arr
}

function beep(freq = 432, duration = interval, vol = 100) {
    if (canLoop == false) return canLoop

    const context = new AudioContext(),
        oscillator = context.createOscillator(),
        gain = context.createGain()

    oscillator.connect(gain)
    console.log(freq)
    oscillator.frequency.value = freq
    oscillator.type = "square"

    gain.connect(context.destination)
    gain.gain.value = vol / 100

    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + duration / 1000)
}

function Play() {
    // the interval is the 
    // var interval = 0
    // for(let i = 0; i < commonTime; i++) {
    //     interval = 
    // }
    beep(note, interval)
    wait(interval)
    Loop(true)
    console.log("looping...")
}