import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';

import MembersCarousel from 'components/MembersCarousel/MembersCarousel.js';

function Members() {
  return (
    <>

      <div id="members-anchor"></div>
      <BurguerMenu theme='light' />
      <Header theme='dark' />
      <TitleBanner title='Nossa equipe' image='' />

      <section className="membros">
        <h2>Trainees</h2>
        <p>
          São recém-chegados na empresa junior, empenhados em aprender e contribuir com novas ideias.
        </p>
        <MembersCarousel diretoria="trainee" />

        <h2>Administrativo Financeiro</h2>
        <p>
          Planeja, controla e supervisiona as atividades financeiras e administrativas. Isso inclui orçamento, fluxo de caixa, viabilidade econômica de projetos, relatórios gerenciais e negociações com fornecedores. 
        </p>
        <MembersCarousel diretoria="adm-financeiro" />

        <h2>Marketing & Comercial</h2>
        <p>
          Faz a gestão de campanhas publicitárias, a  criação de conteúdo para mídias sociais e promocionais, e manutenção de relações públicas. 
        </p>
        <MembersCarousel diretoria="marketing" />

        <h2>Projetos</h2>
        <p>
        Supervisiona todos os projetos, garantindo que sejam entregues dentro dos prazos e requisitos estabelecidos. Seu papel inclui definir escopos, alocar recursos, coordenar equipes e prestar suporte técnico.
        </p>
        <MembersCarousel diretoria="projetos" />

        <h2>Gestão de Pessoas</h2>
        <p>
          Desempenha funções de RH como a gestão e desenvolvimento de talentos e a coordenação do processo seletivo para selecionar estudantes qualificados e comprometidos.
        </p>
        <MembersCarousel diretoria="gestao-pessoas" />

        <h2>Presidência</h2>
        <p>
          Define a visão de longo prazo, inspirando a equipe e tomar decisões estratégica. Além disso, orienta as operações diárias e promove um ambiente de trabalho colaborativo e motivador.
        </p>
        <MembersCarousel diretoria="presidencia" />
      </section>
    </>
  )
}

export default Members;
