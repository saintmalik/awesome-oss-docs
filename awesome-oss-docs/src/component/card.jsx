import DocSection from './docSection';
// import jsonData from '../constants/data';
import DocCard from './docCard';
import docs from '../constants/docs';
import logo from '../component/imgs/logo.svg';

export default function Card() {
  const onGoToClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  console.log(docs);


  return (
    <div>
      {/* {jsonData.documentationSets.map((documentation, index) => (
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
      ))} */}

      {docs.map((doc, index) => (
        <DocSection key={index} title={doc.title}>
          {doc.documentations.map((documentation, index) => (
            <DocCard
              key={index}
              title={documentation.title}
              logoSrc={logo}
              description={documentation.description}
              owner={documentation.owner}
              goToGithub={() => onGoToClick(documentation.githubUrl)}
              goToProject={() => onGoToClick(documentation.projectUrl)}
            />
          ))}
        </DocSection>
      ))}
    </div>
  );
}
