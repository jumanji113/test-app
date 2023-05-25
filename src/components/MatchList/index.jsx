import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './matchList.scss';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../NavBar';

function MatchList() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMatches = async () => {
            try {
                const result = await axios.get('https://api.opendota.com/api/publicMatches');
                console.log(result);
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
            const result = await axios.get('https://api.opendota.com/api/publicMatches', {
                params: {
                    limit: 10,
                },
            });

            setMatches([...matches, ...result.data]);
            setLoading(false);
        } catch (error) {
            console.error('Error loading more matches:', error);
        }
    };

    return (
        <div className="match-list">
            <Navbar />
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
                        <tr>
                            <td className="match-id">{match.match_id}</td>
                            <td>{(match.duration / 60).toFixed(2)} мин.</td>
                            <td>
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                            </td>
                            <td>
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                                <img
                                    className="match-img"
                                    src={process.env.PUBLIC_URL + '/img/Property 1=Default.jpg'}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading ? <p>Загрузка...</p> : <button onClick={loadMore}>Загрузить еще</button>}
            <Footer />
        </div>
    );
}

export default MatchList;
