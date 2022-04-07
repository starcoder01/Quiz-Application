import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content";

const Data = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const category = await axios("https://opentdb.com/api_category.php");
      setCategoryData(category.data.trivia_categories);
    };
    getData();
  }, []);

  const [input, setInput] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form>
        <select name="" id={categoryId} value={input} onChange={handleChange}>
          {categoryData.map((e) => (
            <option
              key={e.id}
              value={e.id}
              onSelect={(e) => console.log(e.target.id)}
            >
              {e.name}
            </option>
          ))}
        </select>
      </form>
      <Content input={input} />
    </div>
  );
};

export default Data;
