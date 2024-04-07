import './Navbar.css'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Navbar()
{
    return <nav className="nav">
        <a to="/" className="site-title"> Site name</a>
        <ul>
            <CustomLink to="/about"> About </CustomLink>
            <CustomLink to="/predictor"> Predictor </CustomLink>
            <CustomLink to="/journal"> Journal </CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path : resolvedPath.pathname, end:true}); // end true to make sure the entire URL match
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
