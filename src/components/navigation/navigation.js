import React from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../../data/actions/displayer.actions";
import * as S from "./navigation.style";
import { useSelector } from "react-redux";

const Navigation = ({ navActive }) => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.displayer.display);
  return (
    <S.Wrapper>
      <S.Ul>
        <S.Li
          navActive={display === "overall"}
          onClick={() => dispatch(setDisplay("overall"))}
        >
          <S.Numbers />
          <S.Text>Overall</S.Text>
        </S.Li>
        <S.Li
          navActive={display === "bar"}
          onClick={() => dispatch(setDisplay("bar"))}
        >
          <S.Bar /> <S.Text>Bar</S.Text>
        </S.Li>
        <S.Li
          navActive={display === "timeline"}
          onClick={() => dispatch(setDisplay("timeline"))}
        >
          <S.Clock /> <S.Text>Timeline</S.Text>
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
};

export default Navigation;
