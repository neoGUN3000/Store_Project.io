

let nav_buttons = document.getElementsByName('scroll_btn');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');








// _____mouse___on____HEADING____

for(let i = 0; i < heading.length; i++){
  heading[i].addEventListener('click', () => {
   
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



for(let i = 0; i < pages.length; i++){
  pages[i].addEventListener('mouseover', () => {
    nav_buttons[i].checked = true;
    
    });

}



// scroll by sides links______________________________



function visiting_links(){
  let links = document.querySelectorAll('.side-nav__link') ;
  links.forEach(link =>{
    link.addEventListener('click', function(event){
      event.preventDefault();
     const   sectionId = link.getAttribute('href');
      const  section = document.querySelector(sectionId);
      if(section){
        section.scrollIntoView({behavior: 'smooth'});
  
      }
    })
  })
}
window.addEventListener('DOMContentLoaded', visiting_links());