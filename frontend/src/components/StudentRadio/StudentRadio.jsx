import React from "react";
import { Radio } from "antd";
import StudentApi from "../Api/StudentApi";
import { useSelector, useDispatch } from "react-redux";
import {
  setfirst,
  setsecond,
  setthird,
  setfourth,
  setfirstchoice,
  setsecondchoice,
  setthirdchoice,
  setfourthchoice,
} from "../../store/StudentChoiceSlice";

const StudentRadio = ({ id }) => {
  const [haveChoiced, setHaveChoiced] = React.useState(false);

  const [value, setValue] = React.useState(1);
  const dispatch = useDispatch();

  const StudentChoice = useSelector((state) => state.StudentChoice);
  const { first, second, third, fourth } = StudentChoice;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleclear = () => {
    if (haveChoiced) {
      if (value === 1) {
        dispatch(setfirst());
        dispatch(setfirstchoice({ id: "" }));
      } else if (value === 2) {
        dispatch(setsecond());
        dispatch(setsecondchoice({ id: "" }));
      } else if (value === 3) {
        dispatch(setthird());
      } else if (value === 4) {
        dispatch(setfourth());
        dispatch(setfourthchoice({ id: "" }));
      }
      setHaveChoiced(false);
    }
  };
  return (
    <>
      <Radio.Group defaultValue={5}>
        <Radio
          disabled={first || haveChoiced}
          onChange={(e) => {
            onChange(e);
            setHaveChoiced(true);
            dispatch(setfirst());
            dispatch(setfirstchoice({ id: id }));
          }}
          value={1}
        >
          第一志愿
        </Radio>
        <Radio
          disabled={second || haveChoiced}
          onChange={(e) => {
            onChange(e);
            setHaveChoiced(true);
            dispatch(setsecond());
            dispatch(setsecondchoice({ id: id }));
          }}
          value={2}
        >
          第二志愿
        </Radio>
        <Radio
          disabled={third || haveChoiced}
          onChange={(e) => {
            onChange(e);
            setHaveChoiced(true);
            dispatch(setthird());
            dispatch(setthirdchoice({ id: id }));
          }}
          value={3}
        >
          第三志愿
        </Radio>
        <Radio
          disabled={fourth || haveChoiced}
          onChange={(e) => {
            onChange(e);
            setHaveChoiced(true);
            dispatch(setfourth());
            dispatch(setfourthchoice({ id: id }));
          }}
          value={4}
        >
          第四志愿
        </Radio>
        <Radio value={5}>无</Radio>
      </Radio.Group>
      <button className="text-blue-500" onClick={handleclear}>
        清除
      </button>
    </>
  );
};

export default StudentRadio;
