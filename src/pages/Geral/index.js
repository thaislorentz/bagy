import React from "react"
import Header from '../../components/Header'
import Card from '../../components/Card'
import Chart from '../../components/Chart'
import "./style.scss";

const Geral = () => {

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
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
          </div>
        </div>
        <div>
        <div className="geral-content">
          oi
        </div>
        <div className="geral-content">
          oi
        </div>
        </div>
      </div>
    </div>
  );
};

export default Geral;
