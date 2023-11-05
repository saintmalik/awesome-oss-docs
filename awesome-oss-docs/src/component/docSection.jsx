import PropTypes from "prop-types";

const DocSection = ({ title, children }) => {
  return (
    <div className="flex justify-left w-full p-6 mt-4 mx-5">
      <div className="w-screen mr-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {children}
        </div>
      </div>
    </div>
  );
};

DocSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DocSection;
