import styled from "styled-components";
import theme from "../../styles/theme";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
`;
export const THeadMenu = styled.thead`
  background-color: #002798;
  color: white;

  th {
    padding: 12px 15px;
    text-align: center;
    font-family: ${theme.fonts.fontFamily.secondary};
    font-size: ${theme.fonts.fontSizes.normal};
    font-weight: ${theme.fonts.fontWeight.semiBold};
    color: ${theme.colors.primary.light};
  }
`;
export const TBody = styled.tbody`
  tr {
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
  }

  td {
    padding: 12px 15px;
    text-align: center;
  }
`;
