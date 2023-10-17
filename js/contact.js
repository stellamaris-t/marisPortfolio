const form = document.getElementById("form");
const namee = document.getElementById("namee");
const email = document.getElementById("email");
const subject = document.getElementById("subject");

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameeValue = namee.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    

    if(nameeValue === ""){
        setError(namee,'Please enter your name');
    }else{
        setSuccess(username);
    }

    if(emailValue === ""){
        setError(email,'Please enter your email address');
    }else if (!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }else{
        setSuccess(email);
    }

    if(subjectValue === ""){
        setError(subject,'Please enter a subject');
    }else{
        setSuccess(subject);
    }
   
};