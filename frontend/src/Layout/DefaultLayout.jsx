import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex my-32 px-32 flex-col justify-center items-center max-w-full h-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
