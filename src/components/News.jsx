import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center text-5xl">News Page</h1>
        <div class="grid grid-flow-col  m-5">
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
        </div>

        <div class="grid grid-flow-col  m-5">
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
          <div>
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
