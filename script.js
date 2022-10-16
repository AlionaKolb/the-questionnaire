const form = document.querySelector(".form");
inputs = document.querySelectorAll("input");
const sendName = document.querySelector("#name");
const sendSecondName = document.querySelector("#secondName");
const sendEmail = document.querySelector("#email");
const sendPhone = document.querySelector("#phone");

const message = {
    success: 'Спасибо! Загрузка данных прошла успешно',
    failure: 'Что-то пошло не так...'
};

form.addEventListener("submit", (event) => {
    fetch(`http://46.21.248.81:3001/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: AlionaKolb'
            },
            body: JSON.stringify({

                "name": sendName.value,
                "secondName": sendSecondName.value,
                "phone": sendPhone.value,
                "email": sendEmail.value,
                "agree": true
            }),

        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            statusMessage.textContent = message.success;
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            statusMessage.textContent = message.failure;
        })
        .finally(() => {
            setTimeout(() => {
                statusMessage.remove();
            }, 3000);
        });
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.appendChild(statusMessage);

    event.preventDefault('https://learn.javascript.ru/default-browser-action');
});