"use client";
import React from "react";
import PageCard from "../../components/PageCard";
import TitleCard from "../../components/TitleCard";

const page = () => {
  const PageTitle = "Dashboard page";
  return (
    <PageCard>
      <TitleCard {...{ PageTitle }} />
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/18/02/59/ai-generated-8071119_1280.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </PageCard>
  );
};

export default page;
