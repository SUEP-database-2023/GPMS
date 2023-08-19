import React from "react";
import { Head } from "../../Head";
const Body = ({ page, title }) => {
  return (
    <div className="flex-1 bg-gray-200">
      <div className=" h-full w-full overflow-auto overflow-x-hidden min-h-[700px]">
        <Head title={title} />
        {page}
      </div>
    </div>
  );
};

export default Body;
