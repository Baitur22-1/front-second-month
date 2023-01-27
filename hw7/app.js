class TrafficLight {
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}
class Light extends TrafficLight {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('choose color (red, yellow or green)').toLocaleLowerCase().trim()
if (color === 'red') {
    const red = new Light({
        color: 'red',
        selector: 'red',
        text: 'stop',
    })
} else if (color === 'yellow') {
    const yellow = new Light({
        color: 'yellow',
        selector: 'yellow',
        text: 'wait',
    })
} else if (color === 'green') {
    const green = new Light({
        color: 'green',
        selector: 'green',
        text: 'go',
    })
} else alert('only: (red, yellow, green)')

