

const sections = document.querySelectorAll('.sub-dub');
const config = { root: document.querySelector("#visor"), rootMargin: '0px 0px 35% 0px'
};

let observer = new IntersectionObserver(function (entries, self) {
  
    entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id !== "sticky-header-top") {
      intersectionHandler(entry); 
    }
    
    if (entry.isIntersecting == false && entry.target.id == "sticky-header-top") {
      document.getElementsByClassName("sticky-nav")[0].classList.add('sticky');
    } else if(entry.isIntersecting == true && entry.target.id == "sticky-header-top"){
      document.getElementsByClassName("sticky-nav")[0].classList.remove('sticky');
    }    
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('nav .nav-item.active');
  const shouldBeActive = document.querySelector('nav .nav-item[data-ref=' + id + ']');
  
  if (currentlyActive) {
      currentlyActive.classList.remove('active');
  }
  if (shouldBeActive) {
      shouldBeActive.classList.add('active');
  }
 
  

  let activePosition = $(shouldBeActive).offset().left - $(shouldBeActive).parent().offset().left;
  $(".sticky-nav").animate({scrollLeft: activePosition}, 500);
  
}
