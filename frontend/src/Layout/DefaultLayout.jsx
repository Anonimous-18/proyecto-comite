import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
