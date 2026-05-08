// http://api.weatherapi.com/v1/current.json?key=eeef1829eecf4807ade202629261904&q=Mumbai&aqi=no

 let temperatureField = document.querySelector(".temp");
 let locationField = document.querySelector(".location-time p");
 let dateandTimeField = document.querySelector(".location-time span");
 let conditionField = document.querySelector(".condition p");
 let searchField = document.querySelector(".search-area");
 let searchButton = document.querySelector("button");
 let form = document.querySelector('form')

 form.addEventListener("submit",searchForLocation)

let target = 'Indore'

const fetchResults = async (targetLocation) => {
   let url = `https://api.weatherapi.com/v1/current.json?key=eeef1829eecf4807ade202629261904&q=${targetLocation}&aqi=no`

   const res = await fetch(url)
   const data = await res.json()

   console.log(data)

   let locationName = data.location.name
   let time = data.location.localtime

   let temp = data.current.temp_c
   let condition = data.current.condition.text

   updateDetails(temp,locationName,time,condition)
}

function updateDetails(temp,locationName,time,condition){

     let splitDate = time.split(' ')[0] 
     
     let splitTime = time.split(' ')[1]

     let currentDay = getDayName(new Date(splitDate).getDay())



    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = ` ${splitTime} ${splitDate} ${currentDay} `
    conditionField.innerText = condition

}

function searchForLocation(e){
  e.preventDefault()

  target = searchField.value

  fetchResults(target)
}

fetchResults(target)

function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
            break;
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return 'Wednesday'
            break;
        case 4:
            return 'Thursday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'                        
    }
}