import { ArrowUpRight } from 'lucide-react'
import { AboutMob } from './AboutMob'
import './AboutUs.css'
export default function AboutUs() {
	return (
		<>
			<div className={'about'}>
				<div className={'line'}>
					<div className={'about_text'}>
						<p>
							For a local restaurant, we implemented a targeted PPC campaign
							that resulted in a 50% increase in website traffic and a 25%
							increase in sales.
						</p>
						<p>
							<span>Learn more</span> <ArrowUpRight />
						</p>
					</div>
				</div>
				<div className={'line'}>
					<div className={'about_text'}>
						<p>
							For a B2B software company, we developed an SEO strategy that
							resulted in a first page ranking for key keywords and a 200%
							increase in organic traffic.
						</p>
						<p>
							<span>Learn more</span> <ArrowUpRight />
						</p>
					</div>
				</div>
				<div className='about_text'>
					<p>
						For a national retail chain, we created a social media marketing
						campaign that increased followers by 25% and generated a 20%
						increase in online sales.
					</p>
					<p>
						<span>Learn more</span> <ArrowUpRight />
					</p>
				</div>
			</div>
			<AboutMob />
		</>
	)
}
