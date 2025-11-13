
import React from 'react';
import DashboardIframe from '../components/DashboardIframe';

const DashHansen = () => {
  const urlExemplo = 'https://cenariostb.unb.br/shiny_hansen/';

  return (
    <DashboardIframe 
      dashboardUrl={urlExemplo} 
      title="Dashboard: Estudo de Hanseníase" 
      className="titleEstudo"
    />
  );
};

export default DashHansen;