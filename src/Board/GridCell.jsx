import styles from "./GridCell.module.css";
import PropTypes from "prop-types";

export default function GridCell({ value, onCellClick }) {
  return (
    <div className={styles.grid_cell} onClick={onCellClick}>
      {value}
    </div>
  );
}

GridCell.propTypes = {
  value: PropTypes.string,
  onCellClick: PropTypes.func,
};
