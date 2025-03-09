import { Box, Card, Typography } from '@mui/joy'
import { ArrowUpRight } from 'lucide-react'
import './AboutUs.css'

export const AboutMob = () => {
	const data = [
		{
			title:
				'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
		},
		{
			title:
				'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
		},
		{
			title:
				'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
		},
	]
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '20px',
				// py: 1,
				overflow: 'auto',
				width: '100%',
				scrollSnapType: 'x mandatory',
				'& > *': {
					scrollSnapAlign: 'center',
				},
				'::-webkit-scrollbar': { display: 'none' },
			}}
			className='about_mob'
		>
			{data.map(item => (
				<Card
					orientation='horizontal'
					size='sm'
					key={item.title}
					variant='outlined'
					sx={{
						border: 'none',
						padding: 0,
					}}
				>
					<Box
						sx={{
							background: 'var(--secondary-color)',
							padding: '42px 50px',
							borderRadius: '45px',
							width: '330px',
							translate: '20px 0',
						}}
					>
						<Typography
							level='title-md'
							sx={{
								color: 'var(--white)',
								fontSize: '16px',
								lineHeight: '24px',
							}}
						>
							{item.title}
						</Typography>
						<Typography
							level='body-sm'
							sx={{
								color: 'var(--primary-color)',
								padding: '20px 0 0',
								display: 'flex',
								gap: '15px',
								fontSize: '20px',
							}}
						>
							<span>Learn more</span> <ArrowUpRight />
						</Typography>
					</Box>
				</Card>
			))}
		</Box>
	)
}
