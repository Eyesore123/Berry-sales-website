
document.addEventListener('scroll', function () {
    const imageContainer = document.querySelector('.image-container');
    const contentWrapper = document.querySelector('.content-wrapper');

    const scrollPosition = window.scrollY; 
    const wrapperOffsetTop = contentWrapper.offsetTop; 
    const windowHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    // Use ternary to check if the screen width is 1440p
    let fadePoint = screenWidth === 2560 ? wrapperOffsetTop - windowHeight + 670 : wrapperOffsetTop - windowHeight + 540;
    let fadeDistance = screenWidth === 2560 ? 400 : 200; // Adjust fade distance for 1440p

    if (scrollPosition > fadePoint) {
        let opacityValue = 1 - ((scrollPosition - fadePoint) / fadeDistance);
        opacityValue = Math.max(opacityValue, 0);
        imageContainer.style.opacity = opacityValue;
    } else {
        imageContainer.style.opacity = 1;
    }
});

document.addEventListener('scroll', function () {
    const upperSliders = document.querySelectorAll('.upper-slider');
    const contentSections = document.querySelectorAll('.lower-slider');ts
    const windowHeight = window.innerHeight;
    const screenWidth = window.innerWidth; 

    // Adjust based on screen width (1440p vs others)
    let upperSlideThreshold = screenWidth === 2560 ? windowHeight - 700 : windowHeight - 420; // For 1440p
    let contentSlideThreshold = screenWidth === 2560 ? windowHeight - 400 : windowHeight - 300;

    upperSliders.forEach(slider => {
        const sliderPosition = slider.getBoundingClientRect().top;
        if (sliderPosition < upperSlideThreshold) {
            slider.classList.add('visible');
        } else {
            slider.classList.remove('visible');
        }
    });


    contentSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < contentSlideThreshold) {  
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); 
        }
    });
});


window.addEventListener('scroll', function() {
    var pricingSection = document.querySelector('#pricing');
    var pricingPosition = pricingSection.getBoundingClientRect().top;
    var screenWidth = window.innerWidth; 


    let pricingThreshold = screenWidth === 2560 ? window.innerHeight + 100 : window.innerHeight + 230;

    if (pricingPosition < pricingThreshold) {
        pricingSection.classList.add('visible');
    } else {
        pricingSection.classList.remove('visible');
    }
});


window.addEventListener('scroll', function() {
    var form = document.querySelector('#contact-us form');
    var formPosition = form.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    const screenWidth = window.innerWidth;

    let formFadeThreshold = screenWidth === 2560 ? screenPosition - 500 : screenPosition - 400; //

    if (formPosition < formFadeThreshold) {
        form.classList.add('visible');
    }
});
