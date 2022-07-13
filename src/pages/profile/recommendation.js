import React from "react";
import ProfileLayout from "../../components/ProfileLayout";

function Recommendation() {
  return (
    <div>
      <section>
        <h1 className="font-bold text-4xl">Recommendations</h1>
        <p>Drop a recommendation below.</p>
      </section>
    </div>
  );
}

Recommendation.PageLayout = ProfileLayout;

export default Recommendation;
