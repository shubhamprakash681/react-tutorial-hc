import "./App.css";
import svg from "./assets/react.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className=" flex items-center justify-evenly">
        <h1 className="bg-blue-400 text-black p-4 rounded-2xl">Tailwind CSS</h1>
      </div>

      <figure className="mt-5 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={svg}
          alt="SVG"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      {/* PROPS */}
      <div className="mt-7 flex flex-col items-center">
        <Card productName="Macbook" />
        <Card productName="Laptop" />
        <Card productName="Tablet" />
        <Card productName="Mobile" />
      </div>
    </>
  );
}

export default App;
