import { SignalIcon, WifiIcon, BatteryIcon } from '../icons/Icons.jsx'

export default function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="status-icons">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  )
}
