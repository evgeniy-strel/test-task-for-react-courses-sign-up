document.addEventListener('DOMContentLoaded', function() {
    const showSignUpForm = (e) => {
        e.preventDefault();
        signUp.classList.remove('hide');
    }

    const hideSignUpForm = (e) => {
        if (e.target == signUp) {
            signUp.classList.add('hide');
        }
    }

    const sendData = async (e) => {
        e.preventDefault();
        const inputs = signUpForm.querySelectorAll('input');
        const inputName = signUpForm.querySelector('.sign-up-name');
        const inputEmail = signUpForm.querySelector('.sign-up-email');

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.classList.remove('errorData');
            if (input.value == '') {
                input.classList.add('errorData');
                return;
            }
        }

        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: {
                    name: inputName.value,
                    email: inputEmail.value
                }
            });
            if (response.ok) {
                alert('Данные успешно отправлены');
                signUpForm.reset();
            }
        }
        catch(error) {
            alert('Возникла ошибка при отправке данных');
        }
    }

    const aboutUsBtn = document.querySelector('.about-us-btn');
    const signUp = document.querySelector('.sign-up-container');
    const signUpForm  = signUp.querySelector('form');
    aboutUsBtn.addEventListener('click', showSignUpForm);
    signUp.addEventListener('click', hideSignUpForm);
    signUpForm.addEventListener('submit', sendData);
});