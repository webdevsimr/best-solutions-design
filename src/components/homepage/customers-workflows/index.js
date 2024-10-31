import Image from "next/image";
import React from "react";
import CustomerWorkflowsCard from "./customer-workflow-card";


const CustomersWorkflows = () => {
  return (
    <section className="CustomersWorkflows">
      <div className="outerSpace">
        <div className="container">
          <div className="CustomersWorkflows_textbox">
            <h2>
              The majority of our customers do not understand their workflows
            </h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div >


          <div className="CustomersWorkflows_card_boxes">
               <CustomerWorkflowsCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersWorkflows;
