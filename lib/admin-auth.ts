import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "villain_admin_session";
const MAX_AGE = 60 * 60 * 12;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("ADMIN_SESSION_SECRET must be at least 32 characters.");
  return value;
}
function signature(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}
export function isAdminId(id: string) {
  const allowed = (process.env.ADMIN_DISCORD_USER_IDS || "").split(",").map(x => x.trim()).filter(Boolean);
  return allowed.length === 3 && allowed.includes(id);
}
export function createAdminSession(id: string) {
  const payload = Buffer.from(JSON.stringify({ id, exp: Date.now() + MAX_AGE * 1000 })).toString("base64url");
  return payload + "." + signature(payload);
}
export function verifyAdminSession(value?: string) {
  if (!value) return null;
  const [payload, supplied] = value.split(".");
  if (!payload || !supplied) return null;
  try {
    const expected = Buffer.from(signature(payload));
    const actual = Buffer.from(supplied);
    if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { id: string; exp: number };
    if (!data.id || data.exp < Date.now() || !isAdminId(data.id)) return null;
    return { id: data.id };
  } catch { return null; }
}
export async function getAdminSession() {
  const jar = await cookies();
  return verifyAdminSession(jar.get(ADMIN_COOKIE)?.value);
}
