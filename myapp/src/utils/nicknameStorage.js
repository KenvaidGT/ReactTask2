const PREFIX = "nickname:";

const hasStorage = () => {
  try {
    return typeof window !== "undefined" && window.localStorage;
  } catch {
    return false;
  }
};

export const saveNickname = (userId, nickname) => {
  if (!hasStorage() || !userId) return;
  const value = nickname?.trim();
  if (!value) return;
  window.localStorage.setItem(`${PREFIX}${userId}`, value);
};

export const getNickname = (userId) => {
  if (!hasStorage() || !userId) return null;
  return window.localStorage.getItem(`${PREFIX}${userId}`);
};
