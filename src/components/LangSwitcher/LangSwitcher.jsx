import css from "./LangSwitcher.module.css";

export default function LangSwitcher({ value, onChange }) {
  return (
    <div className={css.wrapper}>
      <span>Lang switcher</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
