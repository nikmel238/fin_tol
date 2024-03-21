import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

function HomePage() {
  return (
    <div className={`bg-stone-200 min-h-screen`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
