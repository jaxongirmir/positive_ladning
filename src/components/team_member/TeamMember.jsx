import linkedIn_Icon from '../../assets/Team Social icon.png'
import styles from './TeamMember.module.css'
export const TeamMember = ({ img, name, subject, description }) => {
	return (
		<div className={styles.teammember}>
			<div className={styles.top_side}>
				<img src={img} alt='employee image' />
				<div className={styles.employee_info}>
					<h4>{name}</h4>
					<p>{subject}</p>
				</div>
				<img
					src={linkedIn_Icon}
					alt='team social icon image'
					className={styles.social_icon}
				/>
			</div>
			<div className={styles.bottom_side}>
				<p>{description}</p>
			</div>
		</div>
	)
}
