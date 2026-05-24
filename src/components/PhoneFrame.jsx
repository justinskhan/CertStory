import StatusBar from './StatusBar.jsx'

// Outer phone frame. The bottom nav is passed separately so it sits as a
// sibling of the screen container (positioned absolutely at the bottom).

export default function PhoneFrame({ screen, nav, labelFlash }) {
  return (
    <div className="phone">
      <StatusBar />
      <div className={`demo-screen-label ${labelFlash.show ? 'show' : ''}`}>
        {labelFlash.text}
      </div>
      <div className="screen-container">
        {screen}
      </div>
      {nav}
    </div>
  )
}
