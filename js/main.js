

let gettingBtns = document.querySelectorAll('.side-nav__link');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');
const pagesArr = Array.from(pages);
const headingArr = Array.from(heading);
const nav_buttons = Array.from(gettingBtns);





window.location.href = nav_buttons[1].getAttribute('href');








function ColorChanger(с) {
  let root = document.documentElement;
  root.style.setProperty('--main-color-ofDesign', с); 
}





console.log('black');  
let a = 'rgb(0, 0, 0)';
let b = 'rgb(42, 42, 42)';
let c = 'rgb(85, 85, 85)';
let d = 'rgb(127, 127, 127)';
let e = 'rgb(170, 170, 170)';
let f = 'rgb(212, 212, 212)'; 
let g = 'rgb(250, 250, 250)';
 console.log('white');

headingArr[0].style.color = a;

headingArr[4].style.color = e;
headingArr[5].style.color = f;
headingArr[6].style.color = g;




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







function visiting_links(){
  let links = document.querySelectorAll('.side-nav__link') ;
  links.forEach(link =>{
    const sectionId = link.getAttribute('href');
    link.addEventListener('click', function(event){
      event.preventDefault();
        window.location.href = sectionId;
 
    link.scrollIntoView({behavior: 'smooth'});
   
    });
  });
  for(let i = 0; i < links.length; i++){
let isLinkVisited = true;
let isClassAdded = true;




links[i].addEventListener('click', ()=>{
    
   
if(isLinkVisited){
  links[i].classList.add('chengeColor');
  isClassAdded = true;
}else{
  links[i].classList.remove('chengeColor');
  isClassAdded = false;
}   
});

//im trying to remove a class from rest of the links arnt pressed




    
   
  }
}

window.addEventListener('DOMContentLoaded', visiting_links);







