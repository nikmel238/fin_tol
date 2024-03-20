import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function HomePage() {
  return (
    <div className={`bg-stone-200 min-h-screen`}>
      <Header />
      <div>Main</div>
      <Footer />
    </div>
  );
}

export default HomePage;
