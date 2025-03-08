import amazon from '../../assets/amazon_company.svg'
import dribble from '../../assets/dribble_company.svg'
import hubspot from '../../assets/hubspot_company.svg'
import netflix from '../../assets/netflix_company.svg'
import notion from '../../assets/notion_company.svg'
import zoom from '../../assets/zoom_company.svg'
import styles from './Partners.module.css'
export const Partners = () => {
	return (
		<div className={styles.partners}>
			<div className={styles.left_side}>
				<img src={amazon} alt='amazon company' />
				<img src={dribble} alt='dribble company' />
				<img src={hubspot} alt='dribble company' />
			</div>
			<div className={styles.right_side}>
				<img src={notion} alt='notion company' />
				<img src={netflix} alt='notion netflix' />
				<img src={zoom} alt='notion zoom' />
			</div>
		</div>
	)
}
