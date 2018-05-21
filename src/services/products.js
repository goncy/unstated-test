import request from "../utils/request";

const URL = "https://api.myjson.com/bins/wyjyh";

export default {
  fetch: function() {
    return request(URL);
  },
};
