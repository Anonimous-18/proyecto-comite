import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex-1 mt-20 border border-zinc-950">
        <section className="container px-4 py-10 mx-auto">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
