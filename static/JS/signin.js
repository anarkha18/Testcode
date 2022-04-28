$(document).ready(function () {
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
    $('#submitbtn').click(function () {

        pas_error = true;
        un_error = true;

        un_check();
        pas_check();

        if ((pas_check == true) && (un_check == true)) {
            $form.submit();
            return true;
        }
        else {
            return false;
        }
    });

});