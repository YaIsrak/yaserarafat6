import About_Edu from './_sections/About_edu';
import About_Exp from './_sections/About_Exp';
import About_Sec1 from './_sections/About_Sec1';
import About_Skills from './_sections/About_skills';

export default function AboutPage() {
	return (
		<>
			<About_Sec1 />
			<About_Skills />
			<About_Edu />
			<About_Exp />
		</>
	);
}
