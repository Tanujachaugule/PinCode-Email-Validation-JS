//UC4
const pinRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}

try{
    validatePIN("401208");   
    validatePIN("401 208");   
}catch(e){
    console.error(e);
}