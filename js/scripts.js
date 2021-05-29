
// // pattern="09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}"

 window.addEventListener("load",function(){  
    document.getElementById("myinput").value ="";
  })

document.getElementById("myinput").focus()
document.getElementById("frm").addEventListener("click",function(event) {
    let number = document.getElementById("myinput").value;
    if(number == "" | number == null){
        event.preventDefault();
    }
    function ValidateUSPhoneNumber(number) {
        var regExp = /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/;
        var phone = number.match(regExp);
        if (phone) {
            document.getElementById("myinput").classList.remove("inputbg")
            document.getElementById("myinput").classList.add("inputsuccessbg");
        
        }else{
            document.getElementById("myinput").classList.remove("inputsuccessbg");
            document.getElementById("myinput").classList.add("inputbg");
            event.preventDefault();
    }
      }
      ValidateUSPhoneNumber(number);
    });

  