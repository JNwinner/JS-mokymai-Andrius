let calculateButton = document.getElementById('calculate')

calculateButton.addEventListener('click', function() {
        // console.log('clicked')
        
        let employeescount = document.getElementById('employee-count').valueAsNumber
        let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
        let orderCount = document.getElementById('order-count').valueAsNumber


        let kepyklaTotal = employeescount * loavesPerEmployee 
        let arPavyks = kepyklaTotal >= orderCount

        // let logInfo = {
        //     employeescount,
        //     loavesPerEmployee,
        //     orderCount,
        //     kepyklaTotal,
        //     arPavyks
        // }

        // console.log(logInfo)

        let result = document.getElementById('results')
        result.innerHTML = `<p><strong>Kepykla per diena gales pagaminti:</strong> ${kepyklaTotal} kepalu.</p>`
        result.innerHTML += `<p><strong>Reikia pagaminti:</strong> ${orderCount} kepalu.</p>`
        result.innerHTML += `<p><strong>Ar spes pagaminti:</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
})

document.getElementById('employee-count').addEventListener('keyup', function(event)  {
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
} )

document.getElementById('loaves-per-employee').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('order-count').addEventListener('keyup', function(e) {
    let inputValue = e.target.valueAsNumber;
    if (inputValue < 0) {
        e.target.classList.add('error')
        e.target.nextElementSibling.classList.add('show')
    } else {
        e.target.classList.remove('error')
        e.target.nextElementSibling.classList.remove('show')
    }
})


document.getElementById('reset').addEventListener('click', function()  {
    
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('results').valueAsNumber = 0
    document.getElementById('results').innerHTML = 'Daugiau nieko nera'
    

})

