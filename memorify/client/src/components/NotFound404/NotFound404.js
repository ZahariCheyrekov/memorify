import './NotFound404.css';

const NotFound404 = () => {
    return (
        <section className="section__not--found">
            <h1 className="not__found--code">
                404
            </h1>
            <h3 className="not__found--error">
                Not Found
            </h3> 
            <h4 className="not__found--error--message">
                The resource requested could not be found on this server  :(
            </h4>
        </section>
    );
}

export default NotFound404;