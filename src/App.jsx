import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Presentation from './components/Presentation/Presentation'
import 'bootstrap/dist/css/bootstrap.min.css'
import PrintBlocks from './components/InfoBlock/PrintBlocks'
import {
  AlarmClockCheck,
  Fingerprint,
  Layers,
  Satellite,
  View,
  Wallet,
} from 'lucide-react'

export const data = [
  {
    id: 1,
    icon: <AlarmClockCheck size={100} />,
    content: 'Главное наше преимущество заключается в скорости работ.',
    header: 'Почему компания имеет высокую скорость работ?',
    li1: 'Квалифицированные специалисты: Обученные и сертифицированные сотрудники.',
    li2: 'Современные технологии: Использование новейших инструментов и оборудования.',
    li3: 'Эффективные процессы: Оптимизированные логистика и управление проектами. Минимальная затрата времени на бумажную волокиту.',
  },
  {
    id: 2,
    icon: <Wallet size={100} />,
    content: 'Одна из самых низких цен на рынке.',
    header: 'Почему одна из самых низких цен на рынке?',
    li1: 'Оптимизация затрат: Эффективные процессы сокращают расходы.',
    li2: 'Массовые закупки: Долгосрочные контракты с поставщиками снижают стоимость материалов.',
    li3: 'Инновационные технологии: Снижение затрат благодаря автоматизации и передовым методам.',
  },
  {
    id: 3,
    icon: <Fingerprint size={100} />,
    content: 'Мы обеспечиваем гарантию безопастности.',
    header: 'Какие есть гарантии безопасности?',
    li1: 'Сертифицированное оборудование: Использование проверенных и сертифицированных инструментов.',
    li2: 'Строгие протоколы: Многоуровневый контроль качества и соблюдение всех стандартов безопасности.',
    li3: 'Обучение персонала: Регулярное обучение сотрудников по технике безопасности.',
  },
  {
    id: 4,
    icon: <Satellite size={100} />,
    content: 'Используем только надежное оборудование.',
    header: 'Какое оборудование используем?',
    li1: 'Дроны: Для предварительного осмотра и мониторинга.',
    li2: '3D-моделирование: Для точного планирования и установки.',
    li3: 'Автоматизированные системы: Для управления и контроля процессов.',
  },
  {
    id: 5,
    icon: <View size={100} />,
    content: 'Прозрачность отчетов и всех документов.',
    header: 'Как обеспечивается прозрачность отчетов?',
    li1: 'Цифровая платформа: Онлайн доступ к документам и отчетам в реальном времени.',
    li2: 'Регулярные обновления: Постоянное информирование клиентов о ходе работ.',
    li3: 'Подробные отчеты: Доступные и детализированные отчеты на каждом этапе проекта.',
  },
  {
    id: 6,
    icon: <Layers size={100} />,
    content: 'Наши проекты легко масштабируемы.',
    header: 'Почему проекты легко масштабируемы?',
    li1: 'Модульный подход: Использование стандартных модулей для быстрого масштабирования.',
    li2: 'Гибкие команды: Возможность оперативного увеличения числа сотрудников',
    li3: 'Современные технологии: Автоматизация процессов позволяет легко расширять проекты.',
  },
]

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Presentation />
        <PrintBlocks data={data} />
        <Footer />
      </div>
    </>
  )
}

export default App
