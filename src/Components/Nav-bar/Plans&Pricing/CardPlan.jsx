import React from 'react'
import { CardsArticle } from './Plans-styled'


export const CardPlan = () => {
  return (
   
    <>
    <CardsArticle >
        <h3>Workflow</h3>
        <p>$24 / MONTH</p>
        <hr />
        <ul>
            <li>Unlimited Clients & Projects</li>
            <li>Proposals</li>
            <li>Contracts</li>
            <li>Invoicing & Payments</li>
            <li>Client CRM</li>
            <li>Projects Management</li>
            <li>Task & Time Tracking</li>
            <li>¡OS, Android, Chrome, & Mac Apps</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <h3>Workflow</h3>
        <p>$39 / MONTH</p>
        <hr />
        <ul>
            <li>Everything in Workflow, plus...</li>
            <li>White-labelled client experience</li> 
            <li>Client forms and questionnaires (lleva un icono amarillo)</li> 
            <li>Workflow automations</li>
            <li>Subcontracting (client-mode)</li>
            <li>Calendly integration</li>
            <li>Client portal</li>
            <li>Priority support</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>

    <CardsArticle >
        {/* este lleva un icono verde cruzado en una esquina */}
        <h3>Workflow</h3>
        <p>$79 / MONTH</p>
        <hr />
        <ul>
            <li>Everything in Workflow, plus...</li>
            <li>White-labelled client experience</li> 
            <li>Client forms and questionnaires (lleva un icono amarillo)</li> 
            <li>Workflow automations</li>
            <li>Subcontracting (client-mode)</li>
            <li>Calendly integration</li>
            <li>Client portal</li>
            <li>Priority support</li>
        </ul>
        <button>StartFree</button>
    </CardsArticle>
</>
    
  )
}
