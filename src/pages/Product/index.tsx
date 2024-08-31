import React, { useEffect, useState } from "react";

import { ContainerBody, ContainerMain } from "../../styles/styleGlobal";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SearchHeader from "../../components/SearchHeader";
import Filter from "../../assets/svg/Filter";
import Table from "../../components/Table";
import { Products } from "../../types/typesProduct";
import getProducts from "../../services/serviceProducts";
import {
  ContainerDown,
  ContainerProductTable,
  ContainerUp,
  ContainerUpOrDown,
} from "./style";

const Product = () => {
  const [products, setProducts] = useState<Products[]>([]);

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

  const upOrDown = (percentage: number) => {
    const upOrDown =
      percentage > 0 ? (
        <ContainerUp>
          <p>Em alta</p>
        </ContainerUp>
      ) : (
        <ContainerDown>
          <p>Em baixa</p>
        </ContainerDown>
      );

    return upOrDown;
  };

  return (
    <>
      <ContainerBody>
        <Sidebar />

        <ContainerMain>
          <Header />

          <SearchHeader title="Produtos" iconFilter={<Filter />} />

          <ContainerProductTable>
            <Table headers={["ID", "Produto", "Status", "Percentual"]}>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{formatId(product.id)}</td>
                  <td>{product.name}</td>
                  <td>
                    <ContainerUpOrDown>
                      {upOrDown(product.percentage)}
                    </ContainerUpOrDown>
                  </td>
                  <td>{formatPercentage(product.percentage)}</td>
                </tr>
              ))}
            </Table>
          </ContainerProductTable>
        </ContainerMain>
      </ContainerBody>
    </>
  );
};

export default Product;
