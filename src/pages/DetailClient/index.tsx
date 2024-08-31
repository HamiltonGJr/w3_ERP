import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ContainerMenu } from "./style";
import { ContainerBody, ContainerMain } from "../../styles/styleGlobal";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DetailHeader from "../../components/DetailHeader";
import theme from "../../styles/theme";
import MenuTable from "../../components/MenuTable";
import GraphUp from "../../assets/svg/GraphUp";
import Table from "../../components/Table";
import GraphDown from "../../assets/svg/GraphDown";
import { Products } from "../../types/typesProduct";
import { getProducts } from "../../services/serviceProducts";

const DetailClient = () => {
  const [porducts, setProducts] = useState<Products[]>([]);

  const location = useLocation();
  const { name } = location.state;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();

        setProducts(productData);
      } catch (err) {
        console.log("Error no TryCatch 'dashboard - product': " + err);
      }
    };

    fetchProducts();
  }, []);

  const formatPercentage = (percentage: number): string => {
    const formattedPercentage = (percentage * 100).toFixed();
    const sing = percentage > 0 ? "+" : "";

    return `${sing}${formattedPercentage}%`;
  };

  const formatId = (id: number) => {
    const convertedID = id.toString();

    if (convertedID.length <= 1) {
      return "00" + id;
    }

    if (convertedID.length <= 2) {
      return "0" + id;
    }

    return id;
  };

  const positiveProducts = porducts
    .filter((product) => product.percentage > 0)
    .slice(0, 5);

  const negativeProducts = porducts
    .filter((product) => product.percentage < 0)
    .slice(0, 5);

  return (
    <>
      <ContainerBody>
        <Sidebar />

        <ContainerMain>
          <Header />

          <DetailHeader name={name} />

          <ContainerMenu>
            <MenuTable
              icon={<GraphDown />}
              title={"Produtos em baixa"}
              generalwidthContainer="675px"
              colorTitle={theme.colors.grays.gray900}
              backgroundColor={theme.statusAlert.error}
            >
              <Table headers={["ID", "Cliente", "Percentual", "Qtd"]}>
                {negativeProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{formatId(product.id)}</td>
                    <td>{product.name}</td>
                    <td>{formatPercentage(product.percentage)}</td>
                    <td>12</td>
                  </tr>
                ))}
              </Table>
            </MenuTable>

            <MenuTable
              icon={<GraphUp />}
              title={"Produtos em alta"}
              generalwidthContainer="675px"
              colorTitle={theme.colors.grays.gray900}
              backgroundColor={theme.statusAlert.success}
            >
              <Table headers={["ID", "Cliente", "Percentual", "Qtd"]}>
                {positiveProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{formatId(product.id)}</td>
                    <td>{product.name}</td>
                    <td>{formatPercentage(product.percentage)}</td>
                    <td>15</td>
                  </tr>
                ))}
              </Table>
            </MenuTable>
          </ContainerMenu>
        </ContainerMain>
      </ContainerBody>
    </>
  );
};

export default DetailClient;
