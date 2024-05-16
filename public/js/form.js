
console.log('JavaScript is connected');
document.getElementById("userform").addEventListener("submit",function(event){
    event.preventDefault();
    // Fetch all input values
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;
    const address = document.getElementById("inputAddress").value;
    const address2 = document.getElementById("inputAddress2").value;
    const city = document.getElementById("inputCity").value;
    const state = document.getElementById("inputState").value;
    const zip = document.getElementById("inputZip").value;

    // Validation
    if (email === "" || password === "" || address === "" || address2 === "" || city === "" || state === "" || zip === "") {
        alert("Please fill in all required fields.");
        return;
    }
  
    // Example of email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
  
  
      
  
      document.getElementByid("userform").reset();
      
  
});


   
    // Now you can submit the form
    

