$(document).ready(function () {

    $('#fn').keyup(function () {
        fn_check();
    });
    function fn_check() {

        var fn_val = $('#fn').val();
        if (fn_val.trim() == "") {
            $('#fninvalid').show();
            $('#fninvalid').html('Name Cannot be Empty');
            $('#fninvalid').focus();
            $('#fninvalid').css("color", "red");
            fn_error = false;
            return false;
        } else {
            $('#fninvalid').hide();
        }

        if (fn_val.length < 3) {
            $('#fninvalid').show();
            $('#fninvalid').html('Name is too Short');
            $('#fninvalid').focus();
            $('#fninvalid').css("color", "red");
            fn_error = false;
            return false;
        } else {
            $('#fninvalid').hide();
        }
    }
    $('#ln').keyup(function () {
        ln_check();
    });
    function ln_check() {

        var ln_val = $('#ln').val();
        if (ln_val.trim() == "") {
            $('#lninvalid').show();
            $('#lninvalid').html('Name Cannot be Empty');
            $('#lninvalid').focus();
            $('#lninvalid').css("color", "red");
            ln_error = false;
            return false;
        } else {
            $('#lninvalid').hide();
        }
        if (ln_val.length < 3) {
            $('#lninvalid').show();
            $('#lninvalid').focus();
            $('#lninvalid').html('Name is too Short');
            $('#lninvalid').css("color", "red");
            ln_error = false;
            return false;
        } else {
            $('#lninvalid').hide();
        } l

    }
    $('#em').keyup(function () {
        em_check();
    });
    function em_check() {
        var em_val = $('#em').val();
        var pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

        if (em_val.trim() == "") {
            $('#eminvalid').show();
            $('#eminvalid').html('Email Cannot be Empty');
            $('#eminvalid').focus();
            $('#eminvalid').css("color", "red");
            em_error = false;
            return false;
        } else {
            $('#eminvalid').hide();
        }

        if (!pattern.test(em_val)) {
            // alert("Sdfdf");
            $('#eminvalid').show();
            $('#eminvalid').html('Your email must be a valid email');
            $('#eminvalid').focus();
            $('#eminvalid').css("color", "red");
            em_error = false;
            return false;
        } else {
            $('#eminvalid').hide();
        }
    }
    $('#phone').keyup(function () {
        phone_check();
    });
    function phone_check() {

        var ph_val = $('#phone').val();
        var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/
        if (ph_val.trim() == "") {
            $('#pher').show();
            $('#pher').html('This Field Cannot be Empty');
            $('#pher').focus();
            $('#pher').css("color", "red");
            ph_error = false;
            return false;
        } else {
            $('#pher').hide();
        }

        if (!pattern.test(ph_val)) {
            $('#pher').show();
            $('#pher').html('Please Enter a Valid Phone Number');
            $('#pher').focus();
            $('#pher').css("color", "red");
            ph_error = false;
            return false;
        } else {
            $('#pher').hide();
        }
    }

    $('#pas').keyup(function () {
        pas_check();
    });
    function pas_check() {
        var pas_val = $('#pas').val();
        if (pas_val.trim() == "") {
            $('#pasinvalid').show();
            $('#pasinvalid').html('Password Cannot be Empty');
            $('#pasinvalid').focus();
            $('#pasinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#pasinvalid').hide();
        }

        if ((pas_val.length < 3) || (pas_val.length > 20)) {
            $('#pasinvalid').show();
            $('#pasinvalid').focus();
            $('#pasinvalid').html('Password Must be Between 3-20 Characters');
            $('#pasinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#pasinvalid').hide();
        }

    }
    $('#un').keyup(function () {
        un_check();
    });
    function un_check() {
        var un_val = $('#un').val();

        if (un_val.trim() == "") {
            $('#uninvalid').show();
            $('#uninvalid').html('This Fiesld Cannot be Empty');
            $('#uninvalid').focus();
            $('#uninvalid').css("color", "red");
            un_error = false;
            return false;
        } else {
            $('#uninvalid').hide();
        }
        if ((un_val.length < 3) || (un_val.length > 15)) {
            $('#uninvalid').show();
            $('#uninvalid').focus();
            $('#uninvalid').html('Username Must be Between 3-20 Characters');
            $('#uninvalid').css("color", "red");
            un_error = false;
            return false;
        } else {
            $('#uninvalid').hide();
        }
    }

    $('#submitbtn').click(function () {
        fn_error = true;
        ln_error = true;
        pas_error = true;
        em_error = true;
        un_error = true;
        ph_error = true;

        fn_check();
        ln_check();
        pas_check();
        em_check();
        un_check();
        phone_check();

        if ((fn_check == true) && (ln_check == true) && (pas_check == true) && (em_check == true) && (un_check == true) && (phone_check == true)) {
            return true;
        }
        else {
            return false;
        }

    });
});