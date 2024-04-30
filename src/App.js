// import React from 'react';
// import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Register from "./Register";
// import Login from "./Login";
// import PremiumContent from "./PremiumContent";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <div className="header">
//           <NavLink exact activeClassName="active" to="/">Home</NavLink>
//           <NavLink activeClassName="active" to="/register">Register</NavLink>
//           <NavLink activeClassName="active" to="/login">Login</NavLink>
//           <NavLink activeClassName="active" to="/premium-content">Premium Content</NavLink>
//         </div>
//         <div className="content">
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/register" component={Register} />
//             <Route path="/login" component={Login} />
//             <Route path="/premium-content" component={PremiumContent} />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PremiumContent from "./PremiumContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/register">Register</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/premium-content">Premium Content</NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/premium-content" component={PremiumContent} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
