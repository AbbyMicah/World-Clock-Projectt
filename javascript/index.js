function updateTime(){
    let losAngelesElement=document.querySelector("#los-angeles");
    if(losAngelesElement){ 
    let losAngelesDateElement=losAngelesElement.querySelector(".date");
    let losAngelesTimeElement=losAngelesElement.querySelector(".time");
    let losAngelesTime=moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML=losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
    }
    let sydneyElement=document.querySelector("#sydney");
    if(sydneyElement){ 
    let sydneyDateElement=sydneyElement.querySelector(".date");
    let sydneyTimeElement=sydneyElement.querySelector(".time");
    let sydneyTime=moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML=sydneyTime.format("h:mm:ss [<small>]A[</small>]")
    }
    let tokyoElement=document.querySelector("#tokyo");
    if(tokyoElement){ 
    let tokyoDateElement=tokyoElement.querySelector(".date");
    let tokyoTimeElement=tokyoElement.querySelector(".time");
    let tokyoTime=moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]")
    }
    }
    function updateCity(event){
        let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
        let cityName=cityTimeZone.replace("_","").split("/")[1];
        let cityTime=moment().tz(cityTimeZone);
        console.log(cityTime.format("MMMM Do YYYY"));
        let citiesElement=document.querySelector("#cities");
        citiesElement.innerHTML =`
        <div> 
        <h2> ${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")} </div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}  <small>${cityTime.format("A")}</small>
        </div>
        <a href="/"> View All Cities </a>
        `;
        
    
    }
    updateTime();
    setInterval(updateTime, 1000);
    
    let citiesSelectElement=document.querySelector("#city");
    citiesSelectElement.addEventListener("change",updateCity);