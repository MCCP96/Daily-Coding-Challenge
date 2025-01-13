import React from "react";

interface Props {
  selectedTimeFrame: string;
  onChange: (timeFrame: string) => void;
}

const timeFrames = ["Daily", "Weekly", "Bi-Weekly", "Monthly"];

export const TimeFrameSelector: React.FC<Props> = ({
  selectedTimeFrame,
  onChange,
}) => {
  return (
    <div>
      <select
        id="timeFrame"
        defaultValue={"Bi-Weekly"}
        onChange={(e) => onChange(e.target.value)}
      >
        {timeFrames.map((timeFrame) => (
          <option key={timeFrame} value={timeFrame}>
            {timeFrame}
          </option>
        ))}
      </select>
    </div>
  );
};
