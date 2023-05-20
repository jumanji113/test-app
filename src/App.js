import MatchList from './components/MatchList';
import StartPage from './components/StartPage';
import TeamList from './components/TeamList';
import './style/style.scss';
import { Routes, Route } from 'react-router-dom';
import MatchDetail from './components/MatchDetail';

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
