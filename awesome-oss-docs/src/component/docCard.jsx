// ProjectCard.js
import PropTypes from "prop-types";
import { BsStar } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import Logo from "../component/imgs/logo.svg";

const DocCard = ({
  title,
  // logoSrc,
  description,
  stars,
  isDocumentation,
  isOpenSource,
  owner,
  goToGithub,
  goToProject,
}) => {
  return (
    <div className="bg-white p-2 mb-4 rounded-lg border border-black mr-3">
      <div className="flex flex-col items-center">
        <img src={Logo} alt={`${title} Logo`} className="w-18 h-15 mb-4 mt-5" />
        <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
        <div className="flex justify-center mt-7 mb-4">
          <div className="flex items-center bg-blue-200 rounded-full px-4 py-1 mb-3">
            {/* Star icon */}
            <BsStar className="h-6 w-6 text-pink-500 mr-2" />
            <span className="text-sm font-semibold mr-2">star</span>
            <span className="text-sm font-semibold mr-2">{stars}</span>
            <div className="border-r border-gray-400 h-4 mx-2"></div>
            {/* React Dropdown Icon */}
            <BsFillCaretDownFill className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        <div className="flex justify-center mt-2 mb-4">
          {isDocumentation && (
            <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
              Documentation
            </button>
          )}
          {isOpenSource && (
            <button className="bg-blue-200 text-black text-sm mr-2 px-2 rounded-xl">
              Open source
            </button>
          )}
        </div>
        <h3 className="text-black text-[14px] text-center mb-5">{description}</h3>
        <hr className="my-2 w-full border-black" />
        <small className="hidden">{owner}</small>
        <div className="flex justify-center mt-3">
          <button
            className="border border-blue-500 text-sm text-blue-500 px-1 mr-4 rounded"
            onClick={goToProject}>
            Go to Project
          </button>
          <button
            className="bg-green-500 text-white border text-sm border-blue-500 px-1 rounded"
            onClick={goToGithub}>
            Edit on Github
          </button>
        </div>
      </div>
    </div>
  );
};

DocCard.propTypes = {
  title: PropTypes.string,
  logoSrc: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  isDocumentation: PropTypes.bool,
  isOpenSource: PropTypes.bool,
  owner: PropTypes.string,
  goToGithub: PropTypes.func,
  goToProject: PropTypes.func,
};

export default DocCard;
