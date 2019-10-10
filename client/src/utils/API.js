import axios from "axios";

// change to google books api
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// google api key
const APIKEY = process.env.REACT_APP_API_KEY
// const APIKEY = "&key=AIzaSyD1-X3EhThX4KtzP3EnM228pef_VDOr-gU"

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
