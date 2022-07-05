import styled from "styled-components";

export const Container = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectNewStatus = styled.select`
  height: 20px;
  width: 100%;
  font-size: 12px;
  border-radius: 14px;
  background-color: #723bff;
  color: #fff;

  :active,
  :focus {
    outline: none;
  }
`;

export const OptionsValue = styled.option`
  font-size: 12px;
  outline: none;
`;
