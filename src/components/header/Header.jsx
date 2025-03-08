import { Menu } from 'lucide-react'
import logo from '../../assets/logo.png'
import logo_text from '../../assets/logo_text.png'
import styles from './Header.module.css'
export const Header = () => {
	return (
		<div className={`${styles.header}`}>
			<div className={styles.logo}>
				<img src={logo} alt='logo img' />
				<img src={logo_text} alt='logo text' />
			</div>
			<div className={styles.links}>
				<ul className='text_size'>
					<li>About us</li>
					<li>Services</li>
					<li>Use Cases</li>
					<li>Pricing</li>
					<li>Blog</li>
				</ul>
				<button className='glb_btn'>Request a quote</button>
			</div>
			<Menu />
		</div>
	)
}
