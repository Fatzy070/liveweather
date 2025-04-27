function getweather() {
    const city = document.getElementById('cityinput').value || 'London' 

    let apiKey = '84b42179ba9ec03bf33f7624837eb3a8';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTPS error! status: ${res.status} `);  
        }
       return res.json()
    })
    .then(data => {
        console.log('parsed data:',data);
        const weatherdiv = document.getElementById('WeatherResult')

        if (data.cod === 200) {
            weatherdiv.innerHTML = `
                <h2>Weather in ${data.name} , ${data.sys.country}
                <h2>Time Zone in ${data.name} : ${data.timezone}
                <p>🌡️ Temperature: ${data.main.temp}</p>
                <p>🌤️condition:${data.weather[0].description} </p>
                <p>🌬️ Wind: ${data.wind.speed} </p>
            `
        } else {
            weatherdiv.innerHTML = `<p>⚠️ ${data.message}</p>`
        }
        

        
    }).catch(err => console.log(err , '401 not found'))
} 
window.onload = function () {
    getweather()
}

