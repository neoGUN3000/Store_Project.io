

let nav_buttons = document.getElementsByName('scroll_btn');
let pages = document.querySelectorAll('.page');
let heading = document.querySelectorAll('.heading');
const headingArr = Array.from(heading);
// называть множиство множиством 



// _____mouse___on____HEADING____






// ____________BLACK____BTN_____WHEN_____PAGE___IS___INTO___VIEW__
function distanceBetween (element){
  const gettingElement = element.getBoundingClientRect();
  const windHieght = window.innerHeight;
return gettingElement.top < windHieght;
}



window.addEventListener('mouseover', () => {
  for(let i = 0; i < heading.length;i++){
    const result = distanceBetween(headingArr[i]);
   if(result){
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
        sectionId.scrollIntoView({behavior: 'smooth'});

  
      }
    })
  })
}
window.addEventListener('DOMContentLoaded', visiting_links());