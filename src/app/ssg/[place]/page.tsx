import { Suspense } from "react";

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

const getDatas = async (place: string): Promise<Data> => {
  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Asia/${place}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const SSG = async ({ params: { place } }: { params: { place: string } }) => {
  const data = await getDatas(place);

  return (
    <div>
      <h1>{data.datetime}</h1>
      <p>place: {place}</p>
    </div>
  );
};

export default SSG;
