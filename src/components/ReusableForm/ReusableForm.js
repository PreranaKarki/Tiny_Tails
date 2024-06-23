import React from "react";
import Wrapper from "./ReusableFormStyled";

const ReusableForm = ({
  type,
  htmlFor,
  label,
  spanCorrect,
  spanWrong,
  name,
  id,
  value,
  ref,
  placeholder,
  style,
  onChange,
  ariainvalid,
  ariadescribedby,
  onFocus,
  onBlur,
}) => {
  // const userRef = useRef();
  return (
    <>
      <Wrapper>
        <div className="ContentContainer">
          <div className="FormGroup">
            <label className="Label" htmlFor={htmlFor} style={style}>
              {label}
              {spanCorrect}
              {spanWrong}
            </label>
            <input
              type={type}
              name={name}
              id={id}
              className="input"
              ref={ref}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-invalid={ariainvalid}
              aria-describedby={ariadescribedby}
              onFocus={onFocus}
              onBlur={onBlur}
              autoComplete="off"
              required
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ReusableForm;
