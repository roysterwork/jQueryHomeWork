$("#ch4form").submit(function() {

    var namelen = $("input[name=fullname]").val().length
    var addresslen = $("input[name=streetaddr]").val().length;
    console.log(addresslen)

    if (namelen == 0 && addresslen == 0){
        $("#nameerrormsg").show()
        $("#addrerrormsg").show()

        return false;
      }
    if (namelen == 0){
        $("#nameerrormsg").show()

        return false;
    }

    if (addresslen == 0){
       $("#addrerrormsg").show()
        return false;
    }


    else {
        alert("input received")
        return true
    }


})
