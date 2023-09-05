var fields = document.querySelectorAll("#form-user-create [name]")
fields.forEach(function (field, index) {

    if (field.name == "gender") {

        if (field.checked) {console.log("sim", field)}


    } else {
        console.log("não")
    }

    // console.log(field.id, field.name, field.value, index)

})

var data = {

    name: "hcode",
    email: "hcode@hcode.com.br",
    year: 2023

}

console.log(typeof data.name)