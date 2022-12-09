import React, { Fragment } from "react";
import Select from "react-select";

export default function CustomGetOptionValue() {
  const dogOptions = ["Select...", "Vanila", "Chocolate", "Strawberry"];
  return (
    <Fragment>
      <p>Using id property, instead of value property.</p>
      <Select
        defaultValue={dogOptions[0]}
        isClearable
        isSearchable
        name="dog"
        options={dogOptions}
        getOptionValue={(option) => `${option["id"]}`}
      />
    </Fragment>
  );
}
