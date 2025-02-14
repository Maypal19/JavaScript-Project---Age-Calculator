const birthdateinput = document.getElementById("birthdate")


const today = new Date().toISOString().split("T")[0];
console.log(today);


const agebtn = document.querySelector("#Calculate-btn")
agebtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(birthdateinput.value);

    const birthdate = new Date(birthdateinput.value);
    const errorDiv = document.querySelector("#error");
    const resultDiv = document.querySelector("#result");
    errorDiv.textContent = "";
    resultDiv.textContent = "";

    if(!birthdateinput.value || birthdate>new Date()){
        errorDiv.textContent = "Please select a Valid birthdate(not in the future)";
    return;
    }
    const today = new Date();
    console.log(today) ;
    let years = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() -birthdate.getDate();
    console.log(years,days,month);

    if(days< 0){
        month --;
        days +=new Date(today.getFullYear(),today.getMonth(),0,today.getDate());

    }
    if(month< 0){
        years--;
    month += 12
    }

    resultDiv.textContent = `You are ${years},${month} and ${days}days old `;
})