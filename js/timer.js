// import addRow from "./addRow"

function timer(signature, bpm) {
    var firstTimeSignature = signature[0]
    var beatsPerMeasure
    var self = this

    // bpm is set to 120 by default
    var interval = bpm ? 60 / bpm : 60 / 120

    if (firstTimeSignature > 4) {
        beatsPerMeasure = 8
    }

    if (firstTimeSignature < 4) {
        beatsPerMeasure = 4
    }

    addRow(beatsPerMeasure)

    self.start = () => { looper(interval); console.log("starting") }
    self.stop = () => { clearInterval(looper); console.log("stopping") }
}



function looper(bps) {
    soundBeat(440, bps)
    setInterval(bps)
    console.log("looping")
}

const soundBeat = (freq, duration, vol = 100) => {
    const context = new AudioContext(),
        oscillator = context.createOscillator(),
        gain = context.createGain()

    oscillator.connect(gain)
    oscillator.frequency.value = freq
    oscillator.type = "square"

    gain.connect(context.destination)
    gain.gain.value = vol * 0.01

    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + duration * 0.001)
}

function wait(ms) {
    const start = Date.now();
    let now = start
    while (now - start < ms) {
        now = Date.now()
    }
}