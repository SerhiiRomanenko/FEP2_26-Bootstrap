//-------------------------------------------------------TOOLTIP SHOW---------------------------//
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