import { useEffect, useState } from "react";
import Inventory from "../clues/Book";

const keys = {
  KeyE: "inventory",
};

const moveFieldByKey = (key) => keys[key];

const useInventoryControls = () => {
  const [inventory, setInventory] = useState(false);

  useEffect(() => {
    const handleKeyDown = (i) => {
      if (e.code === "KeyI") {
        setInventory(true);
      }
    };

    const handleKeyUp = (i) => {
      if (i.code === "KeyI") {
        setInventory(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return inventory;
};

const Inventory2 = () => {
  const inventoryOpen = useInventoryControls();

  return (
    <div className={`inventory ${inventoryOpen ? "open" : ""}`}>
      <Inventory />
    </div>
  );
};

export default Inventory2;
