const first_number_el = document.getElementById ('first_number');
const second_number_el = document.getElementById ('second_number');
const add_button_el = document.getElementById ('addition');
const sub_button_el = document.getElementById ('subtraction');
const mul_button_el = document.getElementById ('multiplication');
const div_button_el = document.getElementById ('division');
const sumbox_el = document.getElementById ('sumbox');


add_button_el.addEventListener('click', ()=> {
    const sum = Number(first_number_el.value) + Number(second_number_el.value);
    sumbox_el.textContent = (sum);
});

sub_button_el.addEventListener('click', ()=> {
    const sum = Number(first_number_el.value) - Number(second_number_el.value);
    sumbox_el.textContent = (sum);
});

mul_button_el.addEventListener('click', ()=> {
    const sum = Number(first_number_el.value) * Number(second_number_el.value);
    sumbox_el.textContent = (sum);
});

div_button_el.addEventListener('click', ()=> {
    const sum = Number(first_number_el.value) / Number(second_number_el.value);
    sumbox_el.textContent = (sum);
});