import './Home.css';
import beachSunglasses from '../../assets/beach-sunglasses.jpg';

const Home = () => {
    return (
        <main className="home__main">
            <div className="home__body">
                <h1 className="home__title">
                    Welcome to Memorify
                </h1>

                <p className="home__content">
                    A place where people can share more about their favorite memories
                    with others and have a great time!
                </p>

                <ul className="home__ul">
                    <li className="home__li--item">
                        Explore other people memories
                    </li>
                    <li className="home__li--item">
                        Share your memories
                    </li>
                    <li className="home__li--item">
                        Like other memories
                    </li>
                    <li className="home__li--item">
                        Have fun
                    </li>
                    <li className="home__li--item">
                        Learn new things
                    </li>
                </ul>
            </div>

            <article className="home__img">
                <img src={beachSunglasses} alt="sunglasses" />
            </article>
        </main>
    );
}

export default Home;