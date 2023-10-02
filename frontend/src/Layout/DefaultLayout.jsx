import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function ({ children }) {
  return(
    <div className="flex flex-col space-y-40 justify-between h-full">
    <NavBar />
    <div>{children}</div>
    <Footer />
  </div>
  );
}
