import { useState } from "react";
import { SelectStyled } from "../styles/global";

export default function OrdersSelect() {
  const options = [
    { value: 1, color: "#FFCF01", title: "На рассмотрении" },
    { value: 2, color: "aqua", title: "Забронировано" },
    { value: 3, color: "green", title: "Куплено" },
    { value: 4, color: "gray", title: "Отменено" },
  ];

  const [color, setColor] = useState("#FFCF01");

  return (
    <SelectStyled
      onChange={(e) => setColor(options[e.target.value - 1].color)}
      name=""
      id=""
      style={{ color: color }}
    >
      {options.map((opt, index) => (
        <option key={index} style={{ color: opt.color }} value={opt.value}>
          {opt.title}
        </option>
      ))}
    </SelectStyled>
  );
}
