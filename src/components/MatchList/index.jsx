import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MatchList() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMatches = async () => {
            const result = await axios.get('https://api.opendota.com/api/publicMatches');
            if (result.data) {
                setMatches(result.data.slice(0, 10));
            }
        };
        loadMatches();
    }, []);

    const loadMore = async () => {
        setLoading(true);
        const result = await axios.get(
            `https://api.opendota.com/api/publicMatches?offset=${matches.length}`,
        );
        if (result.data) {
            setMatches([...matches, ...result.data]);
        }
        setLoading(false);
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

    // const getMatchDetails = async (matchId) => {
    //     const result = await axios.get(`https://api.opendota.com/api/matches/${matchId}`);
    //     if (result.data) {
    //         console.log(result.data.radiant_team); // информация об игроках Radiant
    //         console.log(result.data.dire_team); // информация об игроках Dire
    //     }
    // };

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
                        <tr key={match.match_id}>
                            <td>
                                <Link to={`/matches/${match.match_id}`}>{match.match_id}</Link>
                            </td>
                            <td>{match.duration} сек.</td>
                            <td>{getTeamImages(match.teams.radiant)}</td>
                            <td>{getTeamImages(match.teams.dire)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {matches && matches.length >= 10 ? null : (
                <button onClick={loadMore}>{loading ? 'Загрузка...' : 'Загрузить еще'}</button>
            )}
        </div>
    );
}

export default MatchList;
