import { Link, withRouter } from 'react-router-dom';

const ExtendedLink = ({ to, className, children, location }) => {
    return <Link to={{
        pathname: to,
        search: location.search
    }} className={className}>{children}</Link>
};

const ELink = withRouter(ExtendedLink);

export default ELink;