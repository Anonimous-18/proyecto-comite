import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
