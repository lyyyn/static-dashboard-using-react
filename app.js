const SideBar = () => {
  return (
    <div className='sideBar'>
      <a href="#0">Dashboard</a>
      <a href="#0">Widget</a>
      <a href="#0">Reviews</a>
      <a href="#0">Customers</a>
      <a href="#0">Online Analysis</a>
      <a href="#0">Settings</a>
    </div>
  )
}

const Reviews = (props) => {
  return (
    <div className="reviews">
      <a href="#0">Reviews</a>
      <h1>{props.reviews}</h1>
    </div>
  )
}

const Ratings = (props) => {
  return (
    <div className="ratings">
      <a href="#0">Average Rating</a>
      <h1>{props.rating}</h1>
    </div>
  )
}

const Sentiments = (props) => {
  return (
    <div className="sentiments">
      <a href="#0">Sentiment Analysis</a>
      <div className="list-sentiment">
        <h1>
          {props.first}<br/>
          {props.second}<br/>
          {props.third}
        </h1>
      </div>
    </div>
  )
}

const Visitors = (props) => {
  return (
    <div className="visitors">
      <a>Website Visitors</a>
      <br /><br />
      <img src={props.url} className="chart"></img>
    </div>
  )
}

const TopWidgets = () => {
  return (
    <div className="top">
      <Reviews reviews="1,870" />
      <Ratings rating="4.8" />
      <Sentiments first="905" second="278" third="189" />
    </div>
  )
}

const Content = () => {
  return (
    <div className="content">
      <TopWidgets />
      <Visitors url="https://d33v4339jhl8k0.cloudfront.net/docs/assets/588089eddd8c8e484b24e90a/images/5b9b8fdf2c7d3a03f89ec480/file-NicmUtnWtO.gif" />
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Content />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
);