
const toggle = document.getElementById('dark');
const body = document.querySelector('firstpg');
toggle.addEventListener('click',function(){
  this.classList.toogle('firstpgtwo');
  if(this.classList.toogle('light')){
    body.classList.background='#E9D5A1';

  }else{
      body.classList.background='#494949';
  }
})
