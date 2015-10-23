$(document).on("ready", function () {
    
    $("#btn_contact.button_primary").click(function () {
        if(IsValidForm())
        {
            SendEmail();
            EmptyFields();
            $("#info").toggleClass("be-visible");
        }
        else
        {
            $(".imf_validate_form").show();
        }
    });
    $(".imf_input--inline").change(function () {
        if ($(this).is(':checked')) {
            $(".imf_validate_form").hide();
        }
    });
});

function IsValidForm() {
    if ($("#legal").is(":checked")) {
        return true;
    }
    else {
        return false;
    }
}

function SendEmail() {
    $.ajax({
        type: "POST",
        url: "ContactUs.aspx/SendEmail",
        data: "{'name' : '" + $("#name").val() + "', 'phone' : '" + $("#phone").val() + "', 'mail' : '" + $("#mail").val() + "', 'comments' : '" + $("#comments").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            
        },
        error: function (a, b, c) {
            
        }
    });
}

function EmptyFields() {
    $("#name").val('');
    $("#phone").val('');
    $("#mail").val('');
    $("#comments").val('');
    $(".imf_input--inline").removeAttr('checked');
    $(".imf_validate_form").hide();
}