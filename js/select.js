window.onload = inite_show;

function inite_show() {
    document.getElementById("show_address").innerHTML = "长安校区";
    document.getElementById("show_device").innerHTML = "交换机设备";
    document.getElementById("show_data").innerHTML = "ping值";
    document.getElementById("show_suffix").innerHTML = "在一天中的变化";

    var st1 = document.getElementById("changan_device");
    var st2 = document.getElementById("changan_data");
    st1.onchange = function(){
        document.getElementById("show_address").innerHTML = "长安校区";
        document.getElementById("show_device").innerHTML = st1.options[st1.options.selectedIndex].text + "设备";
    }
    st2.onchange = function(){
        document.getElementById("show_address").innerHTML = "长安校区";
        document.getElementById("show_data").innerHTML = st2.options[st2.options.selectedIndex].text;
        document.getElementById("show_suffix").innerHTML = "在一天内的变化";
    }

    var st3 = document.getElementById("taoyuan_device");
    var st4 = document.getElementById("taoyuan_data");
    st3.onchange = function(){
        document.getElementById("show_address").innerHTML = "桃园校区";
        document.getElementById("show_device").innerHTML = st3.options[st3.options.selectedIndex].text + "设备";
    }
    st4.onchange = function(){
        document.getElementById("show_address").innerHTML = "桃园校区";
        document.getElementById("show_data").innerHTML = st4.options[st4.options.selectedIndex].text;
        document.getElementById("show_suffix").innerHTML = "在一天内的变化";
    }

    var st5 = document.getElementById("taibai_device");
    var st6 = document.getElementById("taibai_data");
    st5.onchange = function(){
        document.getElementById("show_address").innerHTML = "太白校区";
        document.getElementById("show_device").innerHTML = st5.options[st5.options.selectedIndex].text + "设备";
    }
    st6.onchange = function(){
        document.getElementById("show_address").innerHTML = "太白校区";
        document.getElementById("show_data").innerHTML = st6.options[st6.options.selectedIndex].text;
        document.getElementById("show_suffix").innerHTML = "在一天内的变化";
    }

}