
  let  date= document.getElementById("date")
  const month=document.getElementById("month")
  const year=document.getElementById("year")
  const form=document.getElementById("form")

  form.addEventListener("submit",(e) => {
    e.preventDefault()
       
    if(date.value === "") {
        alert("DATE IS REQUIRED")
    }
    if (date.value <0 || date.value>31) {
        alert("INVALID DATE")
    }
    
   
     
  })
  
      










