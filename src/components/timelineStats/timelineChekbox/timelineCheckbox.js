import React from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../../../data/actions/legend.actions";
import { useSelector } from "react-redux";
import * as S from "./timelineCheckbox.style";

const TimelineCheckbox = ({ text, checkboxName }) => {
  const dispatch = useDispatch();
  const legend = useSelector((state) => state.legend.legend);
  const isChecked = legend.show[checkboxName];
  return (
    <S.Wrapper>
      
      <S.Checkbox
        checked={isChecked}
        type="checkbox"
        name={checkboxName}
        onChange={(value) =>
          dispatch(setShow(value.target.name, value.target.checked))
        }
      ></S.Checkbox>
      <S.P>{text}</S.P>
    </S.Wrapper>
  );
};

export default TimelineCheckbox;
