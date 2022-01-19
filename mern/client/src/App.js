import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
// import Search from "./components/search";
import RecordList from "./components/recordList";
import SearchResult from "./components/searchRecord2";
import SelectSeats from "./components/selectseats";
import SignUp from "./components/part2/Register";
import Login from "./components/part2/Login";
import ChangePass from "./components/part2/changePass";
import UserSearch from "./components/usersearch";
import UserProfile from "./components/part2/userProfile";
import Bookings from "./components/part2/bookings"; 
import UserEdit from "./components/part2/userEdit"; 
const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />


      <Route path="/UserEdit/:id" component={UserEdit} />

      <Route path="/create">
        <Create />
      </Route>
      {/* <Route path="/search">
        <Search />
      </Route> */}
      <Route path="/searchrecord">
        <SearchResult />
      </Route>

      <Route path="/user/search">
        <UserSearch/>
      </Route>

      <Route path="/selectseats">
        <SelectSeats/>
      </Route>

      <Route path="/register">
        <SignUp/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/changePass">
        <ChangePass/>
      </Route>

      <Route exact path="/userProfile">
        <UserProfile />
      </Route>

      {/* <Route path="/book">
        <Bookings />
      </Route> */}

      <Route path="/book/:id" component={Bookings} />
      
    </div>
  );
};

export default App;
