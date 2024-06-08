import FeedbackItem from '../components/FeedbackItem';
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Modal from '../layouts/Modal';
const Home = () => {
  const isOpen = false;
  return (
    <>
      <Sidebar />
      {isOpen && <Modal />}
      <Header />
      <main className='mx-6 mt-8 flex flex-col gap-4 sm:mx-10'>
        <FeedbackItem />
        <FeedbackItem />
      </main>
    </>
  );
};

export default Home;
