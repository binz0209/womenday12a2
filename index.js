var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

var Ausername = [
    'Anh_02', //0
    'Chan_03', //1
    'Giang_08', //2
    'Huong_10', //3
    'Linh_11', //4
    'Linh_12', //5
    'Linh_13', //6
    'Loan_15', //7
    'Loan_16', //8
    'Loi_17', //9
    'My_20', //10
    'Minh_18', //11
    'Nguyen_21', //12
    'Nguyen_22', //13
    'Phuong_23', //14
    'Quynh_24', //15
    'Thao_26', //16
    'Thuy_27', //17
    'Thu_28', //18
    'Thu_29', //19
    'Thu_30', //20
    'Thu_31', //21
    'Thuong_32', //22
    'Tien_33', //23
    'Tuyen_35', //24
    'Vy_38', //25
    'Vy_39', //26
    'CoTuyen_00', //27
    'Tduong_0', //28
]

var Apassword = [
    '1001', //0
    '0507', //1
    '1810', //2
    '1202', //3
    '0303', //4
    '0702', //5
    '1008', //6
    '0402', //7
    '3105', //8
    '2210', //9
    '2308', //10
    '0101', //11
    '0110', //12
    '2910', //13
    '2202', //14
    '0111', //15
    '1504', //16
    '0404', //17
    '2209', //18
    '3012', //19
    '1511', //20
    '0801', //21
    '1104', //22
    '1412', //23
    '1902', //24
    '0605', //25
    '1412', //26
    '2212', //27
    '2512'

]

function onFormSubmit(e) {
    var username = inputUsername.value;
    var password = inputPassword.value;

    for (var i = 0; i <= 28; i++) {
        if (username == Ausername[i] && password == Apassword[i]) {
            window.open('./INSIDE/' + i + '/index.html');
            break
        } else if (i == 28) {
            alert("Nhập sai tài khoản hoặc mật khẩu");
        }
    }
}