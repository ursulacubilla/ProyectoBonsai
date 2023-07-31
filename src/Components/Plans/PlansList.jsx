import React from 'react'
import { Container, Collaborators, DivMonth, DivInvite, Paragraph, HTres } from './PlansList-styled'

export const PlansList = () => {
  return (
    <Container>
      <p>Super Charge your work with add-ons</p>

      <Collaborators>
        <DivInvite>
          <HTres>Collaborators</HTres>
          <Paragraph>Invite other users to specific projects for limited access and functionality.</Paragraph>
        </DivInvite>
        <DivMonth>
          <p>Free</p>
        </DivMonth>
      </Collaborators>

      <Collaborators>
        <DivInvite>
          <HTres>Partners</HTres>
          <Paragraph>Invite other users for full account and company management.</Paragraph>
        </DivInvite>
        <DivMonth>
          <p>$9 /MONTH</p>
        </DivMonth>
      </Collaborators>

      <Collaborators>
        <DivInvite>
          <HTres>Bonsai Tax</HTres>
          <Paragraph>Tack expenses, identify write-offs, and estimate quarterly taxes easily.</Paragraph>
          <a href='#'>LEARN MORE ></a>
        </DivInvite>
        <DivMonth>
          <p>$10 /MONTH</p>
        </DivMonth>
      </Collaborators>
    </Container>
  )
}
