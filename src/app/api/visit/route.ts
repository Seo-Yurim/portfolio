import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST() {
  const today = new Date().toISOString().split("T")[0];

  // 1. 오늘 날짜 카운트 가져오기
  const { data: todayData, error: todayErr } = await supabase
    .from("visits")
    .select("count")
    .eq("date", today)
    .single();

  const todayCount = todayData?.count || 0;

  // 2. 전체 카운트 가져오기
  const { data: totalData, error: totalErr } = await supabase
    .from("visits")
    .select("count")
    .eq("date", "total")
    .single();

  const totalCount = totalData?.count || 0;

  // 3. 오늘 +1
  await supabase
    .from("visits")
    .upsert([{ date: today, count: todayCount + 1 }], { onConflict: "date" });

  // 4. 전체 +1
  await supabase
    .from("visits")
    .upsert([{ date: "total", count: totalCount + 1 }], { onConflict: "date" });

  return NextResponse.json({
    today: todayCount + 1,
    total: totalCount + 1,
  });
}
