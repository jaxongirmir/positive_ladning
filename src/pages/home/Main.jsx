import home_img from '../../assets/home_img.svg'
import styles from './Main.module.css'
export default function Main() {
	return (
		<div className={styles.home}>
			<h1 className={`${styles.h1} ${styles.h1_mob}`}>
				Navigating the digital landscape for success
			</h1>
			<div className={styles.home_texts}>
				<h1 className={styles.h1}>
					Navigating the digital landscape for success
				</h1>
				<p className='text_size'>
					Our digital marketing agency helps businesses grow and succeed online
					through a range of services including SEO, PPC, social media
					marketing, and content creation.
				</p>
				<button className='glb_btn'>Book a consultation</button>
			</div>
			<div className={styles.home_img}>
				<img src={home_img} alt='home image' />
			</div>
		</div>
	)
}
