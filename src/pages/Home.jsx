import FeedbackItem from '../components/FeedbackItem';
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Modal from '../layouts/Modal';
import data from '../data/data.json';

const Home = () => {
  const isOpen = false;

  return (
    <div className='md:flex md:gap-[30px]'>
      <Sidebar />
      {isOpen && <Modal />}
      <div className='md:w-full'>
        <Header />
        <main className='mx-6 mt-8 flex flex-col gap-4 sm:mx-10 md:mx-0 md:mt-6'>
          {data.productRequests.map((item, index) => {
            const commentsCount = item.comments ? item.comments.length : 0;
            const repliesCount = item.comments
              ? item.comments.reduce((count, comment) => {
                  return count + (comment.replies ? comment.replies.length : 0);
                }, 0)
              : 0;
            const totalComments = commentsCount + repliesCount;

            return (
              <FeedbackItem
                key={index}
                title={item.title}
                description={item.description}
                category={item.category}
                upvotes={item.upvotes}
                comments={totalComments}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Home;
