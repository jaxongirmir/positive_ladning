import styles from './AccordionComp.module.css'
export const AccordionComp = ({ num, title }) => {
	return (
		<div className={styles.accordioncomp}>
			<div>
				<p>{num}</p>
				<p>{title}</p>
			</div>
			<div>
				<p className={styles.circle_plus}>+</p>
			</div>
		</div>
	)
}
