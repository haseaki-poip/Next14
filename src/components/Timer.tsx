type Data = {
  abbreviation: string; // タイムゾーンの略称
  client_ip: string; // APIを呼び出したクライアントのIPアドレス
  datetime: string; // 現在の日時（ISO 8601形式）
  day_of_week: number; // 週の何日目か（1が月曜日）
  day_of_year: number; // 年の何日目か
  dst: boolean; // 夏時間（daylight saving time）が適用されているか
  dst_from: string | null; // 夏時間の開始日時（ISO 8601形式）、夏時間がない場合はnull
  dst_offset: number; // 夏時間のオフセット（秒）
  dst_until: string | null; // 夏時間の終了日時（ISO 8601形式）、夏時間がない場合はnull
  raw_offset: number; // UTCからのオフセット（秒）
  timezone: string; // タイムゾーンの名前（例: "Asia/Tokyo"）
  unixtime: number; // UNIXタイムスタンプ
  utc_datetime: string; // UTCでの現在の日時（ISO 8601形式）
  utc_offset: string; // UTCからのオフセット（例: "+09:00"）
  week_number: number; // 年の何週目か
};

const getDatas = async (locate: string): Promise<Data> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/${locate}`,
    {
      //   cache: "force-cache",
      cache: "no-store",
      //   next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Timer = async ({ locate }: { locate?: string }) => {
  const data = await getDatas(locate ?? "Tokyo");
  return <div>{data.datetime}</div>;
};

export default Timer;
