
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './page/Blog/Blog';
import Home from './page/Home/Home/Home';
import InventoriDetail from './page/InventoriDetail/InventoriDetail';
import Login from './page/Login/Login/Login';
import Register from './page/Login/Register/Register';
import Footer from './page/Shared/Footer/Footer';
import Header from './page/Shared/Header/Header';
import NotFound from './page/Shared/NotFound/NotFound';

import RequireAuth from './page/Login/RequireAuth/RequireAuth';
import AddItem from './page/AddItem/AddItem';
import ManageItems from './page/ManageItems/ManageItems';
import MyItems from './page/MyItems/MyItems';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Inventory/:inventoryId' element={
          <RequireAuth>
            <InventoriDetail></InventoriDetail>
          </RequireAuth>
        }></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register'element={<Register></Register>}></Route>
        
         
        <Route path='/AddItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/ManageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/MyItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
   
        <Route path='*' element ={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
