let sub_title = document.querySelector('#first_btn'),
    sub_con = document.querySelector('.submit-blog'),
    change_desc = document.querySelector('.title'),
    title_btn = document.querySelector('.title_btn-2');
    let count = document.querySelectorAll('.count'),
        desc = document.querySelectorAll('.desc');
    let center_items = document.querySelectorAll('.center-items'),
        last_desc = document.querySelector('.last-desc');

    sub_title.addEventListener('click',btn_chang);
    function btn_chang(){
        count[1].classList.toggle('active');
        desc[1].classList.toggle('active');
        if(change_desc.innerHTML == "Choose title"){
            change_desc.innerHTML = "Choose description content";
        }else{
            change_desc.innerHTML = "Choose title";
        }
        sub_title.style.width = 'auto'
        sub_title.innerHTML = 'Back';
        title_btn.innerHTML = "Submit decription";
        title_btn.style.opacity = 1;
        title_btn.addEventListener('click',()=>{
            count[2].classList.toggle('active');
            desc[2].classList.toggle('active');
            change_desc.innerHTML = "Are you happy now?"
            title_btn.innerHTML = "Yes,go ahead";
            sub_title.style.width = "200px";
            sub_title.innerHTML = "No,go back";
            title_btn.addEventListener('click',()=>{
                title_btn.style.display = 'none';
                sub_title.style.display = 'none';
                last_desc.style.display = 'block';
                count[0].classList.add('active');
                count[1].classList.add('active');
                count[2].classList.add('active');
                desc[0].classList.add('active');
                desc[1].classList.add('active');
                desc[2].classList.add('active');
            })
        })
    }
    center_items[1].addEventListener('click',btn_chang);
    center_items[2].addEventListener('click',()=>{
        count[2].classList.toggle('active');
            change_desc.innerHTML = "Are you happy now?"
            title_btn.innerHTML = "Yes,go ahead";
            sub_title.style.width = "200px";
            sub_title.innerHTML = "No,go back";
    });
    
    
