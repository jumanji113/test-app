import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import './matchDetail.scss';

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
        const durationInHours = Math.floor(match.duration / 3600);
        const durationInMinutes = Math.floor(match.duration / 60);
        const durationInSeconds = match.duration % 60;

        const hoursString = durationInHours.toString().padStart(2, '0');
        const minutesString = durationInMinutes.toString().padStart(2, '0');
        const secondsString = durationInSeconds.toString().padStart(2, '0');

        const totalTimeString = `${hoursString}:${minutesString}:${secondsString}`;

        let region;
        switch (match.region) {
            case 0:
                region = 'US West';
                break;
            case 1:
                region = 'US East';
                break;
            case 2:
                region = 'Europe West';
                break;
            case 3:
                region = 'Europe East';
                break;
            case 5:
                region = 'Southeast Asia';
                break;
            case 6:
                region = 'Dubai';
                break;
            case 7:
                region = 'Australia';
                break;
            case 8:
                region = 'Russia';
                break;
            case 9:
                region = 'South America';
                break;
            case 10:
                region = 'South Africa';
                break;
            default:
                region = 'Unknown';
        }

        return (
            <div className="match-detail_title">
                <h1>Детальная информация матча</h1>
                <div className="match-detail_upper">
                    <div className="match-detail_upper-left">
                        {match.winningSide === 'Radiant' ? (
                            <img src="/img/Winner=Radiant.png" alt="" />
                        ) : (
                            <img src="/img/Winner=Dire.png" alt="" />
                        )}
                    </div>
                    <div className="match-detail_upper-center">
                        <div className="match-detail_upper-center-radiant">
                            {match.radiant_score}
                        </div>
                        <div className="match-detail_upper-center-mid">
                            <div className="match-detail_mode">All draft</div>
                            <h3>{totalTimeString}</h3>
                            <h4>Закончился 23 часа назад</h4>
                        </div>
                        <div className="match-detail_upper-center-dire">{match.dire_score}</div>
                    </div>
                    <div className="match-detail_upper-right">
                        <div className="match-detail_upper-right-info">
                            <h2>ID матча</h2>
                            <h3>{match.match_id}</h3>
                        </div>
                        <div className="match-detail_upper-right-info">
                            <h2>Регион</h2>
                            <h3>{region}</h3>
                        </div>
                        <div className="match-detail_upper-right-info">
                            <h2>Навык</h2> <h3>Unknow</h3>
                        </div>
                    </div>
                </div>
                <div className="match-detail_title-warning">
                    <img src="/img/warning.png" alt="warning-icon" />
                    <h2>
                        Запись этого матча не может быть проанализирована, так как недоступна вся
                        информация о матче
                    </h2>
                </div>
                <div className="match-detail_title-button">
                    <div className="match-detail_title-button-flex">
                        <button>
                            <img src="/img/loadingbutton1.png" alt="loadbutton" />
                            Анализ
                        </button>
                        <button>
                            <img src="/img/loadingbutton2.png" alt="loadbutton" />
                            Загрузить запись
                        </button>
                    </div>
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
                <td>
                    <img src="/img/Property 1=Default.jpg" alt="hero_logo" />
                </td>
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
                <td>{player.items && player.items.join(', ')}</td>
                <td>{player.buffs && player.buffs.join(', ')}</td>
            </tr>
        ));

        return (
            <div>
                <table>
                    <thead>
                        <tr className="table-tr_first">
                            <th>{teamName}</th>
                            <th>стастистика комманды</th>
                            <th>
                                {teamName === 'Radiant' && match.radiant_win ? (
                                    <button>Победители</button>
                                ) : (
                                    <button>Проигравшие</button>
                                )}
                            </th>
                        </tr>
                        <tr className="table-tr_two">
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
        <div className="match-detail">
            <NavBar />
            <div className="match-detail_content">
                {getMatchDetails()}
                {getTeamData('radiant')}
                {getTeamData('dire')}
            </div>
            <Footer />
        </div>
    );
}

export default MatchDetail;
