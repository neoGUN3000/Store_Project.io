

let gettingBtns = document.querySelectorAll('.side-nav__link');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');
const pagesArr = Array.from(pages)
const headingArr = Array.from(heading);
const nav_buttons = Array.from(gettingBtns);







function anchor(){
  for( let i = 0;  i < pagesArr.length; i++){
 pagesArr[1].scrollIntoView({behavior : 'smooth'});

  }
}
anchor();


// называть множиство множиством 




// _____mouse___on____HEADING____






// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__
function distanceBetween (element){
  const gettingElement = element.getBoundingClientRect();
  const windHieght = window.innerHeight;
  return gettingElement.top < windHieght;


}



const animatedElement = document.querySelectorAll('.animated');
const animatedElementArr = Array.from(animatedElement);


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





window.addEventListener('mouseover', () => {
  const windWidth = window.innerWidth;
  if(windWidth > 1000){
    for(let i = 0; i < headingArr.length;i++){
    const result = distanceBetween(headingArr[i]);
    console.log(windWidth);
   if(result){
    headingArr[i].classList.add('showingHead');
  
   }else{
    headingArr[i].classList.remove('showingHead');
   }
  }}

 
 
})

window.addEventListener('touchstart', () => {

    for(let i = 0; i < heading.length;i++){
    const result = distanceBetween(headingArr[i]);
   
   if(result ){

    headingArr[i].classList.add('showingHead');
   }else{
    headingArr[i].classList.remove('showingHead');
   }
 

  }
})




function visiting_links(){
  let links = document.querySelectorAll('.side-nav__link') ;
  links.forEach(link =>{
    link.addEventListener('click', function(event){
      event.preventDefault();
     const   sectionId = link.getAttribute('href');
    
   
      if(sectionId){
        window.location.href = sectionId;
       link.scrollIntoView({behavior: 'smooth'});
        
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', visiting_links);



window.addEventListener('DOMContentLoaded', () =>{

  function addingClassToLink(navIndex){
    return navIndex.checked;
  }
  






  for(let i = 0; i < nav_buttons.length; i++){
    nav_buttons[i].addEventListener('click', () => {
     let result = addingClassToLink(nav_buttons[i]);
      if(result){
        console.log(result);
      }
    });
  }
});






