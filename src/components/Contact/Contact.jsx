import { MdLocalPhone } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import css from "../Contact/Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <IoIosContact className={css.icon} />
          {name}
        </p>

        <p className={css.text}>
          <MdLocalPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
