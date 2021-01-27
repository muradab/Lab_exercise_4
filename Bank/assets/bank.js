class person {
    constructor(fName,lName,accNumber,balance){
        this.firstName = fName;
        this.lastName = lName;
        this.accNumber = accNumber;
        this.balance = parseFloat(balance) ;
    }
    getBalance(){
        return this.balance
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance - amount > 100){
            this.balance -= amount;
            window.alert ("withdraw successfully !" )
    
        }
        else{
            window.alert ("withdraw failed! user doesn't have this amount of money" )
        }
        
    }
}



function transfer(person1 , person2 ,amount)
{
    if(person1.balance - amount > 100){
        person1.withdraw(tempAmount)
        person2.deposit(tempAmount)

        window.alert ("transfer successfully !" )

    }
    else{
        window.alert ("transfer  failed! user doesn't have this amount of money" )
    }
}
(function()
{   
    const fName = prompt("Enter first name");
    const lName = prompt("Enter last  name");
    const tempnumber = 123
    let tempBalance = 0
    let person1 = new person(fName,lName, tempnumber ,tempBalance)
    window.alert("account created successfuly !")

    
    while(true){
        operation = prompt("Enter the number for the operation you need  1 for deposit 2 for withdraw 3 to know your balance 4 to transfer money to client 5 for exit ");
    if(operation == 1){
        tempAmount = parseFloat(prompt(" Enter a deposit"))
        person1.deposit(tempAmount)
        window.alert ("your balance is " + person1.getBalance() )
        
    }
    else if(operation == 2) {
        tempAmount = parseFloat(prompt(" Enter a withdraw amount"))
        person1.withdraw(tempAmount)
        window.alert ("your balance is " +person1.getBalance())
        
        
    }
    else if(operation == 3)
    {
        window.alert ("your balance is " + person1.getBalance() )
    }
    else if(operation == 4)
    {
        const fName2 = prompt("Enter first name of the person ");
    const lName2 = prompt("Enter last  name");
    const tempnumber2 = parseFloat( prompt("Enter acc number"))
    let tempBalance2 = 0
    let person2 = new person(fName2,lName2, tempnumber2 ,tempBalance2)
        tempAmount = parseFloat(prompt(" Enter a transfer amount"))
        transfer(person1,person2,tempAmount)
        
    }
    else if(operation == 5)
    {
        alert("your balance is " + person1.balance + " birr service is disconnected ")
        break;
    }
    else{
        console.log("Your balance is" );
    }
}
}
)()