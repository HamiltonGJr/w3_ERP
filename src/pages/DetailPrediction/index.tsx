import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ContainerBody, ContainerMain } from "../../styles/styleGlobal";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import PredictionHeader from "../../components/PredictionHeader";
import { ContainerMenu } from "../Dashboard/style";
import MenuTable from "../../components/MenuTable";
import Table from "../../components/Table";
import { Products } from "../../types/typesProduct";
import theme from "../../styles/theme";
import { getProducts } from "../../services/serviceProducts";
import FacialCleanser from "../../assets/svg/FacialCleanser";
import HistoryClock from "../../assets/svg/HistoryClock";
import ButtonCheck from "../../assets/svg/ButtonCheck";
import { ContainerButton, ContainerButtonCheck } from "./style";

const DetailPrediction = () => {
  const [porducts, setProducts] = useState<Products[]>([]);

  const location = useLocation();
  const { id, client, telefone, email } = location.state;

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

  const extractDay = (day: string) => {
    const date = new Date(day);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  const historyProducts = porducts
    .filter((product) => product.percentage > 0)
    .slice(0, 10);

  const exhaustedProducts = porducts
    .filter((product) => product.percentage < 0)
    .slice(0, 5);

  return (
    <>
      <ContainerBody>
        <Sidebar />

        <ContainerMain>
          <Header />

          <PredictionHeader
            id={id}
            client={client}
            telefone={telefone}
            email={email}
          />

          <ContainerMenu>
            <MenuTable
              icon={<HistoryClock />}
              title={"Hitórico"}
              generalwidthContainer="675px"
              backgroundColor={theme.colors.others.white}
              colorTitle={theme.colors.grays.gray900}
            >
              <Table
                headers={["ID", "Cliente", "Última compra", "Qtd", "Dar baixa"]}
              >
                {historyProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{formatId(product.id)}</td>
                    <td>{product.name}</td>
                    <td>{extractDay(product.lastPurchase!)}</td>
                    <td>{product.amount}</td>
                    <td>
                      <ContainerButtonCheck>
                        <ButtonCheck />
                      </ContainerButtonCheck>
                    </td>
                  </tr>
                ))}
              </Table>
            </MenuTable>

            <MenuTable
              icon={<FacialCleanser color={theme.statusAlert.error} />}
              title={"Produtos esgotando"}
              generalwidthContainer="675px"
              backgroundColor="#ffe1e1"
              colorTitle={theme.statusAlert.error}
            >
              <Table
                headers={["ID", "Cliente", "Última compra", "Qtd", "Dar baixa"]}
              >
                {exhaustedProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{formatId(product.id)}</td>
                    <td>{product.name}</td>
                    <td>{extractDay(product.lastPurchase!)}</td>
                    <td>{product.amount}</td>
                    <td>
                      <ContainerButton>
                        <ContainerButtonCheck>
                          <ButtonCheck />
                        </ContainerButtonCheck>
                      </ContainerButton>
                    </td>
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

export default DetailPrediction;
