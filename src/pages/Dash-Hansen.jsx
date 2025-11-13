
import React from 'react';
import DashboardIframe from '../components/DashboardIframe';

const DashHansen = () => {
  const urlExemplo = 'https://arthurdias.shinyapps.io/hansen/';

  return (
    <DashboardIframe 
      dashboardUrl={urlExemplo} 
      title="Dashboard: Estudo de Hansen" 
      className="titleEstudo"
    />
  );
};

export default DashHansen;