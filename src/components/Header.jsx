import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="emoji">🎂</span>
          Happy Birthday!
          <span className="emoji">🎈</span>
        </h1>
        <div className="header-decoration">
          <div className="balloon balloon-1">🎈</div>
          <div className="balloon balloon-2">🎈</div>
          <div className="balloon balloon-3">🎈</div>
        </div>
      </div>
    </header>
  )
}

export default Header

