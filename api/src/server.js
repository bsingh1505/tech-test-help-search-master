const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const PER_PAGE_LIMIT = 10;
const DEFAULT_PAGE_INDEX = 0;

app.get("/search", async (req, res) => {
  try {
    const { status, data } = await axios.get("https://help-search-api-prod.herokuapp.com/search", {
      params: req.query,
    });

    const pageNo = req.query.page || DEFAULT_PAGE_INDEX;
    const itemsPerPage = req.query.limit || PER_PAGE_LIMIT;

    const filteredData = data.results.slice(pageNo * itemsPerPage, (+pageNo + 1) * itemsPerPage);
    res.status(status);
    res.send({
      results: filteredData,
      total_count: data.results.length,
    });
  } catch (err) {
    if (err.isAxiosError) {
      res.status(err.response.status);
      res.send(err.response.data);
    } else {
      throw err;
    }
  }
});

exports.startServer = () => {
  const port = process.env.PORT || "3001";
  app.listen(port, () => console.log("Listening on :3001"));
};
