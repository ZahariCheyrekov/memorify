import './App.css';
import { AppBar, Container, Typography } from '@mui/material';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';

function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static">
                <Typography variant="h1">
                    Memorify
                </Typography>
            </AppBar>
            <Cards />
            <Form />
        </Container>
    );
}

export default App;