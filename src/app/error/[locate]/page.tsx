import Timer from "@/components/Timer";
import { Suspense } from "react";
import Error from "../error";
import Loading from "@/app/load/loading";

const ErrorTestPage = ({
  params: { locate },
}: {
  params: { locate: string };
}) => {
  return (
    <div>
      <h1>このページでは取得した時間を表示します。</h1>
      <p>現在の時間は</p>

      {/* 部分的にloadingUIを表示させる時はSusupenseで囲む */}
      <Suspense fallback={<Loading />}>
        {/* 中に時間のかかる処理をもつコンポーネント */}
        <Timer locate={locate} />
      </Suspense>

      {/* 部分的にではなくページ全体にLoadinUIを表示させる時はSuspenseで囲まず、loading.tsxを作っておくだけ */}
    </div>
  );
};

export default ErrorTestPage;
