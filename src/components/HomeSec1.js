import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function HomeSec1() {
	const { theme } = useContext(ThemeContext);

	return (
		<section className={`sec1 bg-${theme.bg} text-${theme.text}`} id='home'>
			<div className='container text-center'>
				<div className='row'>
					<div className='col-md-6 mt-40 md:m-auto py-5'>
						<h1 className='h1 fw-bold fs-1'>
							Hey,
							<br /> I'm <span className='text-primary'>Israk</span> 👋
						</h1>
						<p className='text-muted fw-light'>
							An Illustrator, developer and Designer located📍 in Bangladesh 🇧🇩
							and I love sharing my process online. 💙
						</p>
					</div>
					<div className='col-md-6'>
						<img
							className='img-fluid transform rotate-3 scale-100 hover:scale-105 mx-auto'
							style={{ width: '70%' }}
							alt='ProfilePicture'
							src='https://scontent.fspd5-1.fna.fbcdn.net/v/t39.30808-6/263423319_1222436844919870_3405729798880576010_n.jpg?stp=dst-jpg_s552x414&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE7rLcvXGEXI35MN8zR_GD9k5GyGq8quPOTkbIaryq489CR9L6iS4WyO_zudlyKgNQIDXfmMCYdmKn48HP8OOkS&_nc_ohc=sy4cFOTMpJ8AX-Ajf6-&tn=kXEYChV5Fy-Kannu&_nc_ht=scontent.fspd5-1.fna&oh=00_AT9ikAnIgYTBiCHNoFbY5GG3Jyac_zDGu5yIapjpltoPQQ&oe=62E26679'
						/>
					</div>
				</div>
				<div className='fs-5'>
					<p className='fw-light mx-auto py-5 my-5 w-4/5 md:w-1/2'>
						"Welcome to the home of my notes, resources, experiments, findings
						and <span className='fw-bold'>art, learning</span>
					</p>
				</div>
			</div>
		</section>
	);
}
