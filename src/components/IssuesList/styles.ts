import styled, { css } from "styled-components";

export const NoIssues = styled.div`
  color: #364156;
  padding: 0.5rem;
`;

interface IssueProps {
  isActive: boolean;
}

export const Issue = styled.li<IssueProps>`
  padding: 0.5rem;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #364156;
      color: #fff;
      cursor: pointer;
      font-weight: 700;
    `}
`;

export const IssuesList = styled.ul`
  border: 1px solid #364156;
  border-top-width: 0;
  list-style: none;
  margin-top: 0px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;

  ${Issue}:hover {
    background-color: #364156;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  ${Issue}:not(:last-of-type) {
    border-bottom: 1px solid #364156;
  }
`;
