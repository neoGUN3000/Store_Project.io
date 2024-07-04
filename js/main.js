

let nav_buttons = document.getElementsByName('scroll_btn');
let pages = document.querySelectorAll('.page');


for(let i = 0; i < nav_buttons.length; i++){
    nav_buttons[i].addEventListener('click', scrollIntoViewport);
}





function  scrollIntoViewport(){
for(let i = 0; i < nav_buttons.length; i++)
    if(nav_buttons[i].checked){
       
      pages[i].scrollIntoView({ behavior: 'smooth' });
      
    }
}



// pages[i].scrollIntoView