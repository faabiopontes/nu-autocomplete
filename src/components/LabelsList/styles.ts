import styled, { css } from "styled-components";

interface LabelProps {
  color: string;
}

export const Container = styled.div`
  margin-top: 10px;
`;

export const Label = styled.span<LabelProps>`
  border-radius: 24px;
  padding: 2px 7px;
  margin: 0px 1px;
  display: inline-block;
  background-color: #555;
  font-size: 14px;

  ${({ color }) =>
    color &&
    css`
      border: 1px solid #${color};
      color: #${color};
    `}
`;