import FooterP from './FooterP';

export default function Footer() {
	const songLists = [
		{
			name: 'E hawa',
			link: 'https://open.spotify.com/track/5VIyjOoXddMARgRTtKVqXc?si=e776c9afbbc24e59',
		},
		{
			name: 'Loki green theme',
			link: 'https://open.spotify.com/track/5T7DUEeAj0hkMLTzIlDCRz?si=045eedd5c76d4c05',
		},
		{
			name: 'Marry go round of Life',
			link: 'https://open.spotify.com/track/3cIKojC2JBVIno9b35MJWn?si=9f4e0db3811e4ed1',
		},
		{
			name: 'Katware Doki',
			link: 'https://open.spotify.com/track/4WedBZTeFawYCBCgfj36iK?si=68aa41933c7f4183',
		},
		{
			name: 'Utshorgo',
			link: 'https://open.spotify.com/track/7tcHBMra1AZ3QWIHX3hX0r?si=7756f09bc62e4dff',
		},
		{
			name: 'Blinding Light',
			link: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=44ada2d436d34fac',
		},
	];
	return (
		// <footer className={`font-mono bg-${theme.bg} text-${theme.text}`}>
		<footer className='font-mono bg-white text-dark'>
			<div className='container'>
				<img
					alt='GIF'
					src='https://data.whicdn.com/images/243225230/original.gif'
				/>
				<p className='text-muted fs-3'>{'// Made with'}</p>
				<div className='row'>
					<div className='col-4 code'>
						<br />
						<FooterP>{'</>'}</FooterP>
						<br />
						<br />
						<FooterP>Bootstrap</FooterP>
						<FooterP>Tailwind CSS</FooterP>
						<FooterP>React.js</FooterP>
						<FooterP>React Router Dom</FooterP>
						<FooterP>Fisebase</FooterP>
						<FooterP>Adobe XD</FooterP>
					</div>
					<div className='col-4 expe'>
						<br />
						<FooterP>{'~'}</FooterP>
						<br />
						<br />
						<FooterP>+5h of thinking</FooterP>
						<FooterP>+30h of code</FooterP>
						<FooterP>React Router Dom</FooterP>
						<FooterP>+10 of code crash</FooterP>
					</div>
					<div className='col-4 song'>
						<br />
						<FooterP>🎵</FooterP>
						<br />
						<br />
						{songLists.map((songList, index) => (
							<FooterP className='hover:bg-purple-500/20' key={index}>
								<a href={songList.link}>{songList.name}</a>
							</FooterP>
						))}
					</div>
				</div>
				<div className='my-8'>
					<h1 className='h3'>Thanks for checking my website!</h1>
					<p className='text-muted font-mono text-sm lg:text-lg'>
						{"// It's a work in progress so check back often!"}
					</p>
				</div>
			</div>
		</footer>
	);
}
