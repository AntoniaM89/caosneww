const result = document.querySelector('.result');


const url= 'https://api.openweathermap.org/data/2.5/weather?q=santiago,chile&appid=49dba6fec41978853c684cb093f3b2b8'
fetch(url)    
    .then (data =>{
            return data.json(); 
        })
        .then (dataJSON => {
            showWeather(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
    
        function showWeather(data){
            const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;
        
            const degrees = kelvinToCentigrade(temp);
            const min = kelvinToCentigrade(temp_min);
            const max = kelvinToCentigrade(temp_max);
        
            const content = document.createElement('div');
            content.innerHTML = `

                <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
                <h2>${degrees}°C</h2>
                <p>Max: ${max}°C</p>
                <p>Min: ${min}°C</p>
            `;
            result.appendChild(content);
        console.log(name);
        console.log(temp);
        console.log(temp_max);
        console.log(temp_min);
        console.log(arr.icon); 
        }

function kelvinToCentigrade(temp){
    return parseInt (temp - 273.15);
}

