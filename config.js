const proxy = "http://ec2-13-58-252-7.us-east-2.compute.amazonaws.com:8080/";

export default {
    urls: {
        citySearch: proxy + "https://www.metaweather.com/api/location/search/",
        weather: proxy + `https://www.metaweather.com/api/location/`
    }
}
