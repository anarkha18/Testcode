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
    $('#submitbtn').click(function () {

        fn_check();
        ln_check();
        em_check();
        phone_check();

        if ((fn_check == true) && (ln_check == true) && (em_check == true) && (phone_check == true)) {
            return true;
        }
        else {
            return false;
        }

    });
});