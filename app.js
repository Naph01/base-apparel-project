const button = document.querySelector('.btn');
const input = document.querySelector('input');
const errorIcon = document.querySelector('.error-icon');
const errorText = document.querySelector('.error-text');

const checkFunction = () => {
    const inputValue = input.value.trim();
 
    if(!isEmail(inputValue)) {
     errorIcon.classList.remove('hidden');
     errorText.classList.remove('hidden');  
     }


    else {
        errorIcon.classList.add('hidden');
        errorText.classList.add('hidden');
    }
    
}

function isEmail(input) {
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}


button.addEventListener('click', checkFunction);