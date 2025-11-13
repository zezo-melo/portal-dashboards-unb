// src/pages/EstudoGenerico.jsx

import React from 'react';
import DashboardIframe from '../components/DashboardIframe';

const DashTuberculose = () => {
  // *** MUDE ESTE URL quando você tiver o novo iframe! ***
  const urlNovoDashboard = 'https://cenariostb.unb.br/04-Shiny/'; 

  return (
    <DashboardIframe 
      dashboardUrl={urlNovoDashboard} 
      title="Dashboard: Novo Estudo" 
    />
  );
};

export default DashTuberculose;