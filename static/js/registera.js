$(function () {
    // 邮箱验证
    $('#email input').blur(function () {
        if ($(this).val() == '') return

        var reg =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (reg.test( $(this).val() )){ // 符合要求
            // 发起ajax请求　　>>> 　邮箱是否可用　？？？
            // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            $.get('/mgj/checkemail/', {'email': $(this).val()}, function (response) {
                $('#email .text').html(response.msg)
                if (response.status){   // 可用
                    $('#email').removeClass('has-error').addClass('has-success')
                    $('#email span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                    $('#email .text').removeClass('red').addClass('green')
                } else {    // 不可用
                    $('#email').removeClass('has-success').addClass('has-error')
                    $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    $('#email .text').removeClass('green').addClass('red')
                }
            })

        } else {    // 不符合要求
            $('#email').removeClass('has-success').addClass('has-error')
            $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })
    
    // 密码验证
    $('#password input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z\d_]{6,12}$/
        if (reg.test($(this).val())){   // 符合
            $('#password p').html('格式：长度为6~12，且只能为数字、字母、下划线').removeClass('red')
            $('#password span').show()
        } else {   // 不符合
            $('#password p').html('数字、字母、下划线').addClass('red')
            $('#password span').hide()
        }
    })

    $('#password-d input').blur(function () {
        if ($(this).val() == '') return
        var f_val = $('#password input').val()
        var d_val = $(this).val()

        if ( f_val== d_val ){   // 符合
            $('#password-d p').html('格式：两次密码输入要保持一致!').removeClass('red')
            $('#password-d span').show()
        } else {   // 不符合
            $('#password-d p').html('两次密码输入不一致').addClass('red')
            $('#password-d span').hide()
        }
    })

    $('#name input').blur(function () {
        if ($(this).val() == '') return


        if ($(this).val().length >=3 && $(this).val().length <=12){ // 符合要求
            $('#name').removeClass('has-error').addClass('has-success')
            $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合要求
            $('#name').removeClass('has-success').addClass('has-error')
            $('#name span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 为了校验数据格式是否正确，所以点击注册时，触发点击事件
    // 在点击事件中，进行数据校验
    // 校验没问题，即发起ajax请求【注册】
    $('#subButton').click(function () {
        var isRegister = true   // 默认可以注册

        $('input').each(function () {
            if ($(this).val() == '') {
                isRegister = false
            }
        })
        console.log(isRegister)

        if (isRegister){
            $('#register-view').submit()
        }
    })
})