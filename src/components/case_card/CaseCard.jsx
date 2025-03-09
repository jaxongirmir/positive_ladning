import styles from './CaseCard.module.css'
export const CaseCard = ({ h2, p, width }) => {
	return (
		<div className={styles.case_card}>
			<div>
				<h2>{h2}</h2>
			</div>
			<p style={{ width: width }}>{p}</p>
		</div>
	)
}
