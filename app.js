const LeftMenu = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>Dashboard</li>
        <li>Widgets</li>
        <li>Reviews</li>
        <li>Customers</li>
        <li>Online Analysis</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

const Review = () => {
  return (
    <div className='widget'>
      <div>Review</div>
      <div className='largeFont'>1,267</div>
    </div>
  )
}

const Ratings = () => {
  return (
    <div className='widget'>
      <div>Average Ratings</div>
      <div className='largeFont'>4.6</div>
    </div>
  )
}

const Sentiments = () => {
  return (
    <div className='widget'>
      <div>Sentiments Analysis</div>
      <div className='largeFont'>960<br/>122<br/>321</div>
    </div>
  )
}

const Chart = () => {
  return (
    <div className='visitors-chart'>Chart here</div>
  )
}

const Visitors = () => {
  return (
    <div className='visitors'>
      <div>Website Visitors</div>
      <div className='largeFont'>821</div>
      <Chart />
    </div>
  )
}

const TopWidgets = () => {
  return (
    <div className='topWidgets'>
      <Review />
      <Ratings />
      <Sentiments />
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'><h1>Commence Dashboard Creation!</h1></div>
  )
}

const App = () => {
  return (
    <div className='main'>
      <Header />
      <LeftMenu />
      <TopWidgets />
      <Visitors />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
);