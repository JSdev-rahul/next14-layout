"use client";
import React from "react";
import withAuth from "../../withPrivateRoute";
import TitleCard from "../../components/TitleCard";
import PageCard from "../../components/PageCard";
const AboutePage = () => {
  const PageTitle = "Aboute page";
  return (
    <PageCard>
      <TitleCard {...{ PageTitle }} />
      
    </PageCard>
  );
};

export default withAuth(AboutePage);
