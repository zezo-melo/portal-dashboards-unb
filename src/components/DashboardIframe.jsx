import React from 'react';

const DashboardIframe = ({ dashboardUrl, title }) => {
  return (
    <div className="iframe-container"> 
      <h1 className="iframe-title">{title}</h1> 
      
      <div className="iframe-wrapper">
        <iframe
          src={dashboardUrl}
          title={title}
          width="100%"
          height="100%" 
          frameBorder="0"
          allowFullScreen
          className="dashboard-iframe" 
        >
          <p>Seu navegador não suporta iframes. Link direto: <a href={dashboardUrl}>{dashboardUrl}</a></p>
        </iframe>
      </div>
    </div>
  );
};


export default DashboardIframe;