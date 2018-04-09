## ajax登陆验证
    function postData(_this){
        $.post('/reg',{
            name:$('#name').val(),
            password:$('#password').val()
        },function(data){
            console.log(data);
            $('#content').html('data.msg')
            $('#msg-box').modal('show');
            if(data.status){
                window.location.href="/";
            }
        })
    }
    
    阻止表单提交 return false