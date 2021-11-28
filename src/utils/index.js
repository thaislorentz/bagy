import { FaChartPie, FaTicketAlt, FaLightbulb, FaBook, FaUserTie} from 'react-icons/fa'
import { IoMdSettings, IoIosRibbon} from 'react-icons/io'
import { BsFillPeopleFill} from 'react-icons/bs'

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
      icon: <BsFillPeopleFill size={12} />,
      path: '/clientes'
    },
    {
      name: 'Produtos',
      icon: <FaUserTie size={12} />,
      path: '/produtos'
    },
    {
      name: 'Planos e Metas',
      icon: <FaBook size={12} />,
      path: '/planos-metas'
    },
    {
      name: 'Configurações',
      icon: <IoMdSettings size={12} />,
      path: '/configuracoes'
    },
    {
      name: 'Sair',
      icon: <IoIosRibbon size={12} />,
      path: '/sair'
    }
  ]
