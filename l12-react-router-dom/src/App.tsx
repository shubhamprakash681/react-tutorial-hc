import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  // return (
  //   <div className="app-container bg-neutral-50">
  //     <div className="upper-container shadow-sm shadow-green-200">
  //       <Header />
  //     </div>

  //     <div className="lower-container">
  //       <div className="page-container">
  //         <Outlet />
  //       </div>

  //       <Footer />
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="bg-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
