import "../Dashboard/Dashboard.css"
import React from 'react'
import { Card } from "../Card/Card"
import { apiEntity } from "../../apiConfig"
import { CakeChart } from "../Charts/CakeChart"
import { BarChart } from "../Charts/BarChart"
import { AreaChart } from "../Charts/AreaChart"

export const Dashboard = () => {
  return (
    <>
      <h2>Métricas del último mes</h2>
      <div className="row">
        <Card entity={apiEntity.usersByMonth} title={"Usuarios Registrados"} />
        <Card entity={apiEntity.travelsByMonth} title={"Viajes Creados"}/>
        <Card entity={apiEntity.expensesByMonth} title={"Gastos Agregados"}/>
      </div>
      <h2>Gráficos</h2>
      <div className="row">
        <div className="chart-container">
        <CakeChart entity={apiEntity.expensesByCategory} />
        </div>
        <div className="chart-container">
          <BarChart entity={apiEntity.expensesByPaymentMethod}/>
        </div>
        <div className="chart-container">
          <AreaChart entity={apiEntity.usersByYear} />
        </div>
      </div>
    </>
  )
}
