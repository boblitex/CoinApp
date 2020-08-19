import Layout from './components/layout.jsx'
import Price from './components/price.jsx'
import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'



const Index = ({ bpi }) => {
    const [curr, setcurr] = useState('USD')
    const bpiArray = Object.entries({ bpi });
    const filter = Object.entries(bpiArray[0][1])
    const filtered = filter.filter((item) => item[0] === curr)
    const flat = filtered.flat()

    const toUsd = () => {
        setcurr('USD')
    }
    const toGbp = () => {
        setcurr('GBP')

    }
    const toEur = () => {
        setcurr('EUR')

    }

    return (
        <Layout>
            <div className='d-flex flex-column align-items-center'>
                <h1> <span className="font-weight-bold">
                    <img src="/images/btc.png" alt="bitcoin" /></span>
                     BITCOIN PRICE TODAY
                </h1>
                <Price
                    currency={flat[0]}
                    paper={flat[1].description}
                    symbol={flat[1].symbol.slice(0, -1)}
                    price={flat[1].rate_float}
                />
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#F3969A' }}>
                        Select Currency
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={toUsd}>United States Dollars</Dropdown.Item>
                        <Dropdown.Item onClick={toGbp}>Great Britain Pounds</Dropdown.Item>
                        <Dropdown.Item onClick={toEur}>European Euros</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Layout>
    )
}
Index.getInitialProps = async ({ req }) => {
    const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await result.json()
    return {
        bpi: data.bpi
    }

}
export default Index
