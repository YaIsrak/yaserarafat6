export default function PortfolioSec1() {
	const artsPhoto = [
		{
			photoLink:
				'https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/288990678_870607304319442_4611487276021403139_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7n9cTB5l_NL1Y9hOCGywNCLjA6rfypGMIuMDqt_KkY082GtyGSWfJ6ksnRmayGn5Fa7XUzZbt6LXcQptFEFEd&_nc_ohc=v0yZC4Y_XkcAX9FtAbh&_nc_ht=scontent.fspd5-1.fna&oh=00_AT_6j3Ai51nRCUuPQg5XQ_XIXChp7e8JNIYozO7GkzpNWQ&oe=62E34CCE',
		},
		{
			photoLink:
				'https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/281967720_849550213091818_6246410716383637998_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwwcKUdV18nuajjslVAILwKuphwdIv2qYq6mHB0i_apgOWYtGoDvzNX_rfH_KCoFy42ywHjuxzmH1D56DW4Nbg&_nc_ohc=ftmW2_c9eecAX8XLoSM&_nc_ht=scontent.fspd5-1.fna&oh=00_AT-a_GZM2sdJkXp4EiRays2vFOF_H22uS-n3SpC8cXnkww&oe=62E38EEF',
		},
		{
			photoLink:
				'https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/278585899_830364785010361_7723924948899654466_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFivoLktnQN8Y5yWjn2_71e644-YDMoLsXrjj5gMyguxeNYao6Y3M0ZSwoKEnVB3KOtk2ONt0TSATiQlMfmA7_U&_nc_ohc=KpCUn0LjHaoAX_Av5_5&tn=kXEYChV5Fy-Kannu&_nc_ht=scontent.fspd5-1.fna&oh=00_AT_E5c-G4BQ-3wswbJRh3SKzLuIChXnDNGdJotl-322HuQ&oe=62E2A4E1',
		},
	];

	return (
		<section className='sec2' id='portfolio'>
			<div className='container'>
				<h1 className='h1 fw-bold'>Digital art and art concepts</h1>
				<p className='text-muted'>
					A collection of idea on painting and drawings 🎨
				</p>
				<div className='row art-gallery'>
					{artsPhoto.map((artPhoto, index) => (
						<img
							className='col-4'
							alt='hehe'
							src={artPhoto.photoLink}
							key={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
