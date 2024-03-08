// import { Link, Route, Switch } from "wouter";
// import Home from "./Components/Home";
// import Users from "./Components/Users";

// const App1 = () => (
//   <>
//     <Link href="/users/1">Profile</Link>

//     <Route path="/about">About Us</Route>

//     {/* 
//       Routes below are matched exclusively -
//       the first matched route gets rendered
//     */}
//     <Switch>
//       <Route path="/inbox" component={Users} />
//       <Route path="/" component={Home} />

//       <Route path="/users/:name">
//         {(params) => <>Hello, {params.name}!</>}
//       </Route>

//       {/* Default route in a switch */}
//       <Route>404: No such page!</Route>
//     </Switch>
//   </>
// );

// export {App1};