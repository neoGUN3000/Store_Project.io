
const btnLabel = Array.from(document.querySelectorAll('.r'));
const pages = Array.from(document.querySelectorAll('.page'));
const headingArr = Array.from( document.querySelectorAll('.heading'));
const nav_buttons = Array.from(document.getElementsByName('main-navigation'));

// pages[1].scrollIntoView({behavior: 'smooth'});




const scrollingPage = (e) =>{
pages[e].scrollIntoView({behavior: 'smooth'});
}



const selectedBtn = ()=>{
for (let i = 0; i < nav_buttons.length; i++) {
if(nav_buttons[i].checked){
  btnLabel[i].classList.add('colorGiver');
  
   
   
     } if(nav_buttons[i].checked  &&  sidePosition(btnLabel[i])){
      btnLabel[i].classList.add('colorGiverRightSide');
      scrollingPage(i);
      
     }if(nav_buttons[i].checked || !sidePosition(btnLabel[i])){
      btnLabel[i].classList.add('colorGiverBlackBlue');
      scrollingPage(i);
      
     }if(!nav_buttons[i].checked){
      btnLabel[i].classList.remove('colorGiverBlackBlue');
      btnLabel[i].classList.remove('colorGiverRightSide');
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


const animatedElementsArr = Array.from(document.querySelectorAll('.animated'));




window.addEventListener('mouseover', ()=>{
for(let i = 0; i < animatedElementsArr.length; i++){
  let result = distanceBetween(animatedElementsArr[i]);
  if(result){
    animatedElementsArr[i].classList.add('showingElement');
  }
}
} );



window.addEventListener('mouseover', () => {
  let result = distanceBetween(pages[1]);
  let anchor = document.querySelector('.anchor');
if(result){
anchor.classList.add('shower');
}else{anchor.classList.remove('shower');}

    
});



document.addEventListener('', ()=>{
  let positionTrigger = document.querySelector('#im-special');
  const ifElementIntoView = (e) =>{
    let isIntoView = distanceBetween(e);
    return isIntoView 
  }
 const result =  ifElementIntoView(positionTrigger);
 let toFixElement = document.querySelector('.container--right');
if(result){
toFixElement.style.position = 'static';
}else toFixElement.style.position = 'fixed';;


})
// this program makes fixed or static position for any containers dependencly on scroll 


const sidePosition = (element) =>{
  let windowWidth = window.innerWidth;
  let precentage = 60;
  let elementPosition = element.getBoundingClientRect();
  let item = element;
 
  

   if(elementPosition.left > (precentage / 100) * windowWidth){
   return true;
   }else  return false;
 

  
}










