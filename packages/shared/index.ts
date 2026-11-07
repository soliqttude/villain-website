export const MAX_ACCOUNTS_PER_USER = 3;

export const DEFAULT_PREFIX = ".";

export type PresenceType =
  | "PLAYING"
  | "WATCHING"
  | "LISTENING"
  | "COMPETING"
  | "CUSTOM";

export interface PresenceConfig {
  enabled: boolean;
  type?: PresenceType;
  name?: string;
  details?: string;
  state?: string;
}

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ADD_ACCOUNT: "ADD_ACCOUNT",
  REMOVE_ACCOUNT: "REMOVE_ACCOUNT",
  RESTART_ACCOUNT: "RESTART_ACCOUNT",
  UPDATE_PRESENCE: "UPDATE_PRESENCE",
  UPDATE_PREFIX: "UPDATE_PREFIX",
  ADMIN_VIEW: "ADMIN_VIEW",
} as const;

export type ActionType = (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];
