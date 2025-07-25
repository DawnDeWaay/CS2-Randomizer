/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { useState } from "react";
import ItemBox from "./components/ItemBox";
import { ctItems, tItems } from "./components/utils";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function App() {
  const [ctSide, setCtSide] = useState(true);
  const [money, setMoney] = useState<number | null>(16000);

  const [pistols, setPistols] = useState(ctItems.pistols);
  const [midTier, setMidTier] = useState(ctItems.midTier);
  const [rifles, setRifles] = useState(ctItems.rifles);

  const ctColor = "#99C9FB";
  const tColor = "#EBBF57";

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any, setItems: Function, items: any[]) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.name === active.id);
      const newIndex = items.findIndex((item) => item.name === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center bg-black/50"
      animate={{ color: ctSide ? ctColor : tColor }}
    >
      <AnimatePresence>
        <div className="w-[1200px] h-[700px] m-4 flex flex-col gap-1">
          <div className="bg-black/50 backdrop-blur-xl h-12 flex items-center p-2 px-8 text-2xl font-bold text-start">
            <div className="flex-1 flex-row">
              $
              <input
                type="number"
                value={money || ""}
                onChange={(e) => setMoney(Number(e.target.value) || null)}
                className="bg-transparent outline-none w-24 text-inherit font-bold"
                style={{ appearance: "textfield" }}
                min={0}
                max={16000}
              />
            </div>
            <motion.div
              className="cursor-pointer flex-1 text-center select-none"
              initial={{ color: ctSide ? ctColor : tColor }}
              animate={{ color: ctSide ? ctColor : tColor }}
              whileHover={{ color: "#37B652" }}
            >
              Randomize
            </motion.div>
            {ctSide ? (
              <motion.div
                key="CT"
                onClick={() => setCtSide(false)}
                initial={{
                  flex: 1,
                  opacity: 0,
                  cursor: "pointer",
                  userSelect: "none",
                  textAlign: "end",
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
                  flex: 1,
                  opacity: 0,
                  cursor: "pointer",
                  userSelect: "none",
                  textAlign: "end",
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Terrorists
              </motion.div>
            )}
          </div>
          <div className="h-full w-full flex flex-row gap-[1px] text-2xl">
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className="absolute top-2 left-5 text-lg text-[#CCCCCC]">
                1
              </div>
              <div className="cursor-pointer absolute top-2 right-5 text-xl text-[#CCCCCC]">
                +
              </div>
              <div className="h-12 text-[#CCCCCC]">Equipment</div>
              <div className="h-full flex flex-col gap-3 overflow-x-hidden">
                {(ctSide ? ctItems : tItems).equipment.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                    id={item.name}
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className="absolute top-2 left-5 text-lg text-[#CCCCCC]">
                2
              </div>
              <div className="cursor-pointer absolute top-2 right-5 text-xl text-[#CCCCCC]">
                +
              </div>
              <div className="h-12 text-[#CCCCCC]">Pistols</div>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(event) => handleDragEnd(event, setPistols, pistols)}
              >
                <SortableContext
                  items={pistols.map((item) => item.name)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="h-full flex flex-col gap-2 overflow-x-hidden">
                    {(ctSide ? ctItems : tItems).pistols.map((item, index) => (
                      <ItemBox
                        key={item.name}
                        name={item.name}
                        index={index + 1}
                        price={item.price}
                        id={item.name}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className="absolute top-2 left-5 text-lg text-[#CCCCCC]">
                3
              </div>
              <div className="cursor-pointer absolute top-2 right-5 text-xl text-[#CCCCCC]">
                +
              </div>
              <div className="h-12 text-[#CCCCCC]">Mid-Tier</div>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(event) => handleDragEnd(event, setMidTier, midTier)}
              >
                <SortableContext
                  items={midTier.map((item) => item.name)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="h-full flex flex-col gap-2 overflow-x-hidden">
                    {(ctSide ? ctItems : tItems).midTier.map((item, index) => (
                      <ItemBox
                        key={item.name}
                        id={item.name}
                        name={item.name}
                        index={index + 1}
                        price={item.price}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className="absolute top-2 left-5 text-lg text-[#CCCCCC]">
                4
              </div>
              <div className="cursor-pointer absolute top-2 right-5 text-xl text-[#CCCCCC]">
                +
              </div>
              <div className="h-12 text-[#CCCCCC]">Rifles</div>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(event) => handleDragEnd(event, setRifles, rifles)}
              >
                <SortableContext
                  items={rifles.map((item) => item.name)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="h-full flex flex-col gap-2 overflow-x-hidden">
                    {(ctSide ? ctItems : tItems).rifles.map((item, index) => (
                      <ItemBox
                        key={item.name}
                        id={item.name}
                        name={item.name}
                        index={index + 1}
                        price={item.price}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>
            <div className="w-full h-full flex-1 backdrop-blur-xl bg-black/50 p-4 pt-1 relative">
              <div className="absolute top-2 left-5 text-lg text-[#CCCCCC]">
                5
              </div>
              <div className="cursor-pointer absolute top-2 right-5 text-xl text-[#CCCCCC]">
                +
              </div>
              <div className="h-12 text-[#CCCCCC]">Grenades</div>
              <div className="h-full flex flex-col gap-3 overflow-x-hidden">
                {(ctSide ? ctItems : tItems).grenades.map((item, index) => (
                  <ItemBox
                    name={item.name}
                    price={item.price}
                    index={index + 1}
                    id={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-black/50 w-full h-40 p-4">
            ASFOKINAFIUAWHBFAUFW
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
