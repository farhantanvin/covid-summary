import http from "../http-common";

class CovidSummary {
    getCovidSummary() {
      return http.get("/summary");
    }
  }
  
  export default new CovidSummary();