import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import "./index.css";
import Header from "./Header";
function NewsList() {
  const [articles, setArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);
  const [sportArticles, setSportArticles] = useState([]);
  const [scienceArticles, setScienceArticles] = useState([]);
  const [technologyArticles, setTechnologyArticles] = useState([]);
  const [entertainmentArticles, setEntertainmentArticles] = useState([]);
  const [healthArticles, setHealthArticles] = useState([]);

  const getArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setArticles(res.data.articles);
  };

  const getBusinessArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setBusinessArticles(res.data.articles);
  };

  const getSportArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setSportArticles(res.data.articles);
  };

  const getScienceArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setScienceArticles(res.data.articles);
  };

  const getTechnologyArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setTechnologyArticles(res.data.articles);
  };

  const getEntertainmentArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setEntertainmentArticles(res.data.articles);
  };

  const getHealthArticles = async () => {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=094588d01407435d86b989472d839a71"
    );
    console.log(res);
    setHealthArticles(res.data.articles);
  };
  useEffect(() => {
    getBusinessArticles();
    getSportArticles();
    getScienceArticles();
    getTechnologyArticles();
    getEntertainmentArticles();
    getHealthArticles();
    getArticles();
  }, []);
  return (
    <>
      <div className="container-fluid heading">
        <Header />
      </div>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="category col-2">
            <div className="row">
              <div className="col-12">
                <h5>News category</h5>
              </div>
            </div>
            <div
              className="nav flex-column nav-pills text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-general-tab"
                data-mdb-toggle="pill"
                href="#v-pills-general"
                role="tab"
                aria-controls="v-pills-general"
                aria-selected="true"
              >
                General News
              </a>
              <a
                className="nav-link"
                id="v-pills-business-tab"
                data-mdb-toggle="pill"
                href="#v-pills-business"
                role="tab"
                aria-controls="v-pills-business"
                aria-selected="false"
              >
                Business News
              </a>
              <a
                className="nav-link"
                id="v-pills-sports-tab"
                data-mdb-toggle="pill"
                href="#v-pills-sports"
                role="tab"
                aria-controls="v-pills-sports"
                aria-selected="false"
              >
                Sports News
              </a>
              <a
                className="nav-link"
                id="v-pills-science-tab"
                data-mdb-toggle="pill"
                href="#v-pills-science"
                role="tab"
                aria-controls="v-pills-science"
                aria-selected="false"
              >
                Science News
              </a>
              <a
                className="nav-link"
                id="v-pills-technology-tab"
                data-mdb-toggle="pill"
                href="#v-pills-technology"
                role="tab"
                aria-controls="v-pills-technology"
                aria-selected="false"
              >
                Technology News
              </a>
              <a
                className="nav-link"
                id="v-pills-entertainment-tab"
                data-mdb-toggle="pill"
                href="#v-pills-entertainment"
                role="tab"
                aria-controls="v-pills-entertainment"
                aria-selected="false"
              >
                Entertainment News
              </a>
              <a
                className="nav-link"
                id="v-pills-health-tab"
                data-mdb-toggle="pill"
                href="#v-pills-health"
                role="tab"
                aria-controls="v-pills-health"
                aria-selected="false"
              >
                Health News
              </a>
            </div>
          </div>
          <div className="content col-9 pt-3">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-general"
                role="tabpanel"
                aria-labelledby="v-pills-general-tab"
              >
                {articles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-business"
                role="tabpanel"
                aria-labelledby="v-pills-business-tab"
              >
                {businessArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-sports"
                role="tabpanel"
                aria-labelledby="v-pills-sports-tab"
              >
                {sportArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-science"
                role="tabpanel"
                aria-labelledby="v-pills-science-tab"
              >
                {scienceArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-technology"
                role="tabpanel"
                aria-labelledby="v-pills-technology-tab"
              >
                {technologyArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-entertainment"
                role="tabpanel"
                aria-labelledby="v-pills-entertainment-tab"
              >
                {entertainmentArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-health"
                role="tabpanel"
                aria-labelledby="v-pills-health-tab"
              >
                {healthArticles.map(
                  ({ title, description, url, urlToImage }, index) => (
                    <NewsItem
                      title={title}
                      description={description}
                      url={url}
                      urlToImage={urlToImage}
                      index={index}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsList;
