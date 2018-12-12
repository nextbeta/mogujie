$(function () {
    // 邮箱验证
    var b_email = false
    $('#email input').blur(function () {
        if ($(this).val() == '') return

        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

        if (reg.test($(this).val())){
            $('#email').removeClass('has-error').addClass('has-success')
            $('#email span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            b_email = true
        } else {
            $('#email').removeClass('has-success').addClass('has-error')
            $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            b_email = false
        }

        checkSub()
    })

    // 密码验证
    var b_password = false
    $('#password input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z\d_]{6,12}$/
        if (reg.test($(this).val())){   // 符合
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            b_password = true
        } else {   // 不符合
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            b_password = false
        }

        checkSub()
    })


    function checkSub() {
        if (b_email && b_password){
            $('#subButton').removeAttr('disabled')
        } else {
            $('#subButton').attr('disabled', 'disabled')
        }
    }
})