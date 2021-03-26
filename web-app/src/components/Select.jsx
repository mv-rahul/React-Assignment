import React from "react";
import CreatableSelect from "react-select/creatable";

const hobbies = [
  { value: "Reading", label: "Reading" },
  { value: "Gaming", label: "Gaming" },
  { value: "Traveling", label: "Traveling" },
  { value: "Drawing", label: "Drawing" },
];

export const ReactSelect = ({ onChange, value, className }) => {
  return (
    <CreatableSelect
      isMulti
      onChange={onChange}
      options={hobbies}
      isSearchable
      value={value}
      className={className}
    />
  );
};
