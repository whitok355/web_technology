const btn = document.querySelector('.form__btn');
const form = document.querySelector('.form')

const printName = () =>{
    document.querySelector('.output__name').innerHTML = document.querySelector('.form__input').value;
}

btn.addEventListener('click', printName)