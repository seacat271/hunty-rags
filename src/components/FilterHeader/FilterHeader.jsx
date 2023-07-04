import { FaSistrix } from "react-icons/fa6";

export const FilterHeader = () => {
  return (
    <label style={{ position: "relative" }}>
      <input
        placeholder="Enter category"
        style={{ height: "24px", width: "240px" }}
      />

      <FaSistrix
        size={20}
        style={{ position: "absolute", top: 0, right: "5px" }}
      />
    </label>
  );
};
