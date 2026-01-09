import React from 'react';

const newsItems = [
  {
    id: 1,
    category: 'PROMOTION',
    title: 'New A-Lann-Sar Friday Offers!',
    date: '12 Oct 2023',
    image: 'https://picsum.photos/400/250?random=1',
  },
  {
    id: 2,
    category: 'CSR',
    title: 'MPT Supports Flood Victims in Bago',
    date: '10 Oct 2023',
    image: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: 3,
    category: 'SERVICE',
    title: 'Upgrade to MPT Fiber Internet Today',
    date: '08 Oct 2023',
    image: 'https://picsum.photos/400/250?random=3',
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Latest <span className="text-mpt-blue">News & Promotions</span></h2>
            <div className="h-1 w-20 bg-mpt-yellow mt-2"></div>
          </div>
          <a href="#" className="text-mpt-blue font-medium hover:underline hidden sm:block">View All News &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-mpt-yellow text-mpt-blue text-xs font-bold px-3 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-mpt-blue transition-colors">
                  {item.title}
                </h3>
                <a href="#" className="text-mpt-blue text-sm font-bold uppercase tracking-wide hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;