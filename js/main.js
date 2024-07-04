

let nav_buttons = document.getElementsByName('scroll_btn');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');









// _____mouse___on____HEADING____

for(let i = 0; i < heading.length; i++){
  heading[i].addEventListener('mouseover', () => {
   
    heading[i].scrollIntoView({ behavior: 'smooth' })} );

}


// ______________CLICK__BTN__SCROLL___TO__PAGE___

for(let i = 0; i < nav_buttons.length; i++){
  nav_buttons[i].addEventListener('click', scrollIntoViewport);
}



function  scrollIntoViewport(){
for(let i = 0; i < nav_buttons.length; i++)
    if(nav_buttons[i].checked){
       
      pages[i].scrollIntoView({ behavior: 'smooth' });
      
    }
}
// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__

// document.addEventListener('DOMContentLoaded', () =>{
//   window.addEventListener('scroll', () => {
//     let height_of_page =  document.querySelectorAll('.page');
//   console.log(height_of_page[1].offsetHeigth.value)
//   });
  
// })



