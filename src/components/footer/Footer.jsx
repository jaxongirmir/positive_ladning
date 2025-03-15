import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import logo from '../../assets/Logo.svg'
import in_img from '../../assets/Social icon.png'
import styles from './Footer.module.css'
export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.logo}>
					<img src={logo} alt='log image' />
				</div>
				<div className={styles.links}>
					<ul className='text_size'>
						<li>About us</li>
						<li>Services</li>
						<li>Use Cases</li>
						<li>Pricing</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className={styles.social_links}>
					<img src={in_img} alt='linkedin image' />
					<FaFacebook />
					<AiFillTwitterCircle />
				</div>
			</div>
			<div className={styles.center}>
				<div className={styles.left}>
					<div>
						<h4>Contact us:</h4>
					</div>
					<p>Email: info@positivus.com</p>
					<p>Phone: 555-567-8901</p>
					<p>
						Address: 1234 Main St <br />
						Moonstone City, Stardust State 12345
					</p>
				</div>
				<form className={styles.right}>
					<input type='email' placeholder='Email' />
					<button className='glb_btn'>Subscribe to news</button>
				</form>
			</div>
			<div className={styles.social_links_mob}>
				<img src={in_img} alt='linkedin image' />
				<FaFacebook />
				<AiFillTwitterCircle />
			</div>

			<div className={styles.bottom}>
				<div className={styles.p}>
					<p>© 2023 Positivus. All Rights Reserved.</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	)
}
