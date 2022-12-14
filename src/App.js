import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Home,Settings,CallList,
  Contact,ConversationList,
  GroupMassage,Login,
  Notification,Profile,
  Registration 
} 
from './pages';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme="light"
      transition={Slide}
    />
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<ConversationList/>}/>
        <Route path='/conversation' element={<ConversationList/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/group' element={<GroupMassage/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/list' element={<Contact/>}/>
        <Route path='/call' element={<CallList/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Route>

      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
