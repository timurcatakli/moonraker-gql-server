require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");
const sampleResponse = require("./sample-response");
const deepGet = require("../utils");

class BestsellersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.rainforestapi.com/request";
  }

  compare = (a, b, sortBy, sortOrder) => {
    /*
    INT fields => position, rank, ratings_total, rating
    */
    const sort = sortOrder === "asc" ? -1 : 1;
    const fieldA = deepGet(a, sortBy.split("."));
    const fieldB = deepGet(b, sortBy.split("."));

    if (fieldA < fieldB) {
      return sort;
    }
    if (fieldA > fieldB) {
      return -sort;
    }
    // a must be equal to b
    return 0;
  };

  async getBestsellersByCategory(params) {
    const { url, sortBy, sortOrder } = params;
    const restParams = {
      api_key: process.env.RAINFOREST_API_KEY,
      type: "bestsellers",
      url
    };
    // make the http GET request to Rainforest API
    const apiResponse = await this.get(
      "https://api.rainforestapi.com/request",
      restParams,
      { cacheOptions: { ttl: 60000 } }
    );
    const { bestsellers, bestsellers_info } = apiResponse;

    const filteredBestsellers = bestsellers.sort((a, b) =>
      this.compare(a, b, sortBy, sortOrder)
    );

    const {
      current_category,
      parent_category,
      child_categories
    } = bestsellers_info;

    return {
      bestsellers: filteredBestsellers,
      current_category,
      parent_category,
      child_categories
    };
  }
}

module.exports = BestsellersAPI;
