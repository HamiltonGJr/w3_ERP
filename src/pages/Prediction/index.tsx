import React, { useEffect, useState } from "react";

import { ContainerContent, ScrollContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SearchHeader from "../../components/SearchHeader";
import CardPrediction from "../../components/CardPrediction";
import getCustomers from "../../services/serviceCustumers";
import { ContainerBody, ContainerMain } from "../../styles/styleGlobal";
import { Clients } from "../../types/typesClients";

const Prediction = () => {
  const [clients, setClients] = useState<Clients[]>([]);

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
                <CardPrediction
                  client={client.name}
                  id={client.id}
                  telefone={client.phone}
                  email={client.email}
                />
              ))}
            </ContainerContent>
          </ScrollContainer>
        </ContainerMain>
      </ContainerBody>
    </>
  );
};

export default Prediction;
