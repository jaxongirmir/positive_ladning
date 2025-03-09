import { CaseCard } from './components/case_card/CaseCard'
import { Header } from './components/header/Header'
import { Partners } from './components/partners/Partners'
import AboutUs from './pages/about_us/AboutUs'
import Cards from './pages/cards/Cards'
import Info from './pages/info/Info'
import Main from './pages/main/Main'

export default function App() {
	return (
		<div className='container'>
			<Header />
			<Main />
			<Partners />
			<CaseCard
				h2={'Services'}
				p={`At our digital marketing agency, we offer a range of services to help
					businesses grow and succeed online. These services include:`}
				width={580}
			/>
			<Cards />
			<Info />
			<CaseCard
				h2={'Case Studies'}
				p={
					'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
				}
				width={580}
			/>
			<AboutUs />
			<CaseCard
				h2={'Our Working  Process '}
				p={'Step-by-Step Guide to . Your Business Goals'}
				width={292}
			/>
			{/* <AccordionMy /> */}
		</div>
	)
}
