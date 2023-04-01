console.log("Welcome To PinCode Validation")

//UC1 
const pinRegex = RegExp("^[0-9]{6}$");

function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}

try{
    validatePIN("401208");  
    validatePIN("4012");  
}catch(e){
    console.error(e);
}