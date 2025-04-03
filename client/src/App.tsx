import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Hoa 
import LogIn from "./pages/LogIn";

import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (

    <Router>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                
            </Routes>
    </Router>
    // <>
    //   <Header />
    //     <main>
    //       <Outlet />
    //     </main>
    //   <Footer />
    // </>
  )
}

export default App
