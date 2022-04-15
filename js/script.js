let input = document.getElementById('num_inp');
let changer = document.querySelectorAll('.text-items span');
let change_btn = document.getElementById('change_btn');
let change_val = document.querySelector('.change_val');
let count = 0;
change_btn.addEventListener('click',()=>{
    change_btn.style.color = "#000";
    if(input.value == 1){
        changer[0].classList.add('active');
        changer[1].classList.remove('active');
        changer[2].classList.remove('active');
        change_val.innerHTML = changer[0].innerHTML;
    }else if(input.value == 2){
        changer[0].classList.remove('active');
        changer[1].classList.add('active');
        changer[2].classList.remove('active');
        change_val.innerHTML = changer[1].innerHTML;
    }else if(input.value == 3){
        changer[0].classList.remove('active');
        changer[1].classList.remove('active');
        changer[2].classList.add('active');
        change_val.innerHTML = changer[2].innerHTML;
    }else{
        alert('This value is invalid');
    }
})




