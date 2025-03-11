import { Partners } from '../../components/partners/Partners'
import AboutUs from '../../pages/about_us/AboutUs'
import Accordions from '../../pages/accordions/Accordions'
import Cards from '../../pages/cards/Cards'
import { Contact } from '../../pages/contact/Contact'
import Info from '../../pages/info/Info'
import Main from '../../pages/main/Main'
import Team from '../../pages/team/Team'
import { CaseCard } from '../case_card/CaseCard'
import { Header } from '../header/Header'
export const Home = () => {
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
			<Accordions />
			<CaseCard
				h2={'Team'}
				p={
					'Meet the skilled and experienced team behind our successful digital marketing strategies'
				}
				width={473}
			/>
			<Team />
			<CaseCard
				h2={'Testimonials'}
				p={
					'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
				}
				width={473}
			/>
			<CaseCard
				h2={'Contact Us'}
				p={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
				width={323}
			/>
			<Contact />
		</div>
	)
}
