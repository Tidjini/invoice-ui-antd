import React from "react";
import { Input, Badge } from "antd";

const Search = Input.Search;

export default () => {
  return (
    <div style={{ margin: 20 }}>
      <Search
        placeholder="Recherche"
        style={{ width: 350, float: "left", display: "inline-block" }}
      />

      <div>
        <Badge count={5} style={{}}>
          <a
            href="#"
            style={{
              backgroundColor: "#CCC",
              width: 56,
              height: 56
            }}
          />
        </Badge>
      </div>
    </div>
  );
};
