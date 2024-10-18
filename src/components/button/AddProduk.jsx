import PropTypes from 'prop-types'; // Import PropTypes
import ButtonAdd from './ButtonAdd.jsx'; // Import Button component

const AddProduk = ({ onClick }) => {
  return (
    <ButtonAdd type="button" onClick={onClick} className="bg-zinc-600 text-zinc-100 font-bold">
      Add Produk
    </ButtonAdd>
  );
};

// Define prop types
AddProduk.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that onClick is a required function
};

export default AddProduk;
