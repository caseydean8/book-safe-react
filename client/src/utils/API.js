import axios from "axios";

// change to google books api
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
// google api key
const APIKEY = "AIzaSyCbkp-HZOLQ4v09j5dJDmt0_CoJ5FLq-sQ"

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
