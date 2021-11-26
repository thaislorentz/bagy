import { FaChartPie, FaTicketAlt, FaLightbulb} from 'react-icons/fa'

export const MenuData = [
    {
      name: 'Visão Geral',
      icon: <FaChartPie size={12} />,
      path: '/'
    },
    {
      name: 'Lojas',
      icon: <FaTicketAlt
      size={12} />,
      path: '/lojas'
    },
    {
      name: 'Venda',
      icon: <FaLightbulb size={12} />,
      path: '/vendas'
    },
    {
      name: 'Clientes',
      icon: <FaChartPie size={12} />,
      path: '/clientes'
    },
    {
      name: 'Produtos',
      icon: <FaChartPie size={12} />,
      path: '/produtos'
    },
    {
      name: 'Planos e Metas',
      icon: <FaChartPie size={12} />,
      path: '/planos-metas'
    },
    {
      name: 'Configurações',
      icon: <FaChartPie size={12} />,
      path: '/configuracoes'
    },
    {
      name: 'Sair',
      icon: <FaChartPie size={12} />,
      path: '/sair'
    }
  ]
