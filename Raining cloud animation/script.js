function rain(){
     let cloud=document.querySelector('.cloud');
     let e=document.createElement('div');
     let left=Math.floor(Math.random() * 310);
     let width=Math.random() * 5;
     let height=Math.random() * 50;
     let duration=Math.random() * 0.5;

     e.classList.add('drop');
     cloud.appendChild(e);
     e.style.left = left + "px";
     e.style.width=0.5+width + 'px';
     e.style.height=0.5+height + 'px';
     e.style.animationDuration=1+duration + 's';

     setTimeout(function(){
        cloud.removeChild(e)
     },2000)
}

setInterval(function(){
     rain()
},20);