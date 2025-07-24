import { motion } from "motion/react";
import type { ReactElement } from "react";

interface Props {
  name: string;
  price: number;
  img?: ReactElement;
  index: number;
  selected?: boolean;
}

const ItemBox = ({ name, price, img, index, selected }: Props) => {
  return (
    <motion.div
      key={name + index}
      className="h-full w-full flex items-center justify-center border-1 border-black border-solid relative text-lg p-4 rounded-lg cursor-pointer"
      initial={{
        boxShadow: "inset 0px 0px 48px 0px rgba(0,0,0,0.5)",
        backgroundColor: "#454545",
        opacity: 0,
      }}
      animate={{
        backgroundColor: "#454545",
        opacity: 1,
        color: selected ? "#37B652" : "inherit",
      }}
      exit={{ opacity: 0 }}
      whileHover={{ backgroundColor: "#5E5F5E" }}
    >
      <motion.div
        className="absolute top-1 left-3 text-[#CCCCCC]"
        initial={{ color: "#CCCCCC" }}
        animate={{ color: selected ? "#37B652" : "#CCCCCC" }}
      >
        {index}
      </motion.div>
      <div className="absolute top-1 right-3 max-w-[66%] text-right">
        {name}
      </div>
      {img && <div>{img}</div>}
      <div className="absolute bottom-1 right-3">{`$${price}`}</div>
    </motion.div>
  );
};

export default ItemBox;
