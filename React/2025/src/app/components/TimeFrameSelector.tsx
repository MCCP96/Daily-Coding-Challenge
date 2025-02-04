import React from "react";
import { Frequency } from "../types";

interface Props {
  onChange: (timeFrame: Frequency) => void;
}

export const TimeFrameSelector: React.FC<Props> = ({ onChange }) => {
  return (
    <div>
      <select
        id="timeFrame"
        defaultValue={Frequency.Monthly}
        onChange={(e) => onChange(e.target.value as Frequency)}
      >
        {Object.values(Frequency).map((timeFrame) => (
          <option key={timeFrame} value={timeFrame}>
            {timeFrame}
          </option>
        ))}
      </select>
    </div>
  );
};
