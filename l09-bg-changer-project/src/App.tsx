import { useState } from "react";

interface IColorPallet {
  colorName: string;
  className: string;
}

const App = () => {
  const colorPallets: IColorPallet[] = [
    { colorName: "Pink", className: "bg-pink-800" },
    { colorName: "Slate", className: "bg-slate-600" },
    { colorName: "Teal", className: "bg-teal-200" },
    { colorName: "Indigo", className: "bg-indigo-600" },
    { colorName: "Yellow", className: "bg-yellow-600" },
    { colorName: "Gray", className: "bg-gray-600" },
    { colorName: "Red", className: "bg-red-500" },
    { colorName: "Blue", className: "bg-blue-600" },
    { colorName: "Green", className: "bg-green-600" },
    { colorName: "Purple", className: "bg-purple-600" },
    { colorName: "Orange", className: "bg-orange-600" },
  ];

  const [activeBackgroundColor, setActiveBackgroundColor] = useState<string>(
    colorPallets[0].className
  );

  const handleColorPaletteChange = (colorClassName: string) => {
    setActiveBackgroundColor(colorClassName);
  };

  return (
    <>
      <div className={`h-full w-full ${activeBackgroundColor}`}>
        <div className="px-5 fixed bottom-7 w-full flex items-center justify-evenly">
          <div className="px-6 py-3 space-x-3 rounded-xl bg-slate-50 flex items-center justify-evenly overflow-x-auto">
            {colorPallets.map((colorPallet: IColorPallet) => (
              <button
                onClick={() => handleColorPaletteChange(colorPallet.className)}
                key={colorPallet.className}
                className={`${colorPallet.className} px-2 rounded-xl text-white`}
              >
                {colorPallet.colorName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
