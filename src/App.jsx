import React, { Suspense, useState } from 'react';
import './App.css';
import HeadingElements from './HeadingElements';
import { NavLink, Route, Routes } from 'react-router-dom';
import ToDo from './ToDo';
import StylishButton from './HOC/Button';
import WithAuthenticationPermissionAuction from './HOC/Auction';
import WithAuthenticationPermissionHoverInput from './HOC/TextInput';
import WithAuthenticationPermissionHoverParagraph from './HOC/TextParagraph';
import UserRoleContext from './UserRoleContext';
import withAuthenticationPermission from './AuthHOC/withAuthenticationPermission';
import Auction from './HOC/Auction';
import withHovering from './HOC/withHovering';
import TextParagraph from './HOC/TextParagraph';
import TextInput from './HOC/TextInput';

const LoginForm = React.lazy(() => delayForDemo(import('./LoginForm')));
const allowedUserRoles = ['admin', 'user'];


function App() {
  const [role, setRole] = useState('admin');
  const handleChangeRole = (e) => {
    setRole((prevRole) => prevRole = e.target.value);
  }
  const WithHoverInput = withHovering(TextInput);
  const WithAuthenticationPermissionHoverInput = withAuthenticationPermission(WithHoverInput);
  const WithAuthenticationPermissionAuction = withAuthenticationPermission(Auction);
  const withHoverParagraph = withHovering(TextParagraph);
  const WithAuthenticationPermissionHoverParagraph = withAuthenticationPermission(withHoverParagraph);
  const WithAuthenticationPermissionTodo = withAuthenticationPermission(ToDo);
  return (
    <UserRoleContext.Provider value={role}>
      <div className="App">
        <div>
          <ul className='navbar'>
            <li><NavLink to="/elements" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            >
              Dynamic Elements
            </NavLink></li>
            <li><NavLink to={'/todo'} className={({ isActive }) => isActive ? 'active' : ''}>Todo</NavLink></li>
            <li><NavLink to={'/hoc'} className={({ isActive }) => isActive ? 'active' : ''}>HOC</NavLink></li>
            <li><NavLink to={'/auction'} className={({ isActive }) => isActive ? 'active' : ''}>Auction</NavLink></li>
            <li><NavLink to={'/HOCHover'} className={({ isActive }) => isActive ? 'active' : ''}>HOCHover</NavLink></li>
            <li>
              <select onChange={handleChangeRole} value={role}>
                <option value={'admin'}>Admin</option>
                <option value={'user'}>User</option>
                <option value={'dev'}>Dev</option>
              </select>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path={'/'} element={<Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>} />
          <Route path={'/elements'} element={<HeadingElements />} />
          <Route path={'/todo'} element={<WithAuthenticationPermissionTodo requiredRoles={allowedUserRoles} userRole={role} />} />
          <Route path={'/hoc'} element={<StylishButton type="button" />} />
          <Route path={'/auction'} element={<WithAuthenticationPermissionAuction requiredRoles={allowedUserRoles} userRole={role} />} />
          <Route path={'/HOCHover'} element={<><WithAuthenticationPermissionHoverInput type="text" requiredRoles={allowedUserRoles} userRole={role} />
            <WithAuthenticationPermissionHoverParagraph text="hello world hello world hello world hello world" requiredRoles={allowedUserRoles} userRole={role} /></>} />
        </Routes>
      </div>
    </UserRoleContext.Provider>
  );
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
