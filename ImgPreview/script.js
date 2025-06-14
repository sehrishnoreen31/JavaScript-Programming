document.addEventListener('DOMContentLoaded', function(){
    const imgInput = document.getElementById('img-input');
    const imgPreview = document.getElementById('preview');

    imgInput.addEventListener('change', function(event){
        const file = event.target.files[0];
        if (file){
            imgPreview.src = URL.createObjectURL(file);
            imgPreview.classList.remove('hidden');
            
            // free space
            imgPreview.onload = function(){
                URL.revokeObjectURL(imgPreview.src)
            }
        }
    })
})