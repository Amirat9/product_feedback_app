import Category from '@/components/ui/CategoryFilter';
const CategoryCard = () => {
  const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  return (
    <div className='bg-white p-6 items-center flex-wrap gap-x-2 gap-y-[14px] rounded-[10px] flex-1 h-full hidden sm:flex'>
      {categories.map((category, index) => (
        <Category
          key={index}
          name={category}
        />
      ))}
    </div>
  );
};

export default CategoryCard;
