const userNameValue = "Justas"
localStorage.setItem('usernName', userNameValue)

export const fetchData = (key) => {return localStorage.getItem(key)}