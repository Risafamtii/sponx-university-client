import {useLocation, Link} from "react-router-dom";

const BreadCrumbs = () =>{
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter(x => x)

    return(
        <nav className="text-blue-900 my-4">
            <ul className="flex">
                <li>
                    <Link to="/" className="hover:text-blue-700 hover:underline">Overview</Link>
                </li>
                    {
                        pathnames.map((value, index) => {
                            const last = index === pathnames.length - 1
                            const to = `/${pathnames.slice(0, index + 1).join('>')}`
                            const title = value
                            return(
                                <li key={to}>
                                    <span className="mx-2"></span>
                                    {
                                        last ? (
                                            <span className="text-gray-700">{title}</span>
                                        ) : (
                                           <Link className="hover:text-blue-700 hover:underline" to={to}>{title}</Link> 
                                        )
                                    }
                                </li>
                            )
                        })
                    }
            </ul>
        </nav>
    )
}

export default BreadCrumbs