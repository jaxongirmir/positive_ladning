import contactImg from '../../assets/contact_img.svg'
import styles from './Contact.module.css'

export const Contact = () => {
	return (
		<>
			<div className={styles.contact}>
				<div className={styles.form}>
					<div className={styles.radio}>
						<label className={styles.round_one}>
							<input
								type='radio'
								name='radio-group'
								className={styles.radio_input}
								defaultChecked
							/>
							<div></div>
						</label>
						<p>Say Hi</p>
						<label className={styles.round_two}>
							<input
								type='radio'
								name='radio-group'
								className={styles.radio_input}
							/>
							<div></div>
						</label>
						<p>Get a Quote</p>
					</div>
					<div className={styles.input}>
						<label>
							Name
							<input type='text' placeholder='Name' />
						</label>
						<label>
							Email*
							<input type='email' placeholder='Email' />
						</label>
						<label>
							Message*
							<textarea placeholder='Message'></textarea>
						</label>
					</div>
					<button className={`${styles.btn} glb_btn`}>Send Message</button>
				</div>
				<div className={styles.img}>
					<img src={contactImg} alt='contact image' />
				</div>
			</div>
			<button className={`${styles.btn_mob} glb_btn`}>Send Message</button>
		</>
	)
}
