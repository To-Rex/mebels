# LuxuryMebel - Premium Furniture E-commerce Website

A modern, responsive e-commerce website for premium furniture with multi-language support and advanced features.

## 🚀 Features

- **Multi-language Support**: Uzbek, English, Russian
- **Theme Toggle**: Light/Dark mode
- **Responsive Design**: Mobile, Tablet, Desktop optimized
- **Advanced Animations**: Framer Motion powered
- **E-commerce Features**: Shopping cart, product filtering, search
- **User Authentication**: Login/Register system
- **Blog System**: Content management for articles
- **Contact Forms**: Interactive contact functionality

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment on Netlify

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects (already included in `netlify.toml`)

### Environment Variables

No environment variables required for basic functionality.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Theme, Language, Cart, Auth)
├── pages/              # Page components
├── data/               # Static data and mock data
├── utils/              # Utility functions and translations
└── index.css           # Global styles

public/
├── _redirects          # Netlify redirects configuration
└── ...                 # Static assets

netlify.toml            # Netlify configuration
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'primary': { /* Brown color palette */ },
  'accent': { /* Orange/Amber accents */ },
  'success': { /* Green palette */ }
}
```

### Languages
Add or modify translations in `src/utils/translations.ts`

### Products
Update product data in `src/data/products.ts`

## 🔧 Configuration

### Netlify Configuration (`netlify.toml`)
- Build settings
- Redirect rules for SPA routing
- Security headers
- Caching policies

### Vite Configuration (`vite.config.ts`)
- Build optimization
- Code splitting
- Asset handling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🚀 Performance Optimizations

- Code splitting by routes and vendors
- Image lazy loading
- Optimized animations
- Efficient state management
- Minimal bundle size

## 📞 Support

For support and questions, please contact the development team.

## 📄 License

This project is proprietary software. All rights reserved.