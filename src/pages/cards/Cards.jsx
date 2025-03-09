import card_img_1 from '../../assets/card_img_1.svg'
import card_img_2 from '../../assets/card_img_2.svg'
import card_img_3 from '../../assets/card_img_3.svg'
import card_img_4 from '../../assets/card_img_4.svg'
import card_img_5 from '../../assets/card_img_5.svg'
import card_img_6 from '../../assets/card_img_6.png'
import { Card } from '../../components/card/Card'
import styles from './Cards.module.css'

export default function Cards() {
	return (
		<div className={styles.cards}>
			<Card
				bg_color={'var(--gray-color)'}
				h3_1={'Search engine'}
				h3_2={'optimization'}
				h3_bg_color={'var(--primary-color)'}
				img={card_img_1}
				l_color={'#000'}
				arrow_collor={'var(--primary-color)'}
			/>
			<Card
				bg_color={'var(--primary-color)'}
				h3_1={'Pay-per-click'}
				h3_2={'advertising'}
				h3_bg_color={'var(--white)'}
				img={card_img_2}
				l_color={'#000'}
				arrow_collor={'var(--primary-color)'}
			/>
			<Card
				bg_color={'var(--secondary-color)'}
				h3_1={'Social Media'}
				h3_2={'Marketing'}
				h3_bg_color={'var(--white)'}
				img={card_img_3}
				arrow_collor={'var(--secondary-color)'}
			/>
			<Card
				bg_color={'var(--gray-color)'}
				h3_1={'Email'}
				h3_2={'Marketing'}
				h3_bg_color={'var(--primary-color)'}
				img={card_img_4}
				l_color={'#000'}
				arrow_collor={'var(--primary-color)'}
			/>
			<Card
				bg_color={'var(--primary-color)'}
				h3_1={'Content'}
				h3_2={'Creation'}
				h3_bg_color={'var(--white)'}
				img={card_img_5}
				l_color={'#000'}
				arrow_collor={'var(--primary-color)'}
			/>
			<Card
				bg_color={'var(--secondary-color)'}
				h3_1={'Analytics and '}
				h3_2={'Tracking'}
				h3_bg_color={'var(--primary-color)'}
				img={card_img_6}
				l_color={'var(--white)'}
				arrow_collor={'var(--secondary-color)'}
			/>
		</div>
	)
}
