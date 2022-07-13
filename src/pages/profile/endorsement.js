import React from "react";
import ProfileLayout from "../../components/ProfileLayout";

function Endorsement() {
  return (
    <div>
      <section>
        <h1 className="font-bold text-4xl">Endorsements</h1>
        <p>Endorse my skills below</p>
      </section>
    </div>
  );
}

Endorsement.PageLayout = ProfileLayout;

export default Endorsement;
