import React from "react";
import Head from "../../Head";
const Body = ({ page, title }) => {
  return (
    <div className="flex-1 bg-white">
      <div className="flex flex-col h-screen w-full">
        <Head title={title} />
        {page}
      </div>
    </div>
  );
};

export default Body;
