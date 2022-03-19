
  let  date= document.getElementById("date")
  let month=document.getElementById("month")
  let year=document.getElementById("year")
  let form=document.getElementById("form")

  form.addEventListener("submit",(e) => {
    e.preventDefault()
       
    if(date.value === "") {
        alert("DATE IS REQUIRED")
    }
    if (date.value <0 || date.value>31) {
        alert("INVALID DATE")
    }

    if (month.value <0|| month.value>12) {
        alert("INVALID MONTH")
    }
   
     
  })
  
      










