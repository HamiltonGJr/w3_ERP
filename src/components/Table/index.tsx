import React from "react";

import { TableContainer, TBody, THeadMenu } from "./style";
import { TableProps } from "../../types/typesComponents";

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <>
      <TableContainer>
        <THeadMenu>
          <tr>
            {headers.map((thead) => (
              <th key={thead}>{thead}</th>
            ))}
          </tr>
        </THeadMenu>

        <TBody>{children}</TBody>
      </TableContainer>
    </>
  );
};

export default Table;
