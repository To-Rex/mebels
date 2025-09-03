import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: '1',
      title: '2024 Yilgi Interyer Dizayni Trendlari',
      excerpt: 'Eng so\'nggi interyer dizayni trendlari va ularni uyingizda qo\'llash yo\'llari haqida batafsil ma\'lumot',
      content: 'Bu yil interyer dizayni sohasida juda ko\'p yangiliklar paydo bo\'ldi...',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      author: 'Dilshod Rahimov',
      date: '2024-01-15',
      category: 'Dizayn',
      readTime: '5 daqiqa',
      tags: ['trend', 'dizayn', 'interyer']
    },
    {
      id: '2',
      title: 'Kichik Xonalarni Bezash Sirlari',
      excerpt: 'Kichik bo\'shliqlarni keng va qulay qilish uchun professional maslahatlar va amaliy yechimlar',
      content: 'Kichik xonalarni bezashda eng muhim narsa...',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      author: 'Malika Karimova',
      date: '2024-01-12',
      category: 'Maslahat',
      readTime: '7 daqiqa',
      tags: ['kichik xona', 'maslahat', 'optimallashtirish']
    },
    {
      id: '3',
      title: 'Ekologik Mebel: Tabiat va Komfort',
      excerpt: 'Atrof-muhitga zarar yetkazmaydigan va sog\'liq uchun foydali mebel tanlash bo\'yicha qo\'llanma',
      content: 'Ekologik mebel tanlashda e\'tibor berish kerak bo\'lgan asosiy mezonlar...',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
      author: 'Bobur Umarov',
      date: '2024-01-10',
      category: 'Ekologiya',
      readTime: '6 daqiqa',
      tags: ['ekologik', 'tabiat', 'sog\'liq']
    },
    {
      id: '4',
      title: 'Oshxona Dizayni: Funksionallik va Chiroyli Ko\'rinish',
      excerpt: 'Zamonaviy oshxona dizayni tamoyillari va amaliy maslahatlar',
      content: 'Oshxona - bu uyning yuragi...',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      author: 'Malika Karimova',
      date: '2024-01-08',
      category: 'Oshxona',
      readTime: '8 daqiqa',
      tags: ['oshxona', 'funksionallik', 'dizayn']
    },
    {
      id: '5',
      title: 'Yotoq Xonasi: Tinchlik va Qulaylik Maskani',
      excerpt: 'Yotoq xonasini qulay va tinch muhitga aylantirish bo\'yicha maslahatlar',
      content: 'Yaxshi uyqu uchun yotoq xonasi muhiti juda muhim...',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      author: 'Dilshod Rahimov',
      date: '2024-01-05',
      category: 'Yotoq xonasi',
      readTime: '4 daqiqa',
      tags: ['yotoq xonasi', 'uyqu', 'qulaylik']
    },
    {
      id: '6',
      title: 'Mebel Parvarishi: Uzoq Muddat Xizmat Qilishi Uchun',
      excerpt: 'Mebellaringizni uzoq muddat yangi ko\'rinishda saqlash bo\'yicha maslahatlar',
      content: 'Sifatli mebel uzoq yillar xizmat qilishi mumkin...',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
      author: 'Bobur Umarov',
      date: '2024-01-03',
      category: 'Parvarish',
      readTime: '5 daqiqa',
      tags: ['parvarish', 'saqlash', 'maslahat']
    }
  ];

  const categories = ['all', 'Dizayn', 'Maslahat', 'Ekologiya', 'Oshxona', 'Yotoq xonasi', 'Parvarish'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Maqolalarni qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Barcha kategoriyalar' : category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                className="relative h-64 lg:h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Asosiy maqola
                </div>
              </motion.div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('uz-UZ')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="group flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-semibold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Batafsil o'qish</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                {/* Post Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <motion.button 
                    className="group/btn flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-semibold transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Batafsil o'qish</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-gray-400 dark:text-gray-600 text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📝
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Hech qanday maqola topilmadi
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Qidiruv shartlarini o'zgartirib ko'ring
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ko'proq maqolalar yuklash
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}