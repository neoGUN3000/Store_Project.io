
const btnLabel = Array.from(document.querySelectorAll('.nav__link '));
const pages = Array.from(document.querySelectorAll('.page'));
const heading = Array.from( document.querySelectorAll('.heading'));
const nav_buttons = Array.from(document.getElementsByName('main-navigation'));







document.addEventListener('DOMContentLoaded', ()=>{
  btnLabel[0].classList.add('colorGiver');
  

const  selectedBtn = (indexBtn)=>{
    for(let el = 0; el < btnLabel.length; el++){
      btnLabel[el].classList.remove('colorGiver');
      indexBtn.classList.add('colorGiver');
      } 
  }

  
  
  for(let i = 0; i < btnLabel.length;i++){
    btnLabel[i].addEventListener('click', ()=>{
      selectedBtn(btnLabel[i]);  
      //to check which btn was pressed add  selected btn colo
    });
   
   
   
    // pages[i].addEventListener('mouseover', ()=>{
    //   let pagesRect = pages[i].getBoundingClientRect();
    //   let windowsHieght = window.innerHeight;
    //   let partOfWind = 3;
    //   if(pagesRect.top < (windowsHieght / partOfWind)){
    //    for (let index = 0; index < btnLabel.length; index++) {
    //     btnLabel[index].classList.remove('colorGiver');
    //    }
    //    btnLabel[i].classList.add('colorGiver');
        
    //   }else console.log('its lower than 50%');
    // },{passive:true});

  }


  




 

});








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













7