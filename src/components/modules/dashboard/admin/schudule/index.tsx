import React from "react";
import DateTimeRangePicker from "./CreateSechudule";
import SheduleTabil from "./SheduleTabil";

const ShuduleMangemtn = () => {
  return (
    <div>
        <h1 className="text-2xl font-mono mb-5">Crete Schdule </h1>
      <DateTimeRangePicker />
      <SheduleTabil />
    </div>
  );
};

export default ShuduleMangemtn;
