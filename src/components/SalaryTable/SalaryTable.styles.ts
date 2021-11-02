import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
`;

const DownloadButton = styled.button`
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: RoyalBlue;
  }
`;

export const SalaryTableStyles = { Wrapper, DownloadButton };
