import React from "react";
import DocSection from "./docSection";
import DocCard from "./docCard"; // Import your DocCard component
import docs from "../constants/docs";
import logo from "../component/imgs/logo.svg";

export default function Card() {
  const onGoToClick = (url) => {
    window.open(url, "_blank"); 
  };

  // Check if docs is not undefined or null before mapping over it
  if (!docs || !Array.isArray(docs)) {
    console.error("Invalid data:", docs);
    return <div>Error: Invalid data</div>; // Display an error message if data is not available or not in the expected format
  }

  return (
    <div>
      {docs.map((doc) => {
        console.log("doc:", doc);
        return (
          <DocSection key={doc.title} title={doc.title}>
            {/* Pass valid React elements (DocCard components) as children */}
            {doc.documentations &&
              Array.isArray(doc.documentations) &&
              doc.documentations.map((documentation) => {
                console.log("documentation:", documentation);
                return (
                  <DocCard
                    key={documentation.title}
                    title={documentation.title}
                    logoSrc={logo}
                    description={documentation.description}
                    owner={documentation.owner}
                    goToGithub={() => onGoToClick(documentation.githubUrl)}
                    goToProject={() => onGoToClick(documentation.projectUrl)}
                  />
                );
              })}
          </DocSection>
        );
      })}
    </div>
  );
}
