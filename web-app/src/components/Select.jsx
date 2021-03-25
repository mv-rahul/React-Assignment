import React from "react";
import CreatableSelect from "react-select/creatable";

const hobbies = [
  { value: "Reading", label: "Reading" },
  { value: "Gaming", label: "Gaming" },
  { value: "Traveling", label: "Traveling" },
  { value: "Drawing", label: "Drawing" },
];

export const ReactSelect = (props) => {
  return (
    <CreatableSelect
      isMulti
      onChange={props.onChange}
      options={hobbies}
      isSearchable
      value={props.value}
    />
  );
};
