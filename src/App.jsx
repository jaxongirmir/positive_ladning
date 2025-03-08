import { CaseCard } from './components/case_card/CaseCard'
import { Header } from './components/header/Header'
import { Partners } from './components/partners/Partners'
import Main from './pages/home/Main'

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
		</div>
	)
}
