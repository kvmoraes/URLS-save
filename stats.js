const os = require('os')

setInterval(() => {
    const {freemem, totalmem} = os

    const free = parseInt(freemem()/ 1024 / 1024)
    const total = parseInt(totalmem()/ 1024 / 1024)
    const percent = parseInt(free/total * 100)

    //console.log(`O total de memória disponível é ${free} MB de ${total} MB`)

    const stats = {
        free: `${free} MB`,
        total: `${total} MB`,
        usage: `${percent}%`
    }

    console.clear()
    console.log("=====PC STATS=====")
    console.table(stats)
    
}, 1000)


