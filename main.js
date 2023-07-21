// =========================================BOOTSTRAP==================================//
//-----------------------------------------TOOLTIP SHOW--------------------------------//

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//-----------------------------BELOW I ADD/DELETE HERE BY CLICK OF BUTTON ---------------------------//

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.className = "bootstrap__alert";
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
    ].join('')
    if (document.querySelector(".bootstrap__alert")) {
        document.querySelector(".bootstrap__alert").remove();  // if alert showed --- delete him
    } else {
        alertPlaceholder.append(wrapper); // if there is not alert --- show him
    }
}
// ---------------------------BELOW I CREATE ALERT-----------------------------//
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Супер! Тепер натисни на кнопку і алерт зникне!!!', 'success')
    })
}

// =================================================MOMENT=========================================//

// --------------------------------MOMENT MY BIRTHDAY in default format-----------------------------//
const $bday = document.querySelector(".moment__birthday");
const $userBDAY = document.querySelector(".moment__userBirthday");


let birthdateMoment = moment("19920912").format("DD MM YYYY");

$bday.innerHTML = `Дата народження: ${birthdateMoment} рік.`;

// -----------------------------MOMENT USERS BIRTHDAY (with validation )-----------------------------//

const inputDate = prompt("Введіть вашу дату народження в форматі DD/MM/YYYY: "); //Отримати від користувача дату його народження в певному форматі
const newFormatInputDate = moment(inputDate).format("DD_MM_YYYY"); // через moment.js перетворити в інший формат

const regExp = /^(0[1-9]|[1-2]\d|3[0-1])_(0[1-9]|1[0-2])_(19\d{2}|20([0-1]\d|2[0-2]))$/; // реалізувати перевірку (за допомогою регулярних виразів) на коректність користувацького введення (перевірити, що формат введення відповідає очікуванням):

if (regExp.test(newFormatInputDate)) {
    $userBDAY.innerHTML = `Дата народження <strong>"${inputDate}"<strong> введена коректно!`;
    $userBDAY.className = "text-success";
} else if (inputDate === null || inputDate.trim() === '') {
    $userBDAY.innerHTML = `Ви не ввели дату народження =(`;
    $userBDAY.className = "text-danger";
} else {
    $userBDAY.innerHTML = `Дата народження "${inputDate}" введена НЕ коректно!`;
    $userBDAY.className = "text-danger";
}