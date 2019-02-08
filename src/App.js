import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

/*<Link to="/projects">Keynotes</Link>*/

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="app-header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Heather Marsh</Link>} scroll>
            <Navigation>
                <Link to="/about">About</Link>
                 
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Heather Marsh</Link>}>
            <Navigation>
              <Link to="/about">About</Link>
              
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;