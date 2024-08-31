
const btnLabel = Array.from(document.querySelectorAll('.r'));
const pages = Array.from(document.querySelectorAll('.page'));
const headingArr = Array.from( document.querySelectorAll('.heading'));
const nav_buttons = Array.from(document.getElementsByName('main-navigation'));



const scrollingPage = (e) =>{
pages[e].scrollIntoView({behavior: 'smooth'});
}



const selectedBtn = ()=>{
for (let i = 0; i < nav_buttons.length; i++) {
if(nav_buttons[i].checked && i < 4){
  btnLabel[i].classList.add('colorGiver');
    scrollingPage(i);
     } if(nav_buttons[i].checked && i > 3){
      btnLabel[i].classList.add('colorGiverBlackBlue');
      scrollingPage(i);
     }
     
     
    if(!nav_buttons[i].checked){
      btnLabel[i].classList.remove('colorGiverBlackBlue');
      btnLabel[i].classList.remove('colorGiver');
    } 

          
        }
}

document.addEventListener('DOMContentLoaded', ()=>{

  btnLabel[0].classList.add('colorGiver');
  for(let i = 0; i < nav_buttons.length;i++){
    nav_buttons[i].addEventListener('click', selectedBtn);
  }
});







// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__
function distanceBetween (element){
  const gettingElement = element.getBoundingClientRect();
  const windHieght = window.innerHeight;
  return gettingElement.top < windHieght;


}


const animatedElementArr = Array.from(document.querySelectorAll('.animated'));


window.addEventListener('mouseover', () => {
  let result = distanceBetween(pages[1]);
  let anchor = document.querySelector('.anchor');
if(result){
anchor.classList.add('shower');
}else{anchor.classList.remove('shower');}

    
});













