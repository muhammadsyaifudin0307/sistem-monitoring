import PropTypes from 'prop-types';

const ButtonAdd = ({ type = 'button', className, onClick, children }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Add prop types validation
ButtonAdd.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonAdd;
