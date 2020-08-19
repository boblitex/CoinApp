import Link from 'next/link'
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <Link href="/">
                    <a className="navbar-brand" href="#">CoinApp</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-5" id="navbarColor02">
                    <ul className="navbar-nav mr-auto" style={{marginLeft:'50rem'}}>
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>

                        <li className="nav-item ml-5">
                            <Link href="/page">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    )



}
export default Nav