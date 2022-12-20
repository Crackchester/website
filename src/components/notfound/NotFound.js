import './NotFound.scss';

const NotFound = () => {
  return (
    <section id="not-found">
      <div className="container">
        <h1>404 - Whoops!</h1>
        <p>This page doesn't exist - are you sure you're in the right place?</p>
        <a href="/">
          <button className="btn">Return Home</button>
        </a>
      </div>
    </section>
  )
}

export default NotFound;