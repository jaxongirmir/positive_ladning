import { FiArrowUpRight } from 'react-icons/fi'
import styles from './Card.module.css'
export const Card = ({
	h3_1,
	h3_2,
	l_color,
	h3_bg_color,
	bg_color,
	arrow_collor,
	img,
}) => {
	const iconStyles = {
		width: 41,
		height: 41,
		borderRadius: '50%',
		backgroundColor: l_color || h3_bg_color,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
	return (
		<div className={styles.card} style={{ background: bg_color }}>
			<div className={styles.info_card}>
				<div className={styles.h3}>
					<h3 style={{ background: h3_bg_color }}>{h3_1}</h3>
					<h3 style={{ background: h3_bg_color }}>{h3_2}</h3>
				</div>
				<div className={styles.learn_more}>
					<div style={iconStyles} className={styles.arrow}>
						<FiArrowUpRight color={arrow_collor} />
					</div>
					<p style={{ color: l_color || h3_bg_color }}>Learn more</p>
				</div>
			</div>
			<div className={styles.img_card}>
				<div style={iconStyles} className={styles.arrow_mob}>
					<FiArrowUpRight color={arrow_collor} />
				</div>
				<img src={img} alt='card image' />
			</div>
		</div>
	)
}
