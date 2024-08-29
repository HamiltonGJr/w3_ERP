import React from "react";

import { SearchHeaderProps } from "../../types/typesComponents";
import Search from "../../assets/svg/Search";
import {
  ButtonFilter,
  ButtonSearch,
  ContainerInputSearch,
  ContainerSearchHeader,
  InputSearch,
  TitleH2,
} from "./style";

const SearchHeader: React.FC<SearchHeaderProps> = ({
  title,
  onClickSearch,
  iconFilter,
  onClickFilter,
}) => {
  return (
    <>
      <ContainerSearchHeader>
        <TitleH2>{title}</TitleH2>

        <ContainerInputSearch>
          <div>
            <InputSearch type="text" placeholder="Pesquise uma palavra-chave" />
            <ButtonSearch onClick={onClickSearch}>
              <Search />
            </ButtonSearch>
          </div>

          <ButtonFilter onClick={onClickFilter}>{iconFilter}</ButtonFilter>
        </ContainerInputSearch>
      </ContainerSearchHeader>
    </>
  );
};

export default SearchHeader;
