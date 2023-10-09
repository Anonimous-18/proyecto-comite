import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex-1 mt-20">
        <section className="container px-4 py-10 mx-auto">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
