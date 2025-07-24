import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { useState } from "react";

function App() {
  const [ctSide, setCtSide] = useState(true);

  const ctColor = "#99C9FB";
  const tColor = "#EBBF57";
  const itemBg = "#454545";
  const textColor = "#CCCCCC";

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center bg-black/50"
      initial={false}
      animate={{ color: ctSide ? ctColor : tColor }}
    >
      <div className="w-[1200px] h-[800px] flex flex-col gap-1">
        <div className="bg-black/50 backdrop-blur-2xl h-12 flex items-center justify-between p-2 px-4 text-xl font-bold">
          <div>$4060</div>
          <AnimatePresence mode="wait">
            {ctSide ? (
              <motion.div
                key="CT"
                onClick={() => setCtSide(false)}
                initial={{
                  opacity: 0,
                  x: -10,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ bounce: 0, duration: 0.1 }}
              >
                CT
              </motion.div>
            ) : (
              <motion.div
                key="T"
                onClick={() => setCtSide(true)}
                initial={{
                  opacity: 0,
                  x: 10,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ bounce: 0, duration: 0.1 }}
              >
                T
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="h-full w-full flex flex-row gap-[2px] text-2xl font">
          <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-2 pt-1 relative">
            <div className={`absolute top-2 left-4 text-lg text-[#CCCCCC]`}>
              1
            </div>
            <div className="h-16">Equipment</div>
          </div>
          <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-2 pt-1 relative">
            <div className={`absolute top-2 left-4 text-lg text-[#CCCCCC]`}>
              2
            </div>
            <div className="h-16">Pistols</div>
          </div>
          <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-2 pt-1 relative">
            <div className={`absolute top-2 left-4 text-lg text-[#CCCCCC]`}>
              3
            </div>
            <div className="h-16">Mid-Tier</div>
          </div>
          <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-2 pt-1 relative">
            <div className={`absolute top-2 left-4 text-lg text-[#CCCCCC]`}>
              4
            </div>
            <div className="h-16">Rifles</div>
          </div>
          <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-2 pt-1 relative">
            <div className={`absolute top-2 left-4 text-lg text-[#CCCCCC]`}>
              5
            </div>
            <div className="h-16">Grenades</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
