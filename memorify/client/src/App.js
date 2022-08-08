import './App.css';
import { AppBar, Container, Typography } from '@mui/material';

function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static">
                <Typography variant="h1">
                    Memorify
                </Typography>
            </AppBar>
        </Container>
    );
}

export default App;