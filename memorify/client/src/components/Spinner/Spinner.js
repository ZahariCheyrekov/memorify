import ReactLoading from 'react-loading';

const Spinner = () => {
    const styles = {
        margin: "0 auto",
        display: "flex",
        width: "100px",
        height: "70vh",
        fill: "#ffffff"
    }

    return (
        < ReactLoading
            type="spin"
            style={styles}
        />
    );
}

export default Spinner;