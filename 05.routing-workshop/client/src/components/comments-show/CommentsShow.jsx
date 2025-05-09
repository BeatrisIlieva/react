export default function CommentsShow({ comments }) {
    return (
        <div className='details-comments'>
            <h2>Comments:</h2>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <li className='comment' key={comment._id}>
                            <p>{comment.email}: {comment.comment}</p>
                        </li>
                    ))
                ) : (
                    <p className='no-comment'>No comments.</p>
                )}
            </ul>
        </div>
    );
}
