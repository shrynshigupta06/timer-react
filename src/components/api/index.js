import axios from "axios";
let countryList = [];

export async function getCountryList() {
    try {
        const axiosConfig = {
            method: "GET",
            url: "http://worldtimeapi.org/api/timezone"
        }
        if (countryList.length === 0) {
            countryList = await axios(axiosConfig).then(resp => resp.data);
        }
        return countryList;
    } catch (error) {
        console.error("Error getting country list", error);
    }
}

export async function getCurrentTimeByCountry(country) {
    try {
        if (!country) return

        const axiosConfig = {
            method: "GET",
            url: `http://worldtimeapi.org/api/timezone/${country}`,
            headers: {
                "accept": "application/json",
            }
        }
        return await axios(axiosConfig).then(resp => resp.data);;
    } catch (error) {
        console.error("Error getting current time of country", error);
    }
}