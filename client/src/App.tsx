// App.tsx
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />  {/* This will render the child routes like HomePage */}
      </main>
      <Footer />
    </>
  );
}

export default App;
