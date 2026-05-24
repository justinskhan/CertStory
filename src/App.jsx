import { useState, useEffect } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ChartsScreen from './screens/ChartsScreen.jsx'
import DiscussionScreen from './screens/DiscussionScreen.jsx'
import RoadmapScreen from './screens/RoadmapScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import FieldDetailScreen from './screens/FieldDetailScreen.jsx'
import CertDetailScreen from './screens/CertDetailScreen.jsx'
import QuizScreen from './screens/QuizScreen.jsx'
import PostDetailScreen from './screens/PostDetailScreen.jsx'

const TAB_LABELS = {
  home: 'Home',
  charts: 'Market Charts',
  discussion: 'Discussion',
  roadmap: 'Roadmap',
  profile: 'Profile'
}

export default function App() {
  // Bottom-nav tab
  const [tab, setTab] = useState('home')
  // Sub-screen pushed on top of a tab (e.g. field detail, cert detail, quiz)
  // shape: { name: string, params: object } | null
  const [subScreen, setSubScreen] = useState(null)
  // Brief label flash when changing tabs
  const [labelFlash, setLabelFlash] = useState({ text: '', show: false })

  function goToTab(name) {
    setSubScreen(null)
    setTab(name)
    flashLabel(TAB_LABELS[name])
  }

  function pushScreen(name, params = {}) {
    setSubScreen({ name, params })
  }

  function popScreen() {
    setSubScreen(null)
  }

  function flashLabel(text) {
    setLabelFlash({ text, show: true })
  }

  useEffect(() => {
    if (!labelFlash.show) return
    const t = setTimeout(() => setLabelFlash(p => ({ ...p, show: false })), 1400)
    return () => clearTimeout(t)
  }, [labelFlash.show, labelFlash.text])

  const nav = { goToTab, pushScreen, popScreen, tab }

  // Render the active screen (sub-screen takes priority over tab)
  function renderActiveScreen() {
    if (subScreen) {
      switch (subScreen.name) {
        case 'quiz':
          return <QuizScreen nav={nav} />
        case 'fieldDetail':
          return <FieldDetailScreen nav={nav} fieldId={subScreen.params.fieldId} />
        case 'certDetail':
          return <CertDetailScreen nav={nav} certId={subScreen.params.certId} />
        case 'postDetail':
          return <PostDetailScreen nav={nav} postId={subScreen.params.postId} />
        default:
          return null
      }
    }
    switch (tab) {
      case 'home':       return <HomeScreen nav={nav} />
      case 'charts':     return <ChartsScreen nav={nav} />
      case 'discussion': return <DiscussionScreen nav={nav} />
      case 'roadmap':    return <RoadmapScreen nav={nav} />
      case 'profile':    return <ProfileScreen nav={nav} />
      default:           return <HomeScreen nav={nav} />
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <span className="eyebrow">Interactive Prototype</span>
        <h1><em>CertStory</em> — your personal certification roadmap</h1>
      </div>

      <PhoneFrame
        labelFlash={labelFlash}
        screen={renderActiveScreen()}
        nav={<BottomNav activeTab={tab} onTabChange={goToTab} hasSubScreen={!!subScreen} />}
      />
    </div>
  )
}
