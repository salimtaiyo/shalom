var typed = new Typed(".element", {
    strings: [
        "",
        "JavaScript",
        "Foundation 6",
        "Bootstrap"
    ],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true

  });

 document.querySelector('.home__nav--links').addEventListener('click', function(event){
     if(event.target.className==='x'){
    
        window.scroll({ top: 760, left: 0, behavior: 'smooth' });
     }
     else{
        window.scroll({ top: 3500, left: 0, behavior: 'smooth' });
     }
 })

 document.querySelector('.scroll').addEventListener('click', () => window.scroll({ top: 0, left: 0, behavior: 'smooth' }))