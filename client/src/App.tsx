import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginForm from "./components/loginform";

function App() {
  return (
    <>
      <Header />
        <main>
          <Outlet />
          <LoginForm />
        </main>
      <Footer />
    </>
  )
}

export default App
