export const setupCookies = {
  httpOnly: true,
  secure: process.env.NODE_ENV !== "development",
  maxAge: 60 * 60 * 24 * 7,
  sameSite: "strict",
  path: "/",
};