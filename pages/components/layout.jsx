import Head from 'next/head';
import Nav from './navbar'

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>Coin App </title>
				<link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css" />
			</Head>
			<Nav />
			<div className="container">
				{props.children}
			</div>
		</div>
	)

}
export default Layout