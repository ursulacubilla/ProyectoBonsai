import React from 'react'
import { CardsArticle } from './Plans-styled'
import { Link } from 'react-router-dom';


export const CardPlan = () => {
  return (
   
    <>
    <CardsArticle >
        <h3>Starter</h3>
        <p>Ideal for freelancers and contractors just starting out.</p>
        <p>$24 / MONTH</p>
        <hr />
        <ul>
            <li>All Templates</li>
            <li>Unlimited Clients & Projects</li>
            <li>Invoicing & Payments</li>
            <li>Proposals & Contracts</li>
            <li>Tasks & Time Tracking</li>
            <li>Client CRM</li>
            <li>Expense Tracking</li>
            <li>Up to 5 Project Collaborators</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <h3>Professional</h3>
        <p>Everything a growing independent business needs to thrive.</p>
        <p>$39 / MONTH</p>
        <hr />
        <ul>
            <li>Everything in Starter plus...</li>
            <li>Custom Banding</li> 
            <li>Forms & Questionnaires</li> 
            <li>Workflow automations</li>
            <li>Client Portal</li>
            <li>QuickBooks Integration</li>
            <li>Calendly Integration</li>
            <li>Zapier Integration</li>
            <li>Up to 15 Project Collaborators</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <h3>Business</h3>
        <p>The perfect package for small businesses and agencies.</p>
        <p>$79 / MONTH</p>
        <hr />
        <ul>
            <li>Everything in Starter and Professional plus...</li>
            <li>Subcontractor Management</li> 
            <li>Hiring Agreement Templates (1099 contacts)</li> 
            <li>Subcontractor Onboarding</li>
            <li>Talent Pool</li>
            <li>3 Team Seats (additional seats $9/month)</li>
            <li>Accountant Access</li>
            <li>Connect Multiple Bank Accounts</li>
            <li>Unlimited Subcontractors</li>
            <li>Unlimited Project Collaborators</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>
</>
    
  )
}
