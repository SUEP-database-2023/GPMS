import React from "react";
import { Head } from "../../Head";
const Body = ({ page, title }) => {
  return (
    <div className="flex-1 bg-gray-200">
      <div className="flex flex-col h-full w-full overflow-hidden min-h-[700px]">
        <Head title={title} />
        {page}
      </div>
    </div>
  );
};

export default Body;
