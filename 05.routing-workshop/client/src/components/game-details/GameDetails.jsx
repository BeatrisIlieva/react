import { useParams, useNavigate, Link } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import gameService from '../../services/gameService';

import CommentsShow from '../comments-show/CommentsShow';
import CommentsCreate from '../comments-create/CommentsCreate';
import commentService from '../../services/commentService';
import { UserContext } from '../../contexts/UserContexts';

export default function GameDetails() {
    const { email } = useContext(UserContext);
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getOne(gameId).then((result) => setGame(result));
        commentService.getAll(gameId).then((result) => setComments(result));
    }, [gameId]);

    const deleteHandler = () => {
        gameService.delete(gameId).then(() => navigate('/games'));
    };

    const commentCreateHandler = (newComment) => {
        setComments((state) => [...state, newComment]);
    };

    return (
        <section id='game-details'>
            <h1>Game Details</h1>
            <div className='info-section'>
                <div className='game-header'>
                    <img className='game-img' src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className='levels'>MaxLevel: {game.maxLevel}</span>
                    <p className='type'>{game.category}</p>
                </div>

                <p className='text'>{game.summary}</p>

                <CommentsShow comments={comments} />

                <CommentsCreate
                    email={email}
                    gameId={gameId}
                    onCreate={commentCreateHandler}
                />

                <div className='buttons'>
                    <Link to={`/games/${gameId}/update`} className='button'>
                        Edit
                    </Link>
                    <button className='button' onClick={deleteHandler}>
                        Delete
                    </button>
                </div>
            </div>
        </section>
    );
}
