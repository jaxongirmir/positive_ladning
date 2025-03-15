import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'
import vetor from '../../assets/Vector.png'
import vetorImg from '../../assets/Vector.svg'
import styles from './Courusel.module.css'

const testimonials = [
	{
		text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
		author: 'John Smith',
		position: 'Marketing Director at XYZ Corp',
	},
	{
		text: "Working with Positivus has transformed our digital marketing strategy. Their innovative approach and dedication to results have helped us achieve our business goals. The team's expertise in SEO and content marketing is exceptional.",
		author: 'Sarah Johnson',
		position: 'CEO at ABC Solutions',
	},
	{
		text: 'The level of service and expertise provided by Positivus has exceeded our expectations. They have helped us establish a strong online presence and generate quality leads. Their team is always available and ready to help.',
		author: 'Michael Brown',
		position: 'Founder of Tech Innovate',
	},
	{
		text: 'Positivus has been instrumental in growing our digital presence. Their strategic approach and attention to detail have resulted in measurable improvements in our online performance.',
		author: 'Emily Davis',
		position: 'Digital Manager at Global Tech',
	},
	{
		text: "The results we've achieved with Positivus have been remarkable. Their team's dedication and expertise have helped us reach new heights in our digital marketing efforts.",
		author: 'David Wilson',
		position: 'Operations Director at Future Brands',
	},
]

export default function TestimonialCarousel() {
	const [currentSlide, setCurrentSlide] = useState(-350)
	const [currentSlideMob, setCurrentSlideMob] = useState(0)
	const [currentImg, setCurrentImg] = useState(0)
	console.log(currentImg)

	const nextSlide = () => {
		setCurrentSlide(prev => prev + 606)
		setCurrentImg(p => p - 1)
		setCurrentSlideMob(p => p + 390)
	}

	const prevSlide = () => {
		setCurrentSlide(prev => prev - 606)
		setCurrentImg(p => p + 1)
		setCurrentSlideMob(p => p - 390)
	}
	console.log(currentSlideMob)

	return (
		<>
			<div className={styles.coursel_testimonial_mob}>
				<div className={styles.slide}>
					{testimonials.map((item, inx) => {
						return (
							<div
								className={styles.coursel}
								style={{ translate: currentSlideMob }}
								key={inx}
							>
								<div className={styles.text_mob}>{item.text}</div>
								<div className={styles.auth}>
									<div className={styles.bottom}>
										<h4>{item.author}</h4>
										<h4>{item.position}</h4>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className={styles.move_slide}>
					<button onClick={nextSlide} disabled={currentSlideMob >= 0}>
						<MoveLeft style={{ color: currentSlideMob >= 0 ? 'gray' : '' }} />
					</button>
					<div className={styles.Imgs}>
						<img src={currentImg <= 0 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 1 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 2 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 3 ? vetor : vetorImg} alt='' />
					</div>
					<button onClick={prevSlide} disabled={currentSlideMob == -1560}>
						<MoveRight
							style={{ color: currentSlideMob == -1560 ? 'gray' : '' }}
						/>
					</button>
				</div>
			</div>
			<div className={styles.coursel_testimonial}>
				<div className={styles.slide}>
					{testimonials.map((item, inx) => {
						return (
							<div
								className={styles.coursel}
								style={{ translate: currentSlide }}
								key={inx}
							>
								<div className={styles.text}>{item.text}</div>
								<div className={styles.auth}>
									<div className={styles.bottom}>
										<h4>{item.author}</h4>
										<h4>{item.position}</h4>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className={styles.move_slide}>
					<button onClick={nextSlide} disabled={currentSlide > 0}>
						<MoveLeft style={{ color: currentSlide > 0 ? 'gray' : '' }} />
					</button>
					<div className={styles.Imgs}>
						<img src={currentImg <= 0 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 1 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 2 ? vetor : vetorImg} alt='' />
						<img src={currentImg == 3 ? vetor : vetorImg} alt='' />
					</div>
					<button onClick={prevSlide} disabled={currentSlide < -1562}>
						<MoveRight style={{ color: currentSlide < -1562 ? 'gray' : '' }} />
					</button>
				</div>
			</div>
		</>
	)
}
