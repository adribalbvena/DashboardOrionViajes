import "../Dashboard/Dashboard.css"
import React from 'react'
import { Card } from "../Card/Card"
import { apiEntity } from "../../apiConfig"

export const Dashboard = () => {
  return (
    <>
      <h2>Métricas del último mes</h2>
      <div className="row">
        <Card entity={apiEntity.usersByMonth} title={"Usuarios Registrados"} />
        <Card entity={apiEntity.travelsByMonth} title={"Viajes Creados"}/>
        <Card entity={apiEntity.expensesByMonth} title={"Gastos Agregados"}/>
      </div>
    </>
  )
}
