import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Data from "../../assets/svg/Data";
import {
  ContainerBody,
  ContainerGraphic,
  ContainerGraphicCard,
  ContainerMain,
  ContainerMenu,
  HeaderGraphic,
  TextGrafphic,
} from "./style";
import GraphicCard from "../../components/GraphicCard";
import Table from "../../components/Table";
import getProducts from "../../services/serviceProducts";
import getCustomers from "../../services/serviceCustumers";
import MenuTable from "../../components/MenuTable";
import FacialCleanser from "../../assets/svg/FacialCleanser";
import theme from "../../styles/theme";
import EveryUser from "../../assets/svg/EveryUser";
import RightArrow from "../../assets/svg/RightArrow";
import { Products } from "../../types/typesProduct";
import SwitchButton from "../../components/SwitchButton";

const Dashboard = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [clients, setClients] = useState<Products[]>([]);

  const [productsActiveFilter, setProductsActiveFilter] = useState<
    "positive" | "negative"
  >("positive");
  const [clientsActiveFilter, setClientsActiveFilter] = useState<
    "positive" | "negative"
  >("positive");

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

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const clientData = await getCustomers();

        setClients(clientData);
      } catch (err) {
        console.log("Error no TryCatch 'dashboard - client': " + err);
      }
    };

    fetchCustomers();
  }, []);

  const formatPercentage = (percentage: number): string => {
    const formattedPercentage = (percentage * 100).toFixed();
    const sing = percentage > 0 ? "+" : "";

    return `${sing}${formattedPercentage}%`;
  };

  const filteredProducts = products.filter((product) =>
    productsActiveFilter === "positive"
      ? product.percentage > 0
      : product.percentage < 0
  );

  const filteredClients = clients.filter((client) =>
    clientsActiveFilter === "positive"
      ? client.percentage > 0
      : client.percentage < 0
  );

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

  return (
    <>
      <ContainerBody>
        <Sidebar />

        <ContainerMain>
          <Header />

          <ContainerGraphic>
            <HeaderGraphic>
              <TextGrafphic>Dashboard</TextGrafphic>

              <Data />
            </HeaderGraphic>

            <ContainerGraphicCard>
              <GraphicCard
                percentageGraphic={80}
                nameGraphic="produtos"
                numberGraphic={120}
                posOrNegPercentage={13}
                highOrLowPercentage="alta"
                isPositive={true}
              />
              <GraphicCard
                percentageGraphic={20}
                nameGraphic="produtos"
                numberGraphic={56}
                posOrNegPercentage={29}
                highOrLowPercentage="baixa"
                isPositive={false}
              />
              <GraphicCard
                percentageGraphic={72}
                nameGraphic="clientes"
                numberGraphic={72}
                posOrNegPercentage={501}
                highOrLowPercentage="alta"
                isPositive={true}
              />
              <GraphicCard
                percentageGraphic={28}
                nameGraphic="clientes"
                numberGraphic={103}
                posOrNegPercentage={15}
                highOrLowPercentage="baixa"
                isPositive={false}
              />
            </ContainerGraphicCard>
          </ContainerGraphic>

          <ContainerMenu>
            <MenuTable
              icon={<FacialCleanser color={theme.colors.primary.main} />}
              title="Produtos"
              generalwidthContainer="675px"
              backgroundColor={theme.colors.primary.light}
              buttonHighOrLow={
                <SwitchButton
                  activeFilter={productsActiveFilter}
                  onFilterChange={(filter) => setProductsActiveFilter(filter)}
                />
              }
            >
              <Table headers={["ID", "Produto", "Percentual", ""]}>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{formatId(product.id)}</td>
                    <td>{product.name}</td>
                    <td>{formatPercentage(product.percentage)}</td>
                    <td>
                      <RightArrow />
                    </td>
                  </tr>
                ))}
              </Table>
            </MenuTable>

            <MenuTable
              icon={<EveryUser />}
              title={"Clientes"}
              generalwidthContainer="675px"
              backgroundColor={theme.colors.primary.main}
              buttonHighOrLow={
                <SwitchButton
                  activeFilter={clientsActiveFilter}
                  onFilterChange={(filter) => setClientsActiveFilter(filter)}
                />
              }
            >
              <Table headers={["ID", "Cliente", "Percentual", ""]}>
                {filteredClients.map((client) => (
                  <tr key={client.id}>
                    <td>{formatId(client.id)}</td>
                    <td>{client.name}</td>
                    <td>{formatPercentage(client.percentage)}</td>
                    <td>
                      <RightArrow />
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

export default Dashboard;
