const btn = document.querySelector("#submit-button")

btn.addEventListener("click",
    (e)=>{
        e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);

})