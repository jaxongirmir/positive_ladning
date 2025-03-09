import Accordion from '@mui/joy/Accordion'
import AccordionDetails from '@mui/joy/AccordionDetails'
import AccordionGroup from '@mui/joy/AccordionGroup'
import AccordionSummary from '@mui/joy/AccordionSummary'

export default function AccordionMy() {
	const data = [
		{
			summary1: '01',
			summary2: 'Consultation',
			details:
				'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
		},
	]
	return (
		<AccordionGroup
			disableDivider
			sx={{
				margin: '80px 0',
				maxWidth: '100%',
			}}
		>
			{data.map(item => (
				<Accordion key={item.summary1}>
					<AccordionSummary
						sx={{
							padding: '41px 60px !imporntent',
							background: 'var(--secondary-color)',
						}}
					>
						<span>{item.summary1}</span> <span>{item.summary2}</span>
					</AccordionSummary>
					<AccordionDetails>{item.details}</AccordionDetails>
				</Accordion>
			))}
		</AccordionGroup>
	)
}
