

const btnLabel = Array.from(document.querySelectorAll('.r'));
const pages = Array.from(document.querySelectorAll('.page'));
const headingArr = Array.from( document.querySelectorAll('.heading'));
const nav_buttons = Array.from(document.getElementsByName('main-navigation'));


const scrollingPage = (e) =>{
pages[e].scrollIntoView({behavior: 'smooth'});
}



const selectedBtn = ()=>{
for (let i = 0; i < nav_buttons.length; i++) {
if(nav_buttons[i].checked){
    btnLabel[i].classList.add('colorGiver');
    scrollingPage(i);
     } else{
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
  
  for(let i = 0; i < animatedElementArr.length; i++){
   
    let result = distanceBetween(animatedElementArr[i]);
    if(result){
      animatedElementArr[i].classList.add('showingElement');
    }else{
      animatedElementArr[i].classList.remove('showingElement');
    }
   


    }



 
    
});













