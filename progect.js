$('.header .top .navLink').click(function(){
    $('.nav').slideToggle();
})

q = prompt('Введите ваше имя:')
alert(`Добро пожаловать, ${q}! Это магазин товаров "Diluvian"`)
console.log(`${q}`)

document.querySelector('#w').addEventListener('click', rgbColor);

            function rgbColor(){
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                let color = "rgb("+ r +"," + g +", " + b +")";
                document.body.style.backgroundColor = color}

