window.onload = function()
{
    generationUser();
};

document.getElementById('buttonGen').addEventListener('click', function () {
    generationUser();
 })


 document.getElementById('buttonClear').addEventListener('click', function () {
    clearUser();
 })

 function generationUser()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('birthMpnthDayOutput').innerText = initPerson.birthMontDay;
    document.getElementById('profession').innerText = initPerson.profession;
}

function clearUser()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = "Иван";
    document.getElementById('secondNameOutput').innerText = "Иванович";
    document.getElementById('surnameOutput').innerText = "Генерация фамилии";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('birthMpnthDayOutput').innerText = "Генерация дня месяца";
    document.getElementById('profession').innerText = "Генерация професcии";
}
