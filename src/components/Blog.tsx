import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: '1',
      title: '2024 Yilgi Interyer Dizayni Trendlari',
      excerpt: 'Eng so\'nggi interyer dizayni trendlari va ularni uyingizda qo\'llash yo\'llari',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      author: 'Dilshod Rahimov',
      date: '2024-01-15',
      category: 'Dizayn'
    },
    {
      id: '2',
      title: 'Kichik Xonalarni Bezash Sirlari',
      excerpt: 'Kichik bo\'shliqlarni keng va qulay qilish uchun professional maslahatlar',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      author: 'Malika Karimova',
      date: '2024-01-12',
      category: 'Maslahat'
    },
    {
      id: '3',
      title: 'Ekologik Mebel: Tabiat va Komfort',
      excerpt: 'Atrof-muhitga zarar yetkazmaydigan va sog\'liq uchun foydali mebel tanlash',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
      author: 'Bobur Umarov',
      date: '2024-01-10',
      category: 'Ekologiya'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-800 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="group/btn flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-semibold transition-colors duration-300">
                  <span>Batafsil o'qish</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Barcha maqolalarni ko'rish
          </button>
        </div>
      </div>
    </section>
  );
}