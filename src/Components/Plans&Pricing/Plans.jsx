import React from 'react'
import { ContainerOne, ContainerTwo } from './Plans-styled'
import { CardPlan } from './CardPlan'

export const Plans = () => {
  return (
    <>
    <ContainerOne>
    <h2>Plans & Pricing</h2>
<br></br>
    <p>MONTHLY</p> 
    <button>encendido/apagado</button>
    <p> 2 MONTHS FREE! YEARLY</p>
  </ContainerOne>

  <ContainerTwo>
    <CardPlan />
  </ContainerTwo>
  </>
  )
}
