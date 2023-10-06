import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function DefaultLayout ({ children }) {
  return(
    <div className="flex flex-col space-y-40 justify-between h-full">
    <NavBar />
    <div className=" items-center justify-center flex flex-col">{children}</div>
    <Footer />
  </div>
  );
}
