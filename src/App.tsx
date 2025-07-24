import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { useState } from "react";
import ItemBox from "./components/ItemBox";
import { ctItems, tItems } from "./components/utils";

function App() {
  const [ctSide, setCtSide] = useState(true);

  const ctColor = "#99C9FB";
  const tColor = "#EBBF57";
  const itemBg = "#454545";
  const textColor = "#CCCCCC";

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center bg-black/50"
      animate={{ color: ctSide ? ctColor : tColor }}
    >
      <AnimatePresence>
        <div className="w-[1200px] h-[700px] m-4 flex flex-col gap-1">
          <div className="bg-black/50 backdrop-blur-xl h-12 flex items-center justify-between p-2 px-8 text-2xl font-bold">
            <div>$4060</div>
            {ctSide ? (
              <motion.div
                key="CT"
                onClick={() => setCtSide(false)}
                initial={{
                  opacity: 0,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Counter-Terrorists
              </motion.div>
            ) : (
              <motion.div
                key="T"
                onClick={() => setCtSide(true)}
                initial={{
                  opacity: 0,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Terrorists
              </motion.div>
            )}
          </div>
          <div className="h-full w-full flex flex-row gap-[1px] text-2xl font">
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className={`absolute top-2 left-5 text-lg text-[#CCCCCC]`}>
                1
              </div>
              <div className="h-12 text-[#CCCCCC]">Equipment</div>
              <div className="h-full grid grid-rows-5 gap-3">
                {(ctSide ? ctItems : tItems).equipment.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className={`absolute top-2 left-5 text-lg text-[#CCCCCC]`}>
                2
              </div>
              <div className="h-12 text-[#CCCCCC]">Pistols</div>
              <div className="h-full grid grid-rows-5 gap-3">
                {(ctSide ? ctItems : tItems).pistols.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className={`absolute top-2 left-5 text-lg text-[#CCCCCC]`}>
                3
              </div>
              <div className="h-12 text-[#CCCCCC]">Mid-Tier</div>
              <div className="h-full grid grid-rows-5 gap-3">
                {(ctSide ? ctItems : tItems).midTier.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className={`absolute top-2 left-5 text-lg text-[#CCCCCC]`}>
                4
              </div>
              <div className="h-12 text-[#CCCCCC]">Rifles</div>
              <div className="h-full grid grid-rows-5 gap-3">
                {(ctSide ? ctItems : tItems).rifles.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className={`absolute top-2 left-5 text-lg text-[#CCCCCC]`}>
                5
              </div>
              <div className="h-12 text-[#CCCCCC]">Grenades</div>
              <div className="h-full grid grid-rows-5 gap-3">
                {(ctSide ? ctItems : tItems).grenades.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
// I want the text for each section header (pistols, mid-tier etc) to have the css text stretch condensed property, I am reading that thats not widely supported anymore, is there another way?
