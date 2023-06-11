"use strict";

let isCreated = false;

function createSelectVolunteerExperience(){
    const span = document.querySelector('.volunteer__experience')
    span.classList.add('none')

    const content = document.querySelector('.volunteer-content__experience')

    const select = document.createElement('select')
    select.classList.add('select')
    
    const optionOne = document.createElement('option')
    optionOne.value = 'Menos de 1 ano'
    optionOne.textContent = 'Menos de 1 ano'
    const optionTwo = document.createElement('option')
    optionTwo.value = 'Entre 1 a 5 anos'
    optionTwo.textContent = 'Entre 1 a 5 anos'
    const optionThree = document.createElement('option')
    optionThree.value = 'Entre 5 a 20 anos'
    optionThree.textContent = 'Entre 5 a 20 anos'
    const optionFour = document.createElement('option')
    optionFour.value = 'Mais de 20 anos'
    optionFour.textContent = 'Mais de 20 anos'

    select.append(optionOne, optionTwo, optionThree, optionFour)
    content.append(select)
}

function createSelectNumberOfResidents(){
    const span = document.getElementById('field-type-of-residence')
    span.classList.add('none')

    const content = document.getElementById('beneficiarie__type-of-residence')

    const select = document.createElement('select')
    select.classList.add('select')
    select.setAttribute('id', 'select__type-of-residence')
    // select.addEventListener('change', selectChangeValue('select__type-of-residence'))
    
    const optionOne = document.createElement('option')
    optionOne.value = 'Casa'
    optionOne.textContent = 'Casa'
    const optionTwo = document.createElement('option')
    optionTwo.value = 'Apartamento'
    optionTwo.textContent = 'Apartamento'
    const optionThree = document.createElement('option')
    optionThree.value = 'Kitnet'
    optionThree.textContent = 'Kitnet'
    const optionFour = document.createElement('option')
    optionFour.value = 'Bangalô'
    optionFour.textContent = 'Bangalô'
    const optionFive = document.createElement('option')
    optionFive.value = 'Outro'
    optionFive.textContent = 'Outro'

    select.append(optionOne, optionTwo, optionThree, optionFour, optionFive)
    content.append(select)

    console.log(select.value);

    // if (select.value == 'Outro'){
    //     console.log('droga');
    // }
    
}

// function selectChangeValue(select1){
//     const select = document.getElementById('select__type-of-residence')
//     console.log(select);
//     const value = select.option[select.selectIndex].value
   
//     // const selectValue = select.value;

//     // console.log(selectValue);
// }


function update(element) {

    if (element === '.experience__area' && !isCreated) {
       createSelectVolunteerExperience()

        isCreated = true;
    } else if (element === '.personal-area-income__area' && !isCreated){
        createSelectNumberOfResidents()

        isCreated = true;
    }

    const campo = document.querySelectorAll(element)
    campo.forEach(element => {
        element.removeAttribute('disabled')
        element.classList.add("input__click")
    })

}
