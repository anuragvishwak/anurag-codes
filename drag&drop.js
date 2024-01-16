const card = document.querySelector('.card');
const dropzones = document.getElementsByClassName('dropzone');

card.addEventListener('dragstart', ()=>{
    //drag event has been started
    console.log('started')
})
card.addEventListener('dragend', (e)=>{
    //drag event has been started
    console.log('ended')
    e.target.className ='card';

})  

for (dropzone of dropzones){
  dropzone.addEventListener('dragover',(e)=> {
    e.preventDefault();
    console.log('dragover has been triggered')
  })


dropzone.addEventListener('dragenter',()=> {
    console.log('dragenter has been triggered')
})

dropzone.addEventListener('dragleave',()=> {
    console.log('dragleave has been triggered')
})

dropzone.addEventListener('drop',(e)=> {
    
    e.target.append(card);
})
};