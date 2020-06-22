function p() {
    var pname = document.getElementById("username");
    var pword = document.getElementById("password");
    if(pname == "zmh" && pword == "1255") {
        window.alert("登陆成功！");
    }
    else {
        window.alert("登陆失败！" + pname + pword);
    }
}



var db = openDatabase('tsgz');    //打开数据库
    var pusername = document.getElementById("username");
    var ppassword;

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS logging(username unique, password)');
        tx.executeSql("SELECT ppassword = password FROM logging WHERE username = pusername");
    });