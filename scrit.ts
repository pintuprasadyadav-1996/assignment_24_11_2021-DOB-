function dob(){
    let dob:any= document.getElementById("dob");
    let result = document.getElementById("result");
    let userinput = dob.value;
    let userdob = new Date(userinput);
    if(userinput==null || userinput==''){
        document.getElementById("mes").innerHTML = "**Choose a date please!";  
        return false; 
      } 
      else{
          let dobuseryear = userdob.getFullYear();
          let dobusermonth = userdob.getMonth();
          let dobuserdate = userdob.getDate();
          //--------------------------------------------------------------------//
          let system = new Date();
          let systemyear = system.getFullYear();
          let systemmonth = system.getMonth();
          let systemdate = system.getDate();
          let year = systemyear-dobuseryear-1;
          
          let month = systemmonth-dobusermonth;
  
          let date = systemdate-dobuserdate;
          result.innerHTML= "your age is = "+year.toString()+" years";

          
      }

    
    

   


}