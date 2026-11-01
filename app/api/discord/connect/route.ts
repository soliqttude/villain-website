import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(new URL("/linked-role", process.env.NEXT_PUBLIC_SITE_URL || "https://villain.best"));
}
