import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './About.scss'

const About = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="space"></div>
      <div className="first-form">
        Наш проект направлен на разработку и сборку передовой метеорологической
        антенны, которая обеспечит непревзойденную точность и надежность данных
        для анализа погодных условий. В основе нашего решения лежат новейшие
        технологии и инженерные достижения, которые гарантируют бесперебойную
        работу в самых экстремальных условиях.
      </div>
      <div className="second-form"></div>
      <Footer />
    </div>
  )
}

export default About
