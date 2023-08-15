import React from 'react'
import { ContainerOne, ContainerTwo, DivMonthly, ImageTwooMonthsFree, TextHTwo, Yearly } from './Plans-styled'
import { CardPlan } from './CardPlan'

export const Plans = () => {
  return (
    <>
    <ContainerOne>
    <div>
    <TextHTwo>Plans & Pricing</TextHTwo>
    </div>
<DivMonthly>
<p>MONTHLY</p> 
<button>encendido/apagado</button>
<Yearly>YEARLY</Yearly>
<ImageTwooMonthsFree src='/src/assets/5e9d7255d3886a6103fb12a9_FREE-text.svg'/>
</DivMonthly>
  </ContainerOne>

  <ContainerTwo>
    <CardPlan />
  </ContainerTwo>
  </>
  )
}
