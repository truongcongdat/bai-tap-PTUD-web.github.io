$(document).ready(function(e){
    function ham(){
        alert("hello");
        var a =parseInt(document.forms[frm1]["a"].value);
        var b =parseInt(document.forms[frm1]["b"].value);
        var tong = a+b;
        //$('#txt').html(""+tong);

        document.getElementById("txt").innerHTML = tong;
    }
});