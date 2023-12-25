import React from "react";
import Store from "../../Redux/store";
export default function Home(props) {
  console.log(props);

  const HanderRouter = () => {
    props.history.push({ pathname: "/News", query: { id: "1" } });
  };
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          HanderRouter();
        }}
      >
        前往新闻业
      </button>
      <div>{Store.getState().AddReducer.AddText}</div>
    </div>
  );
}
