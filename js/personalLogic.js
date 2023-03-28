const btn1 = document.getElementById('submit');
btn1.addEventListener('click',() =>{
    const user = document.getElementById('email').ariaValueMax;
    alert('email sent!\nUser: ' + user);
});