import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './matchList.scss';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function MatchList() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMatches = async () => {
            try {
                const result = await axios.get('https://api.opendota.com/api/publicMatches');
                if (result && result.data) {
                    setMatches(result.data.slice(0, 10));
                }
            } catch (error) {
                console.error('Error loading matches:', error);
            }
        };
        loadMatches();
    }, []);

    const loadMore = async () => {
        setLoading(true);
        try {
            const result = await axios.get(
                `https://api.opendota.com/api/publicMatches?offset=${matches.length}`,
            );
            if (result && result.data) {
                setMatches([...matches, ...result.data]);
            }
        } catch (error) {
            console.error('Error loading more matches:', error);
        } finally {
            setLoading(false);
        }
    };

    const getHeroImage = (heroId) => {
        return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${heroId}_full.png`;
    };

    const getTeamImages = (team) => {
        return Object.values(team).map((player) => (
            <img
                src={getHeroImage(player.hero_id)}
                alt="Player"
                key={player.account_id}
                width="30"
                height="30"
            />
        ));
    };

    return (
        <div>
            <h1>Список матчей</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Длительность</th>
                        <th>Radiant</th>
                        <th>Dire</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match) => (
                        <Link to={`/matches/${match.match_id}`} key={match.match_id}>
                            <tr>
                                <td>{match.match_id}</td>
                                <td>{(match.duration / 60).toFixed(2)} мин.</td>
                                <td>{match.teams && getTeamImages(match.teams.radiant)}</td>
                                <td>{match.teams && getTeamImages(match.teams.dire)}</td>
                            </tr>
                        </Link>
                    ))}
                </tbody>
            </table>

            {matches && matches.length >= 10 ? null : (
                <button onClick={loadMore}>{loading ? 'Загрузка...' : 'Загрузить еще'}</button>
            )}
            <Footer />
        </div>
    );
}

export default MatchList;
