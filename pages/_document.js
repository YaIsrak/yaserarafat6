import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* for seo */}
				<meta name='name' content='MD Yaser Arafat Israk' />
				<meta name='description' content='A digital artist located in Bangladesh' />
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
				<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'></script>
			</body>
		</Html>
	);
}
