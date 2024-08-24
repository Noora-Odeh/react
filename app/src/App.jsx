import Clients from "./Clients";
import Employees from "./Employees";
import Footer from "./Footer";
import Navbar from "./navbar";


export default function App(){
  return(
    <div>
    <Navbar />
    <Employees />
    <Clients />
    <Footer />
    </div>
  )
}