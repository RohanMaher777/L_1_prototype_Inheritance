let user = {
    showAccess : true
}
let premiumUser = {
    ads : false
}

premiumUser.__proto__ = user

console.log(premiumUser)
console.log(premiumUser.showAccess)