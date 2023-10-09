import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col space-y-40 justify-between h-full ">
      <NavBar />
      <div className="flex items-center justify-center border border-gray-950 w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
