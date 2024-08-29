import React, { useEffect, useState } from "react";

import {
  ContainerBody,
  ContainerContent,
  ContainerMain,
  ScrollContainer,
} from "./style";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SearchHeader from "../../components/SearchHeader";
import CardPrediction from "../../components/CardPrediction";
import { Products } from "../../types/typesProduct";
import getCustomers from "../../services/serviceCustumers";

const Prediction = () => {
  const [clients, setClients] = useState<Products[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const clientData = await getCustomers();

        setClients(clientData);
      } catch (err) {
        console.log("Error no TryCatch 'prediction': " + err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <>
      <ContainerBody>
        <Sidebar />

        <ContainerMain>
          <Header />

          <SearchHeader title="Predições" />

          <ScrollContainer>
            <ContainerContent>
              {clients.map((client) => (
                <CardPrediction client={client.name} id={client.name} />
              ))}
            </ContainerContent>
          </ScrollContainer>
        </ContainerMain>
      </ContainerBody>
    </>
  );
};

export default Prediction;
