<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WeatherApp</title>
    <link rel="shortcut icon" href="weather.ico" type "image/x-icon">
    <style>
      .card {
        border: solid black 1px;
      }
    </style>
  </head>
  <body>
    <h1>Weather forcast for your area</h1>
    <hr />
    <div>
      <input
        id="city"
        class="city"
        name="city"
        placeholder="City"
        type="text"
      />

      <button>Submit</button>
    </div>
    <script src="ajax.js"></script>
    <script>
      // PROXY server defined

      let proxy =
        "http://ec2-13-58-252-7.us-east-2.compute.amazonaws.com:8080/";

      // button event listener

      let button = document.querySelector("button");
      button.addEventListener("click", () => {
        let city = document.querySelector("#city").value;
        //proxy request for
        ajax(
          proxy +
            `https://www.metaweather.com/api/location/search/?query=${city}`,
          (r) => {
            let loc = JSON.parse(r);
            console.log(loc);
            ajax(
              proxy +
                `https://www.metaweather.com/api/location/${loc[0].woeid}`,
              (res) => {
                let r = JSON.parse(res);
                console.log(r);

                let weatherDictionary = [
                Snow : "sn",
                Sleet : "sl",
                Hail : "h",
                Thunderstorm : "t",
                Heavy Rain : "hr",
                Light Rain : "lr",
                Showers : "s",
                Heavy Cloud : "hc",
                Light Cloud : "lc",
                Clear : "c"
                ];

                const makeCard = (weat) => {
                  let card = document.createElement("div");
                  let weatherCity = document.createElement("h2");
                  weatherCity.innerText = `${r.title}`;
                  let weather = document.createElement("h3");
                  weather.innerText = `${weat.weather_state_name}`;
                  let img = document.createElement("img");
                  let wimg = 
                  // if (weat.weather_state_name === "Clear") {
                  //   img.src =
                  //     `https://www.metaweather.com/static/img/weather/ico/${wimg}.ico`;
                  // }

                  //  if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // if else weat.weather_state_name === "Snow" {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/sn.ico";
                  // };

                  // else {
                  //     img.src =
                  //     "https://www.metaweather.com/static/img/weather/ico/c.ico";
                  // };

                  let remove = document.createElement("button");
                  remove.innerText = "X";

                  //insert info into card
                  card.append(remove, weatherCity, weather, img);

                  //event listener to remove cards onclick
                  remove.addEventListener("click", (evt) => {
                    console.dir(evt.target);
                    evt.target.parentNode.parentNode.removeChild(
                      evt.target.parentNode
                    );
                  });
                  return card;
                };
                //calls function for creation of card with forecast
                let card = makeCard(
                  r.consolidated_weather[0],
                  r.title[0]
                  //weatherImage
                );
                document.body.append(card);
              }
            );
          }
        );
      });
    </script>
  </body>
</html>