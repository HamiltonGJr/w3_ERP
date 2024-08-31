import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ContainerMenu } from "./style";
import { ContainerBody, ContainerMain } from "../../styles/styleGlobal";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DetailHeader from "../../components/DetailHeader";
import theme from "../../styles/theme";
import GraphDown from "../../assets/svg/GraphDown";
import MenuTable from "../../components/MenuTable";
import Table from "../../components/Table";
import { Clients } from "../../types/typesClients";
import getCustomers from "../../services/serviceCustumers";
import GraphUp from "../../assets/svg/GraphUp";

const DetailProduct = () => {
  const [clients, setClients] = useState<Clients[]>([]);

  const location = useLocation();
  const { name } = location.state;

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

  const positiveClients = clients
    .filter((client) => client.percentage > 0)
    .slice(0, 5);

  const negativeClients = clients
    .filter((client) => client.percentage < 0)
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
              title={"Clientes em baixa"}
              generalwidthContainer="675px"
              colorTitle={theme.colors.grays.gray900}
              backgroundColor={theme.statusAlert.error}
            >
              <Table headers={["ID", "Cliente", "Percentual", "Qtd"]}>
                {negativeClients.map((client) => (
                  <tr key={client.id}>
                    <td>{formatId(client.id)}</td>
                    <td>{client.name}</td>
                    <td>{formatPercentage(client.percentage)}</td>
                    <td>16</td>
                  </tr>
                ))}
              </Table>
            </MenuTable>

            <MenuTable
              icon={<GraphUp />}
              title={"Clientes em alta"}
              generalwidthContainer="675px"
              colorTitle={theme.colors.grays.gray900}
              backgroundColor={theme.statusAlert.success}
            >
              <Table headers={["ID", "Cliente", "Percentual", "Qtd"]}>
                {positiveClients.map((client) => (
                  <tr key={client.id}>
                    <td>{formatId(client.id)}</td>
                    <td>{client.name}</td>
                    <td>{formatPercentage(client.percentage)}</td>
                    <td>20</td>
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

export default DetailProduct;
