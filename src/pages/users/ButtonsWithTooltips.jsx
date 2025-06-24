import { LuMail, LuUserPlus, LuWallet } from "react-icons/lu";

const buttons = [
  {
    id: "tooltip-mail",
    Icon: LuMail,
    colorClass: "blue-btn",
    tooltip: "Send Mail",
  },
  {
    id: "tooltip-login",
    Icon: LuUserPlus,
    colorClass: "red-btn",
    tooltip: "Login As User",
  },
  {
    id: "tooltip-fund",
    Icon: LuWallet,
    colorClass: "primary-btn",
    tooltip: "Fund Add or Subtract",
  },
];

const ButtonsWithTooltips = () => (
  <div className="btns">
    {buttons.map(({ id, Icon, colorClass, tooltip }) => (
      <span className="tooltip-wrapper" key={id}>
        <a type="button" className={`site-btn-round ${colorClass}`} aria-describedby={id}>
          <Icon />
        </a>
        <span id={id} className="custom-tooltip">
          {tooltip}
        </span>
      </span>
    ))}
  </div>
);

export default ButtonsWithTooltips;
