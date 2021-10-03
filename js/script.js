const droneElement = document.querySelector('#droneElement')

document.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY

    droneElement.style.left = x + 'px'
    droneElement.style.top = y + 'px'
})