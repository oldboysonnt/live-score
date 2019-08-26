const messages = {
    errorsRegister:{
        firstName:{
            notEmpty:"Tên không được để trống."
        },
        lastName:{
            notEmpty:"Họ không được để trống."
        },
        email:{
            isEmail: "Email không hợp lệ."
        },
        password:{
            minLength:" Mật khẩu cần dài ít nhất 8 kí tự."
        },
        retypedPassword:{
            isMatch: "Mật khẩu không khớp",
            notEmpty: "Mật khẩu nhập lại không được để trống"
        }
    },
    errorsLogin:{
        email:{
            notEmpty:"Bạn chưa nhập địa chỉ email.",
        },
        password:{
            notEmpty:"Bạn chưa nhập mật khẩu."
        }
    }
};

export default messages;