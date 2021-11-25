function dob() {
    var dob = document.getElementById("dob");
    var result = document.getElementById("result");
    var userinput = dob.value;
    var userdob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("mes").innerHTML = "**Choose a date please!";
        return false;
    }
    else {
        var dobuseryear = userdob.getFullYear();
        var dobusermonth = userdob.getMonth();
        var dobuserdate = userdob.getDate();
        //--------------------------------------------------------------------//
        var system = new Date();
        var systemyear = system.getFullYear();
        var systemmonth = system.getMonth();
        var systemdate = system.getDate();
        var year = systemyear - dobuseryear - 1;
        var month = systemmonth - dobusermonth;
        var date = systemdate - dobuserdate;
        result.innerHTML = "your age is = " + year.toString() + " years";
    }
}
