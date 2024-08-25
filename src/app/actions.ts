import { sessionOptions, SessionData } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const getSessionData = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  return session;
};

export const getSession = async () => {};
export const login = async () => {};
export const logout = async () => {};
