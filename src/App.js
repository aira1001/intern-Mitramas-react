import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import DashboardPage from './pages/dashboardPage';
import Sidebar from './components/sidebar';
import Login from './pages/login';
import ListUser from './pages/listUser';
import BasicUsage from './components/alertDialog';
import EditUser from './pages/editUser';
import CreateUser from './pages/createUser';
import BreadCrumb from './components/breadCrumb';

function App() {
  return (
   <ChakraProvider>
    <BreadCrumb />
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/dashboard" element={<DashboardPage/>}/>
        <Route exact path="/sidebar" element={<Sidebar/>}/>
        <Route exact path="/listUser" element={<ListUser/>} />
        <Route exact path="/alert" element={<BasicUsage/>}/>
        <Route exact path="/editUser/:idUser" element={<EditUser/>}/>
        <Route exact path="/createUser" element={<CreateUser/>}/>
      </Routes>
    </Router>
   </ChakraProvider>
  );
}

export default App;
