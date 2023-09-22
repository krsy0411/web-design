const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '6436fc99c1e85464dd9042272cb1c502';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        // api를 잘 가져왔으면 json형식으로 변환
        .then(response => response.json())
        // 객체 데이터 처리
        .then(json => {
            // 404에러인 경우
            if (json.cod === '404') {
                container.style.height = '400px';
                // 설명과 이미지 박스들은 디스플레이 상에서 제거
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                // 에러 박스는 블락처리를 통해 나오게끔
                error404.style.display = 'block';
                // 페이드인 클래스명을 통해 서서히 나오도록
                error404.classList.add('fadeIn');
                return;
            }
            // 404에러가 아닌경우
            // 에러 박스는 디스플레이상에서 사라지도록
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.png';
                    break;

                case 'Rain':
                    image.src = 'img/rain.png';
                    break;

                case 'Snow':
                    image.src = 'img/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'img/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'img/mist.png';
                    break;

                default:
                    image.src = '';
            }
            // 데이터가 넘어온 경우엔 글씨 동적으로 추가
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            // 이게 뭐지
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            // 페이드인 클래스명 추가 
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            // 컨테이너의 초기값은 105
            container.style.height = '590px';


        });


});