import { AccordionComp } from '../../components/accordion_comp/AccordionComp'
import styles from './Accordions.module.css'
export default function Accordions() {
	const data = [
		{ num: '01', title: 'Consultation' },
		{ num: '02', title: 'Research and Strategy Development' },
		{ num: '03', title: 'Implementation' },
		{ num: '04', title: 'Monitoring and Optimization' },
		{ num: '05', title: 'Reporting and Communication' },
		{ num: '06', title: 'Continual Improvement' },
	]
	return (
		<div className={styles.accordions}>
			{data.map(item => (
				<AccordionComp key={item.num} num={item.num} title={item.title} />
			))}
		</div>
	)
}
