window.onload = ()=>{
    const boton = document.getElementById("boton");
    const modal = document.getElementById('fondo-modal')
    const modalP = document.getElementById('modal')

    boton.addEventListener('click',()=>{
        modal.classList.remove('ocultar')
        modalP.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-20px)'},
            { transform: 'translateY(0px)'},
            { transform: 'scale(1.01,1.01)'},
           
          ], {
            
            duration: 500,
            iterations: 1
          })
        
    })
    const formModal = document.getElementById('form-modal')
    formModal.addEventListener('submit',(event)=>{
        event.preventDefault();
        modal.classList.add('ocultar')
    })
    // modal.addEventListener('click',(event)=>{
    //     // modal.classList.add('ocultar')
    //     console.log(modalP)
    //     if(event.target === modalP){
    //         console.log('hola')
    //     }
    //     console.log(event.target)
    // })
    modal.addEventListener('click',(event)=>{
        if(event.target === modal){
            modal.classList.add('ocultar')
        }
      
    })
    
}