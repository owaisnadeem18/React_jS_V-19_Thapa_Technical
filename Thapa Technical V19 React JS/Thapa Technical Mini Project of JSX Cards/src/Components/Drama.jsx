import React from "react";
import json_file from "../../src/api/dramaSeries.json";
import List from "./List";

export const Drama = () => {
  return (
    <ul className="ul-item">
      {json_file.map((item) => (
        <List key={item.id} items={item} />
      ))}
    </ul>
  );
};
