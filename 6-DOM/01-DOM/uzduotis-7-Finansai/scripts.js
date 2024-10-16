let payments = [
  {id:1, type:'income', amount:900, when:'2024-10-01 10:30:29'},
  {id:2, type:'income', amount:900, when:'2024-10-02 11:30:23'},
  {id:3, type:'expense', amount:-40, when:'2024-10-03 16:30:19'},
  {id:4, type:'expense', amount:-13, when:'2024-10-04 15:55:24'},
  {id:5, type:'expense', amount:-76, when:'2024-10-05 09:39:56'},
  {id:6, type:'expense', amount:-56, when:'2024-10-06 22:47:34'},
  {id:7, type:'expense', amount:-47, when:'2024-10-07 21:30:42'},
  {id:8, type:'income', amount:900, when:'2024-10-08 07:23:13'}
]
function load_data(data_wrapper_selector, data_array, balance_wrapper_selector) {
  let data_wrapper = document.querySelector(data_wrapper_selector)
  let balance_wrapper = document.querySelector(balance_wrapper_selector)
  for (const item of data_array) {
      data_wrapper.innerHTML +=`
      <div class="item-wrapper">
          <p class="id">ID: ${item.id}</p>
          <p class="type ${item.type}">
              ${item.type == 'income' ? "Pajamos" : "Islaidos"}
          </p>
          <p class="amount ${item.type}">${item.amount} €</p>
          <p class="when"> ${item.when}</p>
      </div>
      `
  }
balance_wrapper.innerHTML = `
      <h3>Galutinis likutis:
          <span class="${calculateBalance(data_array) > 0 ? 'income' : 'expense'}">
              ${calculateBalance(data_array)} €
          </span>
      </h3>
      <p>Pajamos: <span class="income">${calculateIncome(data_array)} €</span></p>
      <p>Išlaidos: <span class="expense">${calculateExpense(data_array)} €</span></p>
  `
}
load_data('.payments-wrapper', payments, '.balance-wrapper')
function calculateBalance(payments_data) {
  let sum = 0
  for(const item of payments_data) {
      sum += item.amount
  }
  return sum
}
function calculateIncome(payments_data) {
  let sum = 0
  for(const item of payments_data) {
      if(item.type == 'income') {
          sum += item.amount
      }
  }
  return sum
}
function calculateExpense(payments_data) {
  return payments_data.filter(item => item.type == 'expense').reduce((sum, item) => sum + item.amount, 0)
}
document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault()
  const amount = parseFloat(document.getElementById('amount').value)
  const type = amount >= 0 ? 'income' : 'expernse'
  payments.push({
      id:payments.length+1,
      type,
      amount,
      when:getCurrentTime()
  })
  const dataWrapper = document.querySelector('.payments-wrapper')
  const balanceWrapper = document.querySelector('.balance-wrapper')
  dataWrapper.innerHTML = ''
  balanceWrapper.innerHTML = ''
  load_data('.payments-wrapper', payments, '.balance-wrapper')
  document.getElementById('amount').value = ''
})
function getCurrentTime() {
  const now = new Date()
  const year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day
  hours = hours < 10 ? `0${hours}` : hours
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

//   document.getElementById('payment-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     let type = document.getElementById('type').value;
//     let amount = parseFloat(document.getElementById('amount').value);
//     let when = document.getElementById('when').value;

//     let newPayment = {
//         id: payments.length + 1,
//         type: type,
//         amount: type === 'income' ? amount : -amount,
//         when: when
//     };

//     payments.push(newPayment);
//     load_data('.payments-wrapper', payments, '.balance-wrapper');
// });

//   load_data('.payments-wrapper', payments, 'balance-wrapper')