import axios from "axios";
require('dotenv').config();

// change to google books api
const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;
// google api key
const APIKEY = `&key=${process.env.REACT_APP_API_KEY}`

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
