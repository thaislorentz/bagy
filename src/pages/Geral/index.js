import React, { useEffect } from "react";
import Header from '../../components/Header'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import { client } from "../../config/client-graphql";
import { gql } from "@apollo/client";
import "./style.scss";

const Geral = () => {
  useEffect(() => {
    // initial();
  }, []);

  function initial() {
    client
      .query({
        query: gql`
        query {
          me {
          name
          }
          }
        `,
      })
      .then((res) => console.log(res));
  }

  const products = [
    {
      product: 'Brincos #023',
      store: 'Estilo Pri',
      price: 'R$29,90',
      data: '17/07/20'
    },
    {
      product: 'Brincos #023',
      store: 'Estilo Pri',
      price: 'R$29,90',
      data: '17/07/20'
    },
    {
      product: 'Brincos #023',
      store: 'Estilo Pri',
      price: 'R$29,90',
      data: '17/07/20'
    },
    {
      product: 'Brincos #023',
      store: 'Estilo Pri',
      price: 'R$29,90',
      data: '17/07/20'
    }
  ]

  const sales = [
    {

      store: 'Estilo Pri',
      price: 'R$29,90',
      sales: '250 compras'
    },
    {

      store: 'Estilo Pri',
      price: 'R$29,90',
      sales: '250 compras'
    },
    {

      store: 'Estilo Pri',
      price: 'R$29,90',
      sales: '250 compras'
    },
    {

      store: 'Estilo Pri',
      price: 'R$29,90',
      sales: '250 compras'
    }
  ]

  return (
    <div className="geral">
      <Header page="Visão Geral" />
      <div className="geral-container">
        <div className="geral-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="geral-content">
          <div className="geral-chart">
            <h3 className="geral-chart-title">Total de faturamento mensal</h3>
            <span className="geral-chart-mounth">JULHO 2020</span>
            <div>
              <Chart />
            </div>
          </div>
          <div className="geral-details">
            <div className="geral-details-data">
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Mês</span>
              <h3 className="geral-details-title">Julho</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Ano</span>
              <h3 className="geral-details-title">2020</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Total de faturamento</span>
              <h3 className="geral-details-title">R$ 45.000,00</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Análise comparativa</span>
              <h3 className="geral-details-title">Positivo</h3>
            </div>
          </div>
        </div>
        <div className="geral-sales">
          <div className="geral-store">
            <div className="geral-store-sales">
              <div className="geral-store-sales-detail">
                <h3 className="geral-store-sales">Total de compras</h3>
                <span className="geral-store-sales-value">Valor geral: 13.250,00</span>
              </div>
              <div className="geral-store-data">Semanal</div>
            </div>
            <div className="geral-store-content">

              {
                sales.map((item, index) => (
                  <div className="geral-store-content-details" key={index}>
                    <span className="geral-store-content-details-store">{item.store}</span>
                    <span className="geral-store-content-details-sales">{item.sales}</span>
                    <span className="geral-store-content-details-sales">{item.price}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="geral-content">
            <table className="geral-table">
            <thead>
              <tr className="geral-table-header">
                <th>Produto</th>
                <th>Loja</th>
                <th>Preço</th>
                <th>Data</th>
              </tr>
              </thead>
              <tbody>

              {
                products.map((item, index) => (
                  <tr className="geral-table-line"  key={index}>
                    <td className="geral-table-atributs">{item.product}</td>
                    <td className="geral-table-atributs">{item.store}</td>
                    <td className="geral-table-atributs">
                      <span className="geral-table-atributs-blue">
                        {item.price}
                      </span>
                    </td>
                    <td className="geral-table-atributs">
                      <span className="geral-table-atributs-yellow">
                        {item.data}
                      </span>
                    </td>
                  </tr>
                ))
              }
                </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geral;
