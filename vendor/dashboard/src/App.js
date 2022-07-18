import React from 'react'
import { Admin, Resource, defaultTheme } from 'react-admin'
import lb4Provider from 'react-admin-lb4';
import UserList from './Components/UserList';
import UpdatePackage from './Components/UpdatePackage';
import AddPackage from './Components/AddPackage';
import Dashboard from './Components/Dashboard';

const dataProvider = lb4Provider('http://localhost:3000')

const theme = {
  ...defaultTheme,
  palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
  },
};

const App = () => {
  return (
    <Admin theme={theme} title='My Dashboard' dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name='customers' list={UserList} edit={UpdatePackage} create={AddPackage}/>
      <Resource name='Add Package' list={AddPackage} create={AddPackage} />
      <Resource name='Update Package' list={UpdatePackage} edit={UpdatePackage} />
    </Admin>
  )
}

export default App