const container=document.querySelector(".container");
     const card=document.querySelector(".card");
     container.addEventListener("mousemove",(e)=>{
          let x=(window.innerWidth/2 - e.pageX)/15;
          let y=(window.innerHeight/2 - e.pageY)/15;
          card.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
     });
     const title=document.querySelector(".title");
     const shoes=document.querySelector(".shoes img");
     const description=document.querySelector(".info h3");
     const purchase=document.querySelector(".purchase button");
     const sizes=document.querySelector(".sizes");
     container.addEventListener("mouseenter",(e)=>{
          card.style.transition="none";
          title.style.transform="translatez(150px)";
     });
     container.addEventListener("mouseleave",(e)=>{
          card.style.transition="all 0.5s ease";
          card.style.transform=`rotateY(0deg) rotateX(0deg)`;
          title.style.transform="translateZ(0px)";
     });