let menu=document.querySelector('.menu-h');
let ul=document.querySelector('ul');
let body=document.querySelector('body');
menu.addEventListener('click',()=>{
    ul.classList.toggle('next');
    menu.classList.toggle('texty');
    body.classList.toggle('backgroundbody')

})
let darkLogoImg=document.querySelector('.logo-img')
darkLogoImg.addEventListener('click',()=>{
body.classList.toggle('bodydark')
})
let imgone=document.querySelectorAll('#img-test');
window.addEventListener('scroll',()=>{
    imgone.forEach(item => {
        if(window.scrollY>50 && window.innerWidth<768){
            item.style.transform='translatex(0)'
        } 
    });
})
let imgtwo=document.querySelectorAll('#img-test-one');
window.addEventListener('scroll',()=>{
    imgtwo.forEach(i => {
        if(window.scrollY>450 && window.innerWidth<768){
            i.style.transform='translatex(0)'
        } 
    });
})
let btnTop=document.querySelector('.topbtn');
btnTop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })

})