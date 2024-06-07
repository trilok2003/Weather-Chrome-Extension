const api_key = "e66ba49f617d763a52f805cc6672fae8"
const base_url = `http://api.openweathermap.org/data/2.5/weather?`
const kelvin = 273;
const weatherIcon = document.querySelector(".weatherIcon");
const Btn = document.querySelector("#serachBtn");

const posterChanger =(poster)=>{
    console.log(poster);
    if(poster == "Clouds"){
        weatherIcon.src = ".//images/clouds.png";
    }
    else if(poster == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }
    else if(poster == "Rain"){
        weatherIcon.src = "./images/rain.png"
    }
    else if(poster == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }
    else if(poster == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }

    document.querySelector(".tempBox").style.display = "block";
    document.querySelector(".H-w-Box").style.display = "flex";
}
const getWeather = async ()=>{
    const input = document.querySelector("#searchBox").value;
    // console.log(input);
    const ori_url = base_url + `&appid=${api_key}` + `&q=${input}`;
    // console.log(ori_url);
    const response = await fetch(ori_url);
    //console.log(response);
    const data = await response.json();
    console.log(data);
    const {name,main,wind,weather} = data;
    console.log(wind.speed);

    document.querySelector(".temprature").innerHTML = `<h1>${Math.round(main.temp - kelvin)}&deg;C</h1>
                                                       <h2 >${name}</h2>`

    document.querySelector(".humidity").innerHTML = `<h3>${main.humidity}%</h3>
                                                     <h4>Humidity</h4>`;
    document.querySelector(".wind").innerHTML = `<h3>${wind.speed}km/h</h3>
                                                 <h4>Wind Speed</h4>`;
     posterChanger(weather[0].main);
}

Btn.addEventListener("click",getWeather);
