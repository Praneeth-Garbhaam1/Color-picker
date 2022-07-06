window.addEventListener('load', () => {
    const items = document.querySelectorAll('.color-item');
    items.forEach(item => {
        item.addEventListener('click',function(){
            const idSelected = this.id;
            document.body.className = idSelected;
        })
    })
})
