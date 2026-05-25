# CertStory

An intelligent roadmap and recommendation tool that helps aspiring tech professionals choose the right certifications based on real-time job market data.

## Tech Stack

- **React 18** + **Vite** (fast dev server, optimized production build)
- **Vanilla CSS** with CSS variables (no Tailwind, no UI library — easy to customize)
- **Static deployment** ready for Render.com

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (opens http://localhost:5173 automatically)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
certstory/
├── index.html              ← entry HTML (loads Google Fonts)
├── package.json
├── vite.config.js
├── render.yaml             ← Render.com deployment config
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← App shell + navigation state
    ├── styles.css          ← All styles (CSS variables at top)
    ├── components/
    │   ├── PhoneFrame.jsx  ← The mobile phone outer frame
    │   ├── BottomNav.jsx   ← 5-icon bottom navigation
    │   ├── StatusBar.jsx   ← iOS-style status bar
    │   └── TopBar.jsx      ← Menu button + avatar
    ├── screens/
    │   ├── HomeScreen.jsx        ← Welcome + skill categories
    │   ├── ChartsScreen.jsx      ← Market insights, employer data
    │   ├── DiscussionScreen.jsx  ← Community posts
    │   ├── RoadmapScreen.jsx     ← Vertical cert path
    │   ├── ProfileScreen.jsx     ← User stats + menu
    │   ├── FieldDetailScreen.jsx ← Drilldown: certs in a field
    │   ├── CertDetailScreen.jsx  ← Single cert details
    │   └── QuizScreen.jsx        ← 4-step onboarding quiz
    ├── data/
    │   ├── certifications.js  ← Cert database
    │   ├── fields.js          ← 4 main fields + their certs
    │   ├── roadmap.js         ← Current user's roadmap
    │   ├── posts.js           ← Discussion posts
    │   └── chartsData.js      ← Market data for charts
    └── icons/
        └── Icons.jsx          ← Reusable SVG icons
```

## How Navigation Works

The app has two layers of navigation:

1. **Bottom tabs** (`tab` state in `App.jsx`): home / charts / discussion / roadmap / profile
2. **Sub-screens** (`subScreen` state in `App.jsx`): quiz, field detail, cert detail — pushed on top of a tab, with a back button to pop

Both `goToTab(name)` and `pushScreen(name, params)` / `popScreen()` are passed down through props.

## Adding a New Clickable Feature

Example: making a discussion post open a detail screen.

1. Add a screen component in `src/screens/PostDetailScreen.jsx`
2. In `App.jsx`, add a case for `'postDetail'` in the sub-screen renderer
3. In `DiscussionScreen.jsx`, call `pushScreen('postDetail', { postId: 123 })` on click

## Deploying to Render.com

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New** → **Static Site**
3. Connect your GitHub repo
4. Render will auto-detect `render.yaml`. Click **Create Static Site**.
5. Done. Render runs `npm install && npm run build` and serves `./dist`.

The included `render.yaml` also enables **pull-request previews**, so every PR gets its own preview URL.

## License

For demo use
