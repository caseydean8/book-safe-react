import axios from "axios";
require('dotenv').config();

const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=`;

// google api key
const APIKEY = `${process.env.REACT_APP_API_KEY}`;

export default {
  search: function(query) {
    return axios.get(`${BASEURL }${query}&key=${APIKEY}`);
  }
};