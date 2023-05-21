import MatchList from './components/MatchList';
import TeamList from './components/TeamList';
import { Routes, Route } from 'react-router-dom';
import MatchDetail from './components/MatchDetail';
import StartPage from './pages/StartPage';
import './style/style.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/teams" element={<TeamList />} />
                <Route path="/matches" element={<MatchList />} />
                <Route path="/matches/:matchId" element={<MatchDetail />} />
            </Routes>
        </div>
    );
}

export default App;
