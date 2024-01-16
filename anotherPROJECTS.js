const fromDrop = document.querySelector('.droppingMaterial');
const topDrop = document.getElementsByClassName('droppingBucket');

for(droppingBucket of topDrop){
    droppingBucket.addEventListener('dragover', (e)=>{
      e.preventDefault();
      
    })

    droppingBucket.addEventListener('drop', (e)=>{
        e.target.append(fromDrop);
    })
}