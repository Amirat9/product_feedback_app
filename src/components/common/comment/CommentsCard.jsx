import CommentItem from './CommentItem';
import data from '../../../data/data.json';

const CommentsCard = () => {
  const feedbackComments = data.productRequests[4];
  const comments = feedbackComments.comments;

  if (!comments) {
    return <div>No comments available.</div>;
  }

  return (
    <section className='bg-white rounded-[10px] p-6 sm:px-8'>
      <h3 className='h3 text-navy mb-4'>{comments.length} Comments</h3>
      <div className='flex flex-col gap-6'>
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`${
              index < comments.length - 1 ? 'border-b border-[#8c92b3]/25' : ''
            } pb-6 sm:pb-8`}
          >
            <CommentItem
              name={comment.user.name}
              username={comment.user.username}
              content={comment.content}
            />
            {comment.replies && (
              <div className='pl-6 mt-6 sm:mt-8'>
                {comment.replies.map((reply, replyIndex) => (
                  <CommentItem
                    key={replyIndex}
                    name={reply.user.name}
                    username={reply.user.username}
                    content={reply.content}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsCard;
