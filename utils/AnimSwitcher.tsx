import React, { useState } from "react";
import type { PageAnimation } from "@/utils/animations";

interface AnimSwitcherProps {
  anims: PageAnimation[];
  setAnimation: React.Dispatch<React.SetStateAction<PageAnimation>>;
  setExitBeforeEnter: React.Dispatch<React.SetStateAction<boolean>>;
  startIndex: number;
}

export default function AnimSwitcher({
  anims,
  setAnimation,
  setExitBeforeEnter,
  startIndex,
}: AnimSwitcherProps) {
  const [animValue, setAnimValue] = useState(startIndex);
  const [exitBefore, setExitBefore] = useState(false);

  const handleAnimChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = Number(e.currentTarget.value);
    setAnimValue(v);
    setAnimation(anims[v]);
  };

  const handleExitBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.checked;
    setExitBefore(v);
    setExitBeforeEnter(v);
  };

  return (
    <div className="anim-switch">
      <select value={animValue} onChange={handleAnimChange}>
        {anims.map((animation, index) => {
          return (
            <option value={index} key={animation.name}>
              {animation.name}
            </option>
          );
        })}
      </select>
      <label className="exit-box">
        <input
          type="checkbox"
          checked={exitBefore}
          onChange={handleExitBeforeChange}
        />
        Overlap page transitions
      </label>
    </div>
  );
}
