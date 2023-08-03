import React from 'react'
import { Button, ButtonTwo, CardsArticle, DivButton, ButtonOne, DivPlans, LineaHr, List, UnorderList, ParagraphCards, SpanSimbolo, SpanParagraph, TitleHTres, ParagraphSubtitle } from './Plans-styled'
import { Link } from 'react-router-dom';


export const CardPlan = () => {
  return (
   
    <DivPlans>
    <CardsArticle >
        <TitleHTres>Starter</TitleHTres>
        <ParagraphSubtitle>Ideal for freelancers and contractors just starting out.</ParagraphSubtitle>
        <ParagraphCards>
        <SpanSimbolo>$</SpanSimbolo> 
        24 
        <SpanParagraph>/MONTH</SpanParagraph>
        </ParagraphCards>
        <LineaHr />
        <UnorderList>
            <List>All Templates</List>
            <List>Unlimited Clients & Projects</List>
            <List>Invoicing & Payments</List>
            <List>Proposals & Contracts</List>
            <List>Tasks & Time Tracking</List>
            <List>Client CRM</List>
            <List>Expense Tracking</List>
            <List>Up to 5 Project Collaborators</List>
        </UnorderList>
        <DivButton>
        <ButtonOne>StartFree</ButtonOne>
        </DivButton>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <TitleHTres>Professional</TitleHTres>
        <ParagraphSubtitle>Everything a growing independent business needs to thrive.</ParagraphSubtitle>
        <ParagraphCards>
        <SpanSimbolo>$</SpanSimbolo>
        39 
        <SpanParagraph>/MONTH</SpanParagraph>
        </ParagraphCards>
        <LineaHr />
        <UnorderList>
            <List>Everything in Starter plus...</List>
            <List>Custom Banding</List> 
            <List>Forms & Questionnaires</List> 
            <List>Workflow automations</List>
            <List>Client Portal</List>
            <List>QuickBooks Integration</List>
            <List>Calendly Integration</List>
            <List>Zapier Integration</List>
            <List>Up to 15 Project Collaborators</List>
        </UnorderList>
        <DivButton>
        <Button>StartFree</Button>
        </DivButton>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <TitleHTres>Business</TitleHTres>
        <ParagraphSubtitle>The perfect package for small businesses and agencies.</ParagraphSubtitle>
        <ParagraphCards>
        <SpanSimbolo>$</SpanSimbolo>
        79 
        <SpanParagraph>/MONTH</SpanParagraph>
        </ParagraphCards>

        <LineaHr />
        <UnorderList>
            <List>Everything in Starter and Professional plus...</List>
            <List>Subcontractor Management</List> 
            <List>Hiring Agreement Templates (1099 contacts)</List> 
            <List>Subcontractor Onboarding</List>
            <List>Talent Pool</List>
            <List>3 Team Seats (additional seats $9/month)</List>
            <List>Accountant Access</List>
            <List>Connect Multiple Bank Accounts</List>
            <List>Unlimited Subcontractors</List>
            <List>Unlimited Project Collaborators</List>
        </UnorderList>
        <DivButton>
        <ButtonTwo>StartFree</ButtonTwo>
        </DivButton>
    </CardsArticle>
</DivPlans>
    
  )
}
