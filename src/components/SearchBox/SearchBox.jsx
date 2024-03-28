import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const serchId = useId();

  return (
    <div className={css.container}>
      <label className={css.serchLabel} htmlFor={serchId}>
        Find contacts by name
      </label>
      <input
        className={css.serchInput}
        type="text"
        id={serchId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
