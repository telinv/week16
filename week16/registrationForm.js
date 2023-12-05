let errors  = [];

function checkValidity(input){
    switch(input.name){
        case "name":
            if(input.value.length < 2){
            return "Your name should be more than 1 symbol";
        }
        break;
        case "email":
            if(!input.value.includes("@")){
                return "Your email should have @";
            }
        break;
        case "age":
            if(input.value < 1){
                return "Enter your real age";
            }
        break;
    }
    return '';
}


function checkAll (){
    errors = [];
    let inputs = document.querySelectorAll('input');
    let errorsInfo = document.querySelector('.errorsInfo');
    errorsInfo.innerHTML = '';
    for(let input of inputs){
        let error = checkValidity(input);
        if (error){
            errors.push(error);
        }
    }
    if(errors.length > 0){
        errorsInfo.innerHTML = errors.join(". \n");
        return
    }
};

document.getElementById('registrationForm').addEventListener('submit',function(evt){
    evt.preventDefault();
    console.log(checkbox.checked);
    if(!checkbox.checked){
        return "Accept conditions";
    }
    checkAll();
    registrationForm.reset();
})

// button.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log(checkbox.checked);