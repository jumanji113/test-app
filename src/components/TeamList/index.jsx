import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import Navbar from '../NavBar';
import './teamList.scss';

function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadTeams = async () => {
            try {
                const result = await axios.get('https://api.opendota.com/api/teams');
                setTeams(result.data.slice(0, 10));
            } catch (error) {
                console.error('Error loading matches:', error);
            }
            // выбираем только первые 10 команд
        };
        loadTeams();
    }, []);

    const loadMore = async () => {
        setLoading(true);
        const result = await axios.get('https://api.opendota.com/api/teams', {
            params: {
                limit: 10,
            },
        });

        setTeams([...teams, ...result.data]);
        setLoading(false);
    };

    return (
        <div className="team-list">
            <Navbar />
            <h1>Список команд</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ранг</th>
                        <th>Название команды</th>
                        <th>Рейтинг</th>
                        <th>Победы</th>
                        <th>Проигрыши</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.team_id}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={team.logo_url}
                                    alt="Лого команды"
                                    width="30"
                                    height="30"
                                />
                                {team.name}
                                <br />
                                <small>{`Последняя игра: ${
                                    Math.round(
                                        (Date.now() - team.last_match_time * 1000) /
                                            (1000 * 60 * 60 * 24),
                                    ) > 30
                                        ? new Date(team.last_match_time * 1000).getDate() +
                                          '.' +
                                          (new Date(team.last_match_time * 1000).getMonth() + 1) +
                                          '.' +
                                          new Date(team.last_match_time * 1000).getFullYear()
                                        : Math.round(
                                              (Date.now() - team.last_match_time * 1000) /
                                                  (1000 * 60 * 60 * 24),
                                          ) + ' дней назад'
                                }`}</small>
                            </td>
                            <td>{team.rating}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading ? <p>Загрузка...</p> : <button onClick={loadMore}>Загрузить еще</button>}
            <Footer />
        </div>
    );
}

export default TeamList;
