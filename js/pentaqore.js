$(document).ready(function () {

    // hiding loader after 5 sec delay
    $('.loading').show(0).delay(4000).hide(function () {
        $('#delay-if-reload-logo').removeClass('animate__delay-4s');
        $('#delay-if-reload-title').removeClass('animate__delay-4s');
        $('#delay-if-reload-slogan').removeClass('animate__delay-4s');
    });

    // scroll carousel on keydown
    $(document).keydown(function (e) {

        if (e.keyCode === 37 || e.keyCode === 38) {
            $('.carousel-control-prev').click();
            return false;
        }
        if (e.keyCode === 39 || e.keyCode === 40) {
            $('.carousel-control-next').click();
            return false;
        }



    });
    $("input").on("click", function () {
        $(document).off('keydown');
    });


    $('input').focusout(function () {
        $(document).keydown(function (e) {

            if (e.keyCode === 37 || e.keyCode === 38) {
                $('.carousel-control-prev').click();
                return false;
            }
            if (e.keyCode === 39 || e.keyCode === 40) {
                $('.carousel-control-next').click();
                return false;
            }

        });
    });



    // $("input").focus(function() {
    //     $(document).off('keydown');
    // });


    $("textarea").focus(function () {

        $(document).off('keydown');
    });

    $('textarea').focusout(function () {
        $(document).keydown(function (e) {

            if (e.keyCode === 37 || e.keyCode === 38) {
                $('.carousel-control-prev').click();
                return false;
            }
            if (e.keyCode === 39 || e.keyCode === 40) {
                $('.carousel-control-next').click();
                return false;
            }

        });
    });

});

function validateForm() {
    console.log("inside method");
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var mobError = document.getElementById('mobError');
    var subError = document.getElementById('subError');
    var msgError = document.getElementById('msgError');
    if (document.getElementById('name').value == "") {
        nameError.innerText = 'Name Field Cannot Be Empty'
        nameError.style.visibility = 'visible';
        nameError.style.fontSize = '12px';
        nameError.style.backgroundColor = '#b5000054';
        setTimeout(function () {
            document.getElementById("nameError").style.visibility = 'hidden';
        }, 3000);
        return false;

    } else {
        nameError.innerText = '';
    }




    if (document.getElementById('email').value == "") {
        emailError.style.visibility = 'visible';
        emailError.innerHTML = 'Email Field Cannot Be Empty';
        emailError.style.fontSize = '12px';
        emailError.style.backgroundColor = '#b5000054';
        setTimeout(function () {
            document.getElementById("emailError").style.visibility = 'hidden';
        }, 3000);
        return false;
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value) == false) {
            emailError.style.visibility = 'visible';
            emailError.innerHTML = 'Invalid Email Id';
            emailError.style.fontSize = '12px';
            emailError.style.backgroundColor = '#b5000054';
            setTimeout(function () {
                document.getElementById("emailError").style.visibility = 'hidden';
            }, 3000);

            return false;
        }

    }


    if (document.getElementById('mobile').value == "") {
        mobError.style.visibility = 'visible';
        mobError.innerHTML = 'Mobile Number Cannot Be Empty';
        mobError.style.fontSize = '12px';
        mobError.style.backgroundColor = '#b5000054';
        setTimeout(function () {
            document.getElementById("mobError").style.visibility = 'hidden';
        }, 3000);
        return false;
    } else {
        if (/^\d{10}$/.test(document.getElementById('mobile').value) == false) {
            mobError.style.visibility = 'visible';
            mobError.innerHTML = 'Invalid Mobile Number';
            mobError.style.fontSize = '12px';
            mobError.style.backgroundColor = '#b5000054';
            setTimeout(function () {
                document.getElementById("mobError").style.visibility = 'hidden';
            }, 3000);
            return false;
        }

    }


    if (document.getElementById('subject').value == "") {
        subError.innerText = 'Subject Field Cannot Be Empty'
        subError.style.visibility = 'visible';
        subError.style.fontSize = '12px';
        subError.style.backgroundColor = '#b5000054';
        setTimeout(function () {
            document.getElementById("subError").style.visibility = 'hidden';
        }, 3000);
        return false;
    } else {
        subError.innerText = '';
    }
    if (document.getElementById('message').value == "") {
        msgError.innerText = 'Message Field Cannot Be Empty'
        msgError.style.visibility = 'visible';
        msgError.style.fontSize = '12px';
        msgError.style.backgroundColor = '#b5000054';
        setTimeout(function () {
            document.getElementById("msgError").style.visibility = 'hidden';
        }, 3000);
        return false;
    } else {
        msgError.innerText = '';
    }
}

//to open and close sidenav on smaller devices
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
