import React, {Component} from 'react';

class Header extends Component {
    render () {
        let appStatus = (navigator.onLine) ? 'Online!': 'Offline :(';

        return (
          <header className="site-header">
            <div className="status">{appStatus}</div>
            <h1>Video Listing</h1>
            <a href="#">Refresh</a>
          </header>
      )
  }
}

export default Header;