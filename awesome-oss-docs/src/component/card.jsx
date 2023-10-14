import React from "react";
import DocSection from "./docSection";
import jsonData from "../constants/data";
import DocCard from "./docCard";

export default function () {
  const onGoToClick = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <div>
      {jsonData.documentationSets.map((documentation, index) => (
        <DocSection key={index} title={documentation.title}>
          {documentation.projects.map((project, projectIndex) => (
            <DocCard
              key={projectIndex}
              title={project.title}
              logoSrc={project.logoSrc}
              description={project.description}
              stars={project.stars}
              isDocumentation={project.isDocumentation}
              isOpenSource={project.isOpenSource}
              goToProject={() => {
                onGoToClick(project.projectUrl);
              }}
              goToGithub={() => {
                onGoToClick(project.githubUrl);
              }}
            />
          ))}
        </DocSection>
      ))}
    </div>
  );
}
