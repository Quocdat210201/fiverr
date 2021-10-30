
        const signIn = document.querySelector('.js-signIn')
        const modalsignIn = document.querySelector('.js-modal__signIn')
        const modalContainer_signIn = document.querySelector('.js-modal-container-signIn')
        const closeSignin = document.querySelector('.js-close-SignIn')
        // Show Sign In
        signIn.addEventListener('click', function (){
            modalsignIn.classList.add('open')
        })
        modalsignIn.addEventListener('click', function (){
            modalsignIn.classList.remove('open')
        })
        modalContainer_signIn.addEventListener('click', function (event) {
            event.stopPropagation()
        })
        closeSignin.addEventListener('click',function(){
            modalsignIn.classList.remove('open')
        })
        

        const join = document.querySelector('.js-join')
        const modalJoin = document.querySelector('.js-modal__join')
        const modalContainer_join = document.querySelector('.js-modal-container-join')
        const menuClose = document.querySelector('.js-close')
        
        // show Join
        join.addEventListener('click', function (){
            modalJoin.classList.add('open')
        })
        modalJoin.addEventListener('click', function (){
            modalJoin.classList.remove('open')
        })
        modalContainer_join.addEventListener('click', function (event) {
            event.stopPropagation()
        })
        menuClose.addEventListener('click',function(){
            modalJoin.classList.remove('open')
        })
        

        const video = document.querySelector('.js-video')
        const modalVideo = document.querySelector('.js-modal__video')
        const modalVideo_body = document.querySelector('.js-modal__video-body')

        video.addEventListener('click',function(){
            modalVideo.classList.add('open')
        })
        modalVideo.addEventListener('click',function(){
            modalVideo.classList.remove('open')
        })
        modalVideo_body.addEventListener('click', function (event) {
            event.stopPropagation()
        })
        

        
        // video.addEventListener('click', displayVideo)
        

        // var videoBlock = document.querySelector('.video');
        // function displayVideo() {
        //     videoBlock.innerHTML = 
        //     `<div  class="modal__video">
        //         <div class="modal__video-body">
        //             <video class="modal__video-body-orca-video js-modal__video-body" autoplay controls poster preload="metadata"  crossorigin="anonymous" draggable="true">
        //                 <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4">
        //             </video>
        //         </div>
        //     </div>`;
        //}
        
