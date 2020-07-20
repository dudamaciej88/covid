import React from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../../data/actions/displayer.actions";
import * as S from "./navigation.style";
import {useSelector} from "react-redux";


const Navigation = ({ navActive }) => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.displayer.display)
  return (
    <S.Wrapper>
      <S.Ul>
        <S.Li
          navActive={display === "overall"}
          margin={"0px 0px 0px auto"}
          borderMobile={"1rem 0rem 0rem 0rem"}
          borderDesktop={"1rem 0rem 0rem 1rem"}
          onClick={() => dispatch(setDisplay("overall"))}
        >
          <S.Numbers /><S.Text>Overall</S.Text>
        </S.Li>
        <S.Li
          navActive={display === "bar"}
          borderMobile={"0rem 0rem 0rem 0rem"}
          borderDesktop={"0rem 0rem 0rem 0rem"}
          onClick={() => dispatch(setDisplay("bar"))}
        >
          <S.Bar /> <S.Text>Bar</S.Text>
        </S.Li>
        <S.Li
          navActive={display === "timeline"}
          margin={"0px auto 0px 0px"}
          borderMobile={"0rem 1rem 0rem 0rem"}
          borderDesktop={"0rem 1rem 1rem 0rem"}
          onClick={() => dispatch(setDisplay("timeline"))}
        >
          <S.Clock /> <S.Text>Timeline</S.Text>
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
};

export default Navigation;
