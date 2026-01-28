# Yaser Arafat Portfolio

A modern, responsive portfolio website built with Next.js 14, Sanity CMS, and TailwindCSS. Features server-side rendering, dynamic content management, and beautiful animations.

## 🚀 Live Demo

[Visit Website](https://yaserarafat.vercel.app)

## ✨ Features

- Server-side rendering with Next.js 14
- Content management with Sanity CMS
- Responsive design with TailwindCSS
- Beautiful animations with Framer Motion
- Dark mode support
- SEO optimized
- TypeScript support

## 📁 Project Structure

```
├── app/
│   ├── (root)/              # Main website routes
│   │   ├── page.tsx         # Home page
│   │   ├── about/          # About page
│   │   └── _components/    # Page-specific components
│   ├── studio/             # Sanity Studio
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/            # Layout components
│   └── magicui/           # Animation components
├── public/
│   ├── fonts/             # Custom fonts
│   ├── images/            # Static images
│   └── assets/            # Other static assets
├── sanity/
│   ├── schemas/           # Sanity content schemas
│   └── lib/               # Sanity utilities
└── lib/                   # Utility functions
```

## 🛣️ Routes

- `/` - Home page
- `/about` - About page
- `/artworks` - Art portfolio page
- `/studio` - Sanity Studio (CMS)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=""
NEXT_PUBLIC_SANITY_DATASET=""

SANITY_API_READ_TOKEN=""

NEXT_PUBLIC_SITE_URL="https://localhost:3000"
```

## 🎨 Assets

### Fonts

- ClashDisplay Variable
- Chaney Ultra Extended

### Images

Located in `/public/images/`:

- Profile pictures
- Project thumbnails
- Other static images

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **CMS**: Sanity
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide Icons
- **Type Safety**: TypeScript

## 📦 Dependencies

```json
{
	"dependencies": {
		"@radix-ui/react-slot": "latest",
		"@sanity/vision": "latest",
		"class-variance-authority": "latest",
		"clsx": "latest",
		"framer-motion": "latest",
		"lucide-react": "latest",
		"next": "14.x",
		"next-sanity": "latest",
		"react": "18.x",
		"tailwind-merge": "latest",
		"tailwindcss-animate": "latest"
	}
}
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YaIsrak/yaserarafat6.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

- Copy `.env.local.example` to `.env.local`
- Fill in your Sanity credentials and other configuration

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 CMS Setup

1. Create a Sanity account
2. Create a new project
3. Get your project ID and dataset name
4. Add them to your `.env.local` file
5. Run the Sanity Studio:

```bash
npm run studio
```

## 🎨 Color Scheme

The project uses a custom color scheme defined in `globals.css`:

- Primary: `hsl(13 56% 54%)`
- Secondary: `hsl(30 100% 87%)`
- Muted: `hsl(30 10% 40%)`
- Accent: `hsl(12 6.5% 15.1%)`
- Background: `hsl(240 10% 3.9%)`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Yaser Arafat**

- Website: [yaserarafat.vercel.app](https://yaserarafat.vercel.app)
- GitHub: [@YaIsrak](https://github.com/YaIsrak)
