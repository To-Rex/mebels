import React from 'react';
import { Award, Users, Package, Clock } from 'lucide-react';
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-yellow-600 dark:text-yellow-400 mb-6 font-medium">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg"
                alt="About us"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Yillik tajriba</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}