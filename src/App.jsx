import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";
import Footer from "./components/Footer";

function App() {
  // list of the components;
  const components = ["Drawer", "Kanban Card", "Input Form"];

  return (
    <div
      class="dark relative min-h-screen bg-cover bg-fixed bg-center"
      style="background-image: url('../assets/494-[Converted].png')"
    >
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
