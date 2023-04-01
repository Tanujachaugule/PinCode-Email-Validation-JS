const emailRegex = RegExp("^[a-zA-Z][._@a-zA-Z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " is a valid EMAIL.");
    else
        throw email + " is an invalid EMAIL.";
}

try{
    validateEmail("abc.xyz@bridgelaz.co.in");   
    validateEmail(".tanuja@kkk.com");  
}catch(e){
    console.error(e);
}