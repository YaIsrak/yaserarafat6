export default function PorfolioProjectLink({ name, link }) {
	return (
		<li>
			<a href={link} className='link-light'>
				{name}
			</a>
		</li>
	);
}
