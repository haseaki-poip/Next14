"use client";

import { useState } from "react";

const SsgChildComponent = ({ date }: { date: string }) => {
  const [dateState, setDateState] = useState<string>(date);
  return (
    <div>
      こちらは子コンポーネントで時間を表示
      <p>{dateState}</p>
    </div>
  );
};

export default SsgChildComponent;
