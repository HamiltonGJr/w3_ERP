import styled from "styled-components";

import theme from "../../styles/theme";

export const ContainerSearchHeader = styled.div`
  width: 90%;
  padding: 15px 45px;
`;
export const TitleH2 = styled.h2`
  font-size: ${theme.fonts.fontSizes.heading4};
  color: ${theme.colors.grays.gray900};
`;
export const ContainerInputSearch = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;
export const InputSearch = styled.input`
  width: 400px;
  padding: 15px;
  border: 1.5px solid ${theme.colors.grays.gray300};
  border-radius: 13px;

  &:focus {
    border: 1.5px solid ${theme.colors.grays.gray800};
    outline: 0;
  }
`;
export const ButtonSearch = styled.button`
  padding: 09px 11px;
  border: none;
  border-radius: 0 13px 13px 0;
  position: relative;
  top: 6px;
  right: 47px;
  cursor: pointer;
`;
export const ButtonFilter = styled.button`
  border: none;
  border-radius: 13px;
  position: relative;
  top: 2px;
  right: 25px;
  cursor: pointer;
`;
