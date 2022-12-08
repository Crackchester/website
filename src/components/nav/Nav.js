import React from 'react';
import Headroom from 'react-headroom';
import nav from './nav.json';
import classNames from 'classnames';
import './Nav.scss';

const HAMBURGER_MIN_WIDTH = 768;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navPanel = React.createRef();
    this.openNav = this.openNav.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onClick = this.onClick.bind(this);
    this.selected = this.selected.bind(this);
    this.state = {navOpen: 0}; // three states: 0 - closed, 1 - open, 2 - closing
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);  
  }

  onResize(e) {
    if (!this.state.navOpen) return;

    let width = window.innerWidth;
    
    if (width > HAMBURGER_MIN_WIDTH) {
      this.openNav(0);
    }
  }

  onClick(e) {
    let node = this.navPanel.current;
    
    if (!node.contains(e.target)) {
      this.openNav(0);
    }
  }

  selected() {
    let width = window.innerWidth;

    if (width <= HAMBURGER_MIN_WIDTH && this.state.navOpen) {
      this.openNav(0);
    }
  }

  openNav(explicit) {
    let state = (typeof(explicit) == 'number' && explicit) || (this.state.navOpen + 1) % 3;

    this.setState({navOpen: state});
    if (state > 0) {
      document.body.classList.add('blur');
      window.addEventListener('click', this.onClick);
      if (state === 2) {
        setTimeout(() => this.openNav(), 250)
      }
    } else {
      document.body.classList.remove('blur');
      window.removeEventListener('click', this.onClick);
    }
  }

  render() {
    return (
      <Headroom className={
        classNames({
          'force-visible': this.state.navOpen !== 0,
        })
      }>
        <div id="nav-container">
          <div id="nav">
            <nav>
              <ol>
                <li className="nav-item">
                  <a href={`/${nav[0].href}`}>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt='logo' width='40' height='40' className='logo'/>
                    </div>
                  </a>
                </li>
                {nav.map((data, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a href={`/${data.href}`}>
                        {data.label}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </nav>
          </div>
          <div id="nav-mobile" ref={this.navPanel}>
            <div id="nav-mobile-logo" className="nav-item">
              <a href={`/${nav[0].href}`}>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt='logo' width='40' height='40' className='logo'/>
                </div>
              </a>
            </div>

            <button onClick={() => this.openNav()} type="button">
              <div className="hamburger-box--wrapper">
                <div className={
                  classNames({
                    "hamburger-box": true, 
                    "active": this.state.navOpen === 1,
                  })
                } />
              </div>
            </button>
            
            <aside 
              className={
                classNames({
                  "visible": this.state.navOpen === 1
                })
              }
            >
              <nav>
                <ol>
                  {nav.map((data, index) => {
                    return (
                      <li key={index} className="nav-item">
                        <a href={`/${data.href}`} onClick={this.selected}>{data.label}</a>
                      </li>
                    )
                  })}
                </ol>
              </nav>
            </aside>

            <div className="blur" />
          </div>
        </div>
      </Headroom>
    )
  }
}

export default Header;