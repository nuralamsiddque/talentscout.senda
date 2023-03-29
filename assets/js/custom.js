jQuery(document).ready(function() {
    jQuery('ul li a').click(function() {
        jQuery('li a').removeClass("active");
        jQuery(this).addClass("active");
    });
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function() {
    var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});
jQuery(document).ready(function() {
    // Run pswmeter with options
    const myPassMeter = passwordValidation({
        containerElement: '#pswmeter',
        passwordInput: '#psw-input',
        showMessage: true,
        messageContainer: '#pswmeter-message',
        messagesList: [
            'Write your password...',
            'Weak',
            'Fair',
            'Good',
            'Better'
        ],
        height: 6,
        borderRadius: 0,
        pswMinLength: 8,
        colorScore1: '#FF0000',
        colorScore2: '#FFFF00',
        colorScore3: '#FFA500',
        colorScore4: '#008000'
    });
});