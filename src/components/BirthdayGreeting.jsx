import './BirthdayGreeting.css'

function BirthdayGreeting() {
  return (
    <section className="greeting">
      <div className="greeting-content">
        <div className="cake">
          <div className="candle"></div>
          <div className="candle flame"></div>
        </div>
        <p className="greeting-text">
          Celebrate this special day with amazing memories!
        </p>
        <div className="emoji-row">
          <span className="greeting-emoji">🎉</span>
          <span className="greeting-emoji">🎊</span>
          <span className="greeting-emoji">🎁</span>
          <span className="greeting-emoji">🎂</span>
          <span className="greeting-emoji">🎈</span>
        </div>
      </div>
    </section>
  )
}

export default BirthdayGreeting

