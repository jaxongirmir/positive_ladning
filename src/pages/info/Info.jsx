import info_img from '../../assets/info_img.svg'
import styles from './Info.module.css'
export default function Info() {
	return (
		<div className={styles.info}>
			<div className={styles.left_side}>
				<h3>Let’s make things happen</h3>
				<p>
					Contact us today to learn more about how our digital marketing
					services can help your business grow and succeed online.
				</p>
				<button className='glb_btn'>Get your free proposal</button>
			</div>
			<img src={info_img} alt='information image' />
		</div>
	)
}
