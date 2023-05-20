import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MatchDetail() {
    const params = useParams();
    const matchId = params.matchId;

    const [match, setMatch] = useState(null);
    const [winningSide, setWinningSide] = useState(null);

    useEffect(() => {
        const fetchMatch = async () => {
            const result = await axios.get(`https://api.opendota.com/api/matches/${matchId}`);
            setMatch(result.data);
        };

        fetchMatch();
    }, [matchId]);

    useEffect(() => {
        if (match !== null) {
            const winningTeam = match.radiant_win ? 'Radiant' : 'Dire';
            setWinningSide(winningTeam);
        }
    }, [match]);

    // Функция для получения общей информации о матче
    const getMatchDetails = () => {
        if (match === null) {
            return null;
        }

        const durationInMinutes = Math.floor(match.duration / 60);
        const durationInSeconds = match.duration % 60;

        return (
            <div>
                <h1>{match && `Информация о матче ${match.match_id}`}</h1>
                <div>Победитель: {winningSide}</div>
                <table>
                    <tbody>
                        <tr>
                            <td>Режим:</td>
                            <td>{match.game_mode_name}</td>
                        </tr>
                        <tr>
                            <td>Счет по убийствам:</td>
                            <td>
                                {match.radiant_score} - {match.dire_score}
                            </td>
                        </tr>
                        <tr>
                            <td>ID матча:</td>
                            <td>{match.match_id}</td>
                        </tr>
                        <tr>
                            <td>Регион:</td>
                            <td>{match.region_name}</td>
                        </tr>
                        <tr>
                            <td>Навык:</td>
                            <td>{match.skill_name}</td>
                        </tr>
                        <tr>
                            <td>Длительность:</td>
                            <td>
                                {durationInMinutes} мин. {durationInSeconds} сек.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>Анализ</button>
                    <button>Загрузить запись</button>
                </div>
            </div>
        );
    };
    const getTeamData = (team) => {
        if (match === null) {
            return null;
        }

        const teamName = team === 'radiant' ? 'Radiant' : 'Dire';
        const players = match.players.filter((player) => player.isRadiant === (team === 'radiant'));

        const tableRows = players.map((player, index) => (
            <tr key={index}>
                <td>{player.name}</td>
                <td>{player.level}</td>
                <td>{player.kills}</td>
                <td>{player.deaths}</td>
                <td>{player.assists}</td>
                <td>
                    {player.last_hits} / {player.denies}
                </td>
                <td>{player.net_worth}</td>
                <td>
                    {player.gpm} / {player.xpm}
                </td>
                <td>{player.hero_damage}</td>
                <td>{player.tower_damage}</td>
                <td>{player.hero_healing}</td>
                <td>{player.items.join(', ')}</td>
                <td>{player.buffs.join(', ')}</td>
            </tr>
        ));

        return (
            <div>
                <h2>Статистика команды ({teamName})</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Игрок</th>
                            <th>LVL</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>LH/DN</th>
                            <th>Net Worth</th>
                            <th>GPM/XPM</th>
                            <th>Hero Damage</th>
                            <th>Tower Damage</th>
                            <th>Hero Healing</th>
                            <th>Предметы</th>
                            <th>Бафы</th>
                        </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            {getMatchDetails()}
            {getTeamData('radiant')}
            {getTeamData('dire')}
        </div>
    );
}

export default MatchDetail;
