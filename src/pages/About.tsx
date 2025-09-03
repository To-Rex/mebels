import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Package, Clock, Target, Heart, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Clock,
      value: '25+',
      label: t('about.experience'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Package,
      value: '1000+',
      label: t('about.products'),
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Users,
      value: '5000+',
      label: t('about.clients'),
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Mukofotlar',
      color: 'text-yellow-600 dark:text-yellow-400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Maqsadga Yo'nalganlik",
      description: "Har bir mijozning ehtiyojlarini to'liq qondirish bizning asosiy maqsadimiz",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Heart,
      title: "Sevgi va G'amxo'rlik",
      description: "Har bir mahsulotni sevgi va g'amxo'rlik bilan tayyorlaymiz",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Shield,
      title: "Ishonch va Kafolat",
      description: "Barcha mahsulotlarimizga uzoq muddatli kafolat beramiz",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Zap,
      title: "Innovatsiya",
      description: "Zamonaviy texnologiya va yangi yechimlarni qo'llaymiz",
      color: "text-yellow-600 dark:text-yellow-400"
    }
  ];

  const team = [
    {
      name: "Dilshod Rahimov",
      role: "Bosh direktor",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      description: "25 yillik tajriba bilan mebel sohasida etakchi mutaxassis"
    },
    {
      name: "Malika Karimova",
      role: "Dizayn direktori",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      description: "Interyer dizayni bo'yicha xalqaro sertifikatga ega mutaxassis"
    },
    {
      name: "Bobur Umarov",
      role: "Ishlab chiqarish direktori",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      description: "Sifat nazorati va ishlab chiqarish jarayonlari bo'yicha ekspert"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="font-serif text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('about.title')}
              </motion.h1>
              <motion.p 
                className="text-xl text-yellow-600 dark:text-yellow-400 mb-6 font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('about.subtitle')}
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('about.description')}
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      </motion.div>
                      <motion.div 
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                        animate={{ 
                          textShadow: [
                            "0 0 0px rgba(217, 119, 6, 0)",
                            "0 0 10px rgba(217, 119, 6, 0.3)",
                            "0 0 0px rgba(217, 119, 6, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg"
                  alt="About us"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-yellow-600 dark:text-yellow-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    25+
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Yillik tajriba</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Bizning Qadriyatlarimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Biz quyidagi tamoyillar asosida ishlaymiz va rivojlanamiz
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 flex items-center justify-center ${value.color} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Bizning Jamoa
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional va tajribali mutaxassislar jamoasi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Bizning Jamoaga Qo'shiling
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Agar siz ham sifatli mebel yaratishga qiziqsangiz, biz bilan bog'laning
            </p>
            <motion.button
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Biz Bilan Bog'laning
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}