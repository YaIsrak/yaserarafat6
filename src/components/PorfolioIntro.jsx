export default function PorfolioIntro() {
	const link =
		'https://lh3.googleusercontent.com/CyYDvJRhaLSakQqq17tVM0AspebxBBazUflJsa7aodE5jyKbASoFQ4tXDGbk_nOjC3nIyLvPW8P2WqmjfVY407j9cs0m28DbEGGGKdmAaTtq46cVIY2dyvJ0WyS0EjZm5t__N_waAn6okDCS1NhU86hTBoDMnYLlKZ7t4GrEtRgmlipsPJwr6h4cvNiOeILCJNtW52cJfZu3ZBMdZzZuPMlPhaRKOH6_I-VNBrnNdbQ_ew6JFKLjY3KCGOr9h52tv7Gxhno2ZVWjq8rCVNsVokYBAl938puq8pNrrTmHqHyBWrrR4TulNDR5l7_Lb6BU7L8W3Y2EHkHaySSFY3ZOrge9mx5-Mi-yP-6761fpcJyi-fNw7AJ6xw-s6Wh7965DDihJstNi5DZ45rhuKlXeAupG1sU4TSM6DP2OKc1R4N18kT1T7XuKeCEX3v_ZrfC8lUXfUzMmQnkrXpgeR_qsGJtwVN7LpUl8rCqIzIBDgDqqM06ELAkAnw5l3aCUkpwgDWjRWrVG8yhiv7FztIxsPyrgrr5E1gqjgPvkRX-oallubbuGGfO-D2FGpryAgZgnwY4RKVs2LWoWCH9k5FHBaQtufcst06Z5ru9pzKXZk71UDTQhtct2I5QW0w57Cm0Fez85oacRMnwb90xVzS0bKud-ac5mPARQSdmjpSUlRzfvl12GMbwt5-lmW2bUsk-r2mT0nAlZglMjHVKDVK1mOFULT1Pl5XPu2KqMPCizWioZRII4ylH7iJCkC92otIGEwhIM-H7vJu3E1r9aKsTbqM_abb8IBBbGKG3jJMeBBPTxsOI0R0qknkpsiGvBNhuUTAKn=w1115-h502-no?authuser=2';
	return (
		<>
			<section
				style={{
					backgroundImage: `url("${link}")`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
				}}>
				<div className='container '>
					<h1 className='display-3 fw-bold text-white position-absolute top-50 start-50 translate-middle text-center'>
						<span>{'Welcome to my Porfolio'}</span>
					</h1>
				</div>
			</section>
			<hr />
		</>
	);
}
