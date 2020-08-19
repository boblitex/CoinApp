import Layout from './components/layout.jsx'

const page = () => {
    return (
        <Layout>
            <div className = 'container'>
                <h1>About CoinApp</h1>
                <p>Neat little app to view bitcoin prices created by Jude the cool geek</p>
                <p>All price information are from Coindesk</p>
            </div>
        </Layout>
    )
}
export default page