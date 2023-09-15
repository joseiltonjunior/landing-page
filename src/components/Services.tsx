import applicationIcon from '@/assets/aplicativo-movel.png'
import ecommerceIcon from '@/assets/comercio-eletronico.png'
import dashboardIcon from '@/assets/painel-de-controle.png'
import sitesIcon from '@/assets/local-na-rede-internet.png'
import landingpageIcon from '@/assets/landing-page.png'
import { Card } from './Card'

export function Services() {
  return (
    <div className="mb-4">
      <p className="font-bold text-2xl text-purple-600" id="services">
        Serviços
      </p>
      <p className="ms-4 font-semibold text-lg  text-slate-300" id="services">
        Projeção, Desenvolvimento e manutenção de:
      </p>
      <div className="grid grid-cols-5 gap-4 mt-4 md:grid-cols-1">
        <Card
          icon={landingpageIcon}
          title="Landing Pages"
          description="Uma landing page é uma página da web projetada com um objetivo
          específico, como converter visitantes em leads ou clientes."
          moreDescription="Os benefícios das landing pages incluem melhor conversão,
          rastreamento preciso, segmentação, experiência do usuário
          aprimorada, geração de leads, testes A/B, economia de tempo e
          dinheiro, otimização para mecanismos de busca e melhoria do ROI em
          campanhas de marketing digital. Elas são ferramentas essenciais para
          direcionar o tráfego e aumentar as conversões online."
        />

        <Card
          icon={sitesIcon}
          title="Sites"
          urlExample="https://ferreirajr.tech/"
          description="Um site é uma coleção de páginas da web hospedadas na internet,
            oferecendo uma presença online."
          moreDescription="Os benefícios incluem interação com o público, vendas online,
            alcance global, análise de dados e redução de custos em comparação
            com mídias tradicionais. É uma ferramenta essencial para indivíduos
            e empresas que desejam estabelecer uma presença digital e expandir
            suas oportunidades de negócios."
        />

        <Card
          icon={ecommerceIcon}
          title="E-commerce"
          urlExample="https://dcoffee-shop.netlify.app/"
          description="Um e-commerce é uma plataforma online que permite a compra e venda
          de produtos ou serviços pela internet."
          moreDescription="Seus benefícios incluem alcance global, disponibilidade 24/7,
          redução de custos, variedade de produtos, facilidade de pesquisa,
          segurança de pagamento, personalização, análise de dados e expansão
          de mercado. É uma ferramenta valiosa tanto para empresas quanto para
          consumidores, oferecendo conveniência e oportunidades de negócios."
        />

        <Card
          icon={dashboardIcon}
          title="Dashboard"
          urlExample="https://nacao-fut.netlify.app/"
          description="Um dashboard é uma interface visual que apresenta informações de
          forma clara e concisa, geralmente usando gráficos e tabelas."
          moreDescription="Seus benefícios incluem a visualização de dados, tomada de decisões
          informadas, acompanhamento de desempenho, economia de tempo,
          personalização, acessibilidade, comunicação eficaz, identificação
          rápida de problemas, análise de tendências e melhoria da eficiência
          operacional. É uma ferramenta valiosa em vários contextos, ajudando
          a compreender dados, monitorar o desempenho e tomar decisões
          informadas de maneira eficaz."
        />

        <Card
          icon={applicationIcon}
          title="Aplicativos"
          description="Um aplicativo é um programa de software projetado para dispositivos
          eletrônicos, como smartphones."
          moreDescription="Oferece uma variedade de benefícios, incluindo acesso fácil,
          experiência do usuário otimizada, funcionalidades offline,
          notificações, integração de hardware, personalização, segurança e
          oportunidades de monetização. Os aplicativos desempenham um papel
          importante na vida cotidiana e nos negócios modernos, proporcionando
          uma ampla gama de serviços e funcionalidades para os usuários."
        />
      </div>
    </div>
  )
}
