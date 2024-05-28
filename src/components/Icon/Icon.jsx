import sprite from "../../assets/sprite.svg";
import PropTypes from 'prop-types';

export const Icon = ({ styles, width, height, iconId }) => {
  return (
    <>
      <svg style={styles} width={width} height={height}>
        <use href={`${sprite}#${iconId}`}></use>
      </svg>
    </>
  );
};

Icon.propTypes = {
    styles: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    iconId: PropTypes.string.isRequired,
  };
  
  // export default Icon;