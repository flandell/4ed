const button = document.querySelectorAll (`button`);

button.forEach (element => {

        
        element.addEventListener ('click' , function(e) {

            button.forEach(el => {
                el.classList.remove('active');
             })

            const color = e.target.getAttribute('data-color');

            e.target.classList.add('active');
            
            const image = document.querySelector('.car-image');

            image.setAttribute('src' , `car-${color}.jpg`);

        })
    
});