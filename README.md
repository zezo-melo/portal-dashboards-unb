📊 Portal de Dashboards Interativos (React + Vite)

Este é um projeto de portal construído com React e Vite, projetado para atuar como um hub central, incorporando dashboards e visualizações externas (como Shiny, Power BI, Tableau, etc.) através de iframes.

🛠️ Tecnologias Utilizadas

Framework: React v18+

Build Tool: Vite

Roteamento: React Router DOM

Carrossel: Swiper.js

🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para clonar o repositório e iniciar o ambiente de desenvolvimento.

1. Pré-requisitos

Certifique-se de ter o Node.js (versão 16.x ou superior) e o npm ou Yarn instalados em sua máquina.

2. Clonar o Repositório

Abra seu terminal e clone o projeto.

git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DA_PASTA_DO_PROJETO]


3. Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência (npm ou yarn) para instalar todas as dependências do projeto.

# Usando npm
npm install

# OU usando Yarn
yarn


4. Iniciar o Servidor de Desenvolvimento

Após a instalação, inicie o ambiente de desenvolvimento local. O Vite irá compilar o projeto e disponibilizá-lo.

# Usando npm
npm run dev

# OU usando Yarn
yarn dev


O servidor será iniciado e geralmente estará acessível em http://localhost:5173/ (ou em uma porta diferente, conforme indicado no seu terminal).

🏗️ Estrutura do Projeto

O projeto segue a estrutura padrão do Vite, com componentes essenciais para o portal:

Caminho

Descrição

src/App.jsx

Componente principal que define o roteamento (Routes) e o cabeçalho (Header).

src/main.jsx

Ponto de entrada do React (renderização).

src/pages/Home.jsx

Página inicial que exibe o carrossel de destaque.

src/pages/Dash-*.jsx

Componentes de página específicos para cada dashboard (ex: Dash-Hansen.jsx).

src/components/DashboardIframe.jsx

Componente reutilizável para incorporar os dashboards via <iframe>.

src/components/DashboardCarousel.jsx

O carrossel que usa a biblioteca Swiper para a seção de destaques.

src/components/CarouselSlides/

Pasta contendo os componentes de cada slide do carrossel (ex: SlideHansen.jsx).

src/App.css

Arquivo CSS principal para estilização global e do carrossel.

🔗 Adicionando Novos Dashboards

Para adicionar um novo dashboard ao portal, siga estes passos:

Crie o Componente de Página:

Crie um novo arquivo em src/pages/ (ex: Dash-Novo.jsx).

Use o componente DashboardIframe passando a URL do seu novo painel:

// src/pages/Dash-Novo.jsx
import React from 'react';
import DashboardIframe from '../components/DashboardIframe';

const DashNovo = () => {
  const urlNovoDashboard = 'URL_DO_SEU_DASHBOARD_AQUI'; 

  return (
    <DashboardIframe 
      dashboardUrl={urlNovoDashboard} 
      title="Dashboard: Título do Novo Painel" 
    />
  );
};

export default DashNovo;


Adicione a Rota:

Importe o novo componente em src/App.jsx.

Adicione uma nova <Route> dentro do <Routes>:

// Em src/App.jsx
// ...
import DashNovo from './pages/Dash-Novo'; 
// ...
    <Routes>
        {/* ... rotas existentes ... */}
        <Route path="/Dash-Novo" element={<DashNovo />} />
    </Routes>
// ...


Adicione ao Menu (Opcional):

Atualize o componente Header em src/App.jsx para incluir um link para a nova rota.

Adicione ao Carrossel (Opcional):

Crie um componente de slide em src/components/CarouselSlides/ (ex: SlideNovo.jsx).

Adicione-o ao array carouselData em src/components/DashboardCarousel.jsx.