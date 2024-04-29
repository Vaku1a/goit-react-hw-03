import { IoSearch } from "react-icons/io5";

import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <>
      <div className={css.group}>
        <p className={css.label}>Find contact by name</p>
        <div className={css.wrapper}>
          <IoSearch />
          <input
            className={css.searchField}
            type="text"
            placeholder="Find contact"
            value={value}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
