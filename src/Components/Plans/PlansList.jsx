import React from 'react'
import { Container, Collaborators, DivMonth, DivInvite, HTres, TitleHDos, ParagraphFree, ParagraphPartners, Text, PerMonth, Partners } from './PlansList-styled'

export const PlansList = () => {
  return (
    <Container>
      <TitleHDos>Super Charge your work with add-ons</TitleHDos>

      <Collaborators>
        <DivInvite>
          <HTres>Collaborators</HTres>
          <Text>Invite other users to specific projects for limited access and functionality.</Text>
        </DivInvite>
        <DivMonth>
          <ParagraphFree>Free</ParagraphFree>
        </DivMonth>
      </Collaborators>

      <Partners>
        <DivInvite>
          <HTres>Partners</HTres>
          <Text>Invite other users for full account and company management.</Text>
        </DivInvite>
        <DivMonth>
          <ParagraphPartners>$9</ParagraphPartners>
          <PerMonth>/MONTH</PerMonth>
        </DivMonth>
      </Partners>

      <div>
        <DivInvite>
          <HTres>Bonsai Tax</HTres>
          <Text>Tack expenses, identify write-offs, and estimate quarterly taxes easily.</Text>
          <a href='#'>LEARN MORE ></a>
        </DivInvite>
        <DivMonth>
          <ParagraphPartners>$10</ParagraphPartners>
          <PerMonth>/MONTH</PerMonth>
        </DivMonth>
      </div>
    </Container>
  )
}
