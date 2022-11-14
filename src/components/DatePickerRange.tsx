import React from "react";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { myColors } from "../helpers/myColors";

export interface Range {
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  color?: string | undefined;
  key?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  showDateDisplay?: boolean | undefined;
}

const firstRange: Range = {
  startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
  endDate: new Date(),
  key: "selection",
  color: myColors.important,
};

type Props = {
  getRangeSelected?: (range: Range) => void;

};

export default function DatePickerRange ({
  getRangeSelected,

}: Props) {
  const [ranges, setRanges] = useState([firstRange] as Range[]);

  const reset = () => {
    setRanges([firstRange] as Range[]);
  };


  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => {
        setRanges([item.selection]);
        getRangeSelected
          ? getRangeSelected(ranges[0])
          : console.log("no getRangeSelected");
        console.log("second", ranges);
      }}
      moveRangeOnFirstSelection={false}
      ranges={ranges}
    />
  );
}
