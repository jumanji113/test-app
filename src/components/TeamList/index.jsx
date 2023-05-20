import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamList() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadTeams = async () => {
            const result = await axios.get('https://api.opendota.com/api/teams');
            setTeams(result.data.slice(0, 10)); // выбираем только первые 10 команд
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
        <div>
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
                                <small>{`Последняя игра: ${new Date(
                                    team.last_match_time * 1000,
                                ).getDate()}.${
                                    new Date(team.last_match_time * 1000).getMonth() + 1
                                }.${new Date(team.last_match_time * 1000).getFullYear()} ${new Date(
                                    team.last_match_time * 1000,
                                ).getHours()}:${new Date(
                                    team.last_match_time * 1000,
                                ).getMinutes()}`}</small>
                            </td>
                            <td>{team.rating}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading ? <p>Загрузка...</p> : <button onClick={loadMore}>Загрузить еще</button>}
        </div>
    );
}

export default TeamList;
