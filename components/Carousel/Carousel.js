class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        
        this.leftButton = this.carousel.querySelector('.left-button')

        this.rightButton = this.carousel.querySelector('.right-button')
        this.images = this.carousel.querySelectorAll('img')
        this.images= Array.from(this.images)
        this.images.forEach(image => image.style.zIndex ="-1")
        this.images[0].style.zIndex = "1"
        this.carousel.classList.add('active')
        this.select = this.select.bind(this)
        
        
        this.leftButton.addEventListener('click', this.select)

        

    }
    select() {
        this.images.classList.remove('this.images')
       
    }
}

let carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/