import New from "./components/New";
import Articles from "./components/Articles";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screenh-screen w-full font-inter px-3 py-3 sm:px-80 sm:py-24">
      <div className="w-full h-full">
        <Navigation />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-x-6 sm:gap-y-10 mt-6">
          <Content />
          <New />
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default App;
