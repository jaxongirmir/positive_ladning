import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import logoText from '../../assets/logo_text.png'
import styles from './Footer.module.css'
export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.logo}>
					<img src={logo} alt='log image' />
					<img src={logoText} alt=' text logo image' />
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
					{/* <img src={linkedIn} alt='linkedin image' />
					<img src={facebook} alt='facebook image' />
					<img src={twitter} alt='twitter image' /> */}
					<FaLinkedin />
					<FaFacebook />
					<FaTwitter
				</div>
			</div>
			<div className={styles.center}></div>
			<div className={styles.bottom}></div>
		</div>
	)
}
