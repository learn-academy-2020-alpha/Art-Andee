import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Error from './Error';
import Avatar from './Avatar';
import Drive from './Drive';
import CoolRunnings from './CoolRunnings';
import WakingLife from './WakingLife';
import TheAvengers from './TheAvengers'

const Home = () => {
   return(
     <>
    <Router>
      <div>
          <nav>
              <ul>
                <li>
                <Link to="/avatar/">Avatar</Link>
                </li>
                <li>
                <Link to="/drive/">Drive</Link>
                </li>
                <li>
                <Link to="/coolrunnings/">Cool Runnings</Link>
                </li>
                <li>
                <Link to="/wakinglife/">Waking Life</Link>
                </li>
                <li>
                <Link to="/theavengers/">The Avengers</Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route path="/avatar/" component={ Avatar } />
            <Route path="/drive/" component={ Drive } />
            <Route path="/coolrunnings/" component={ CoolRunnings } />
            <Route path="/wakinglife/" component={ WakingLife } />
            <Route path="/theavengers/" component={ TheAvengers } />
            <Route exact path="/" component={ Avatar } />
            <Route component={ Error } />
            </Switch>
     </div>
    </Router>
     </>
   )
}
export default Home