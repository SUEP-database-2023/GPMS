import React from "react";
import { Head } from "../../Head";
import { useDispatch } from "react-redux";
import { setUserSlice } from "../../../store/UserSlice";
const Body = ({ page, title }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const tokenWithoutQuotes = storedToken.replace(/"/g, "");
    if (storedToken) {
      dispatch(setUserSlice(tokenWithoutQuotes));
    }
  }, []);
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
