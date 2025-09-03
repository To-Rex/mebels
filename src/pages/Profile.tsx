import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit, Save, X, ShoppingBag, Heart, Settings, LogOut, Camera } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, login, register, logout, updateProfile, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);

  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (authMode === 'login') {
        await login(authData.email, authData.password);
      } else {
        if (authData.password !== authData.confirmPassword) {
          alert('Parollar mos kelmaydi!');
          return;
        }
        await register(authData.name, authData.email, authData.password);
      }
      setShowAuthModal(false);
      setAuthData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'orders', label: 'Buyurtmalar', icon: ShoppingBag },
    { id: 'favorites', label: 'Sevimlilar', icon: Heart },
    { id: 'settings', label: 'Sozlamalar', icon: Settings }
  ];

  const orders = [
    {
      id: '001',
      date: '2024-01-15',
      status: 'Yetkazildi',
      total: 2500,
      items: ['Premium Yotoq to\'plami', 'Zamonaviy Divan']
    },
    {
      id: '002',
      date: '2024-01-10',
      status: 'Jarayonda',
      total: 1800,
      items: ['Klassik Oshxona Garniturlari']
    }
  ];

  const favorites = [
    {
      id: '1',
      name: 'Premium Yotoq to\'plami',
      price: 2500,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      id: '2',
      name: 'Zamonaviy Divan',
      price: 1800,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        <motion.div
          className="max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <User className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Xush Kelibsiz!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Profilingizga kirish uchun tizimga kiring
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Tizimga Kirish
              </motion.button>
              
              <motion.button
                onClick={() => {
                  setAuthMode('register');
                  setShowAuthModal(true);
                }}
                className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ro'yxatdan O'tish
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Auth Modal */}
        <AnimatePresence>
          {showAuthModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAuthModal(false)} />
              <motion.div
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {authMode === 'login' ? 'Tizimga Kirish' : 'Ro\'yxatdan O\'tish'}
                </h2>

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Ism
                      </label>
                      <input
                        type="text"
                        value={authData.name}
                        onChange={(e) => setAuthData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={authData.email}
                      onChange={(e) => setAuthData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Parol
                    </label>
                    <input
                      type="password"
                      value={authData.password}
                      onChange={(e) => setAuthData(prev => ({ ...prev, password: e.target.value }))}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Parolingizni kiriting"
                    />
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Parolni Tasdiqlash
                      </label>
                      <input
                        type="password"
                        value={authData.confirmPassword}
                        onChange={(e) => setAuthData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                        placeholder="Parolni qayta kiriting"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <span>{authMode === 'login' ? 'Kirish' : 'Ro\'yxatdan O\'tish'}</span>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium"
                  >
                    {authMode === 'login' 
                      ? 'Hisobingiz yo\'qmi? Ro\'yxatdan o\'ting' 
                      : 'Hisobingiz bormi? Tizimga kiring'
                    }
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'}
                alt={user?.name}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <motion.button
                className="absolute bottom-0 right-0 bg-yellow-600 text-white p-2 rounded-full shadow-lg hover:bg-yellow-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Camera className="w-4 h-4" />
              </motion.button>
            </motion.div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {user?.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {user?.email}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <motion.button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit className="w-4 h-4" />
                  <span>Tahrirlash</span>
                </motion.button>
                <motion.button
                  onClick={logout}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Chiqish</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-yellow-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Profil Ma'lumotlari
                    </h2>
                    
                    {isEditing ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              Ism
                            </label>
                            <input
                              type="text"
                              value={editData.name}
                              onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              value={editData.email}
                              onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              Telefon
                            </label>
                            <input
                              type="tel"
                              value={editData.phone}
                              onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              Manzil
                            </label>
                            <input
                              type="text"
                              value={editData.address}
                              onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <motion.button
                            onClick={handleSave}
                            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Save className="w-5 h-5" />
                            <span>Saqlash</span>
                          </motion.button>
                          <motion.button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <X className="w-5 h-5" />
                            <span>Bekor qilish</span>
                          </motion.button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <User className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Ism</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{user?.name}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{user?.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Telefon</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{user?.phone || 'Kiritilmagan'}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Manzil</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{user?.address || 'Kiritilmagan'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'orders' && (
                  <motion.div
                    key="orders"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Buyurtmalar Tarixi
                    </h2>
                    <div className="space-y-4">
                      {orders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                Buyurtma #{order.id}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(order.date).toLocaleDateString('uz-UZ')}
                              </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === 'Yetkazildi' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mahsulotlar:</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                              {order.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm">{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                              ${order.total}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'favorites' && (
                  <motion.div
                    key="favorites"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Sevimli Mahsulotlar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {favorites.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {item.name}
                            </h3>
                            <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                              ${item.price}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Sozlamalar
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Xavfsizlik
                        </h3>
                        <div className="space-y-4">
                          <motion.button
                            className="w-full text-left p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            Parolni o'zgartirish
                          </motion.button>
                          <motion.button
                            className="w-full text-left p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            Ikki bosqichli autentifikatsiya
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Bildirishnomalar
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300">Email bildirishnomalar</span>
                            <motion.button
                              className="w-12 h-6 bg-yellow-600 rounded-full relative"
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"
                                layout
                              />
                            </motion.button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300">SMS bildirishnomalar</span>
                            <motion.button
                              className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative"
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"
                                layout
                              />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}