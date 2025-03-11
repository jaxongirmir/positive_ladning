import imployee01 from '../../assets/employee01.svg'
import { TeamMember } from '../../components/team_member/TeamMember'
import styles from './Team.module.css'
export default function Team() {
	const data = [
		{
			img: imployee01,
			name: 'John Smith',
			subject: 'CEO and Founder',
			description:
				'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
		},
		{
			img: imployee01,
			name: 'Jane Doe',
			subject: 'Director of Operations',
			description:
				'7+ years of experience in project management and team leadership. Strong organizational and communication skills',
		},
		{
			img: imployee01,
			name: 'Michael Brown',
			subject: 'Senior SEO Specialist',
			description:
				'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
		},
		{
			img: imployee01,
			name: 'Emily Johnson',
			subject: 'PPC Manager',
			description:
				'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
		},
		{
			img: imployee01,
			name: 'Brian Williams',
			subject: 'Social Media Specialist',
			description:
				'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
		},
		{
			img: imployee01,
			name: 'Sarah Kim',
			subject: 'Content Creator',
			description:
				'2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
		},
	]
	return (
		<div className={styles.team}>
			{data.map(item => (
				<TeamMember
					key={item.name}
					img={item.img}
					name={item.name}
					subject={item.subject}
					description={item.description}
				/>
			))}
		</div>
	)
}
