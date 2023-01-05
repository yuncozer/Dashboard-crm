import { BrowserRouter, Routes, Route } from "react-router-dom ";

// Layout
import { LayoutAuth } from "./layouts/LayoutAuth";
import { LayoutAdmin } from "./layouts/LayoutAdmin";
// Pages Auth
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
// Pages Admin
import { Home } from "./pages/admin/Home";
import { Chat } from "./pages/admin/Chat";
import { Error404 } from "./pages/Error404";
import { ForgetPassword } from "./pages/auth/ForgetPassword";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login/>}/>
          <Route path="registro" element={<Register/>}/>
          <Route path="forgetPass" element={<ForgetPassword/>}/>
        </Route>
        <Route path="/" element={<LayoutAdmin />}> 
          <Route index element={<Home/> }/>
          <Route path="chat" element={<Chat/>} />
        </Route>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
