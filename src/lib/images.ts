/** 3 Patti World image assets — paths match 3pattiworldapp.com.pk CDN filenames */
export const IMAGES = {
  app: "/3-patti-world.webp",
  logo: "/3-patti-world.webp",
  icon: "/3-patti-world.webp",
  pakistan: "/3-patti-world-pakistan.webp",
  gamePakistan: "/3-patti-world-game-pakistan.webp",
  apk: "/3-patti-world-bonuses-and-rewards.webp",
  account: "/3-patti-world-create-account.webp",
  addMoney: "/3-patti-world-deposit-money.webp",
  invite: "/3-patti-world-refer-and-earn.webp",
  og: "/3-patti-world.webp",
} as const;

export const APP_ICON_SIZE = { width: 512, height: 512 } as const;
/** Portrait phone screenshots */
export const SCREENSHOT_SIZE = { width: 680, height: 1200 } as const;

/** Images listed in image-sitemap.xml — must match on-page src URLs exactly */
export const SITEMAP_IMAGES = [
  { src: IMAGES.app, title: "3 Patti World App", caption: "3 Patti World official app icon for Pakistan Android download" },
  { src: IMAGES.pakistan, title: "3 Patti World Pakistan Lobby", caption: "3 Patti World Pakistan home screen with Teen Patti games and promotions" },
  { src: IMAGES.gamePakistan, title: "3 Patti World Game Interface", caption: "3 Patti World in-game interface for Pakistani players" },
  { src: IMAGES.apk, title: "3 Patti World Bonuses", caption: "3 Patti World bonuses and rewards screen" },
  { src: IMAGES.account, title: "3 Patti World Account", caption: "3 Patti World create account and profile screen" },
  { src: IMAGES.addMoney, title: "3 Patti World Deposit", caption: "3 Patti World deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.invite, title: "3 Patti World Refer and Earn", caption: "3 Patti World invite friends and referral rewards screen" },
] as const;

/** All app screenshots except the main app icon — used once in the gallery */
export const SCREENSHOTS = [
  { src: IMAGES.pakistan, label: "Game Lobby", alt: "3 Patti World Pakistan home screen showing Teen Patti games and promotions" },
  { src: IMAGES.gamePakistan, label: "Game Interface", alt: "3 Patti World in-game card table interface for Android" },
  { src: IMAGES.apk, label: "Bonuses & Rewards", alt: "3 Patti World bonuses and rewards events screen" },
  { src: IMAGES.account, label: "Account Setup", alt: "3 Patti World create account and profile screen" },
  { src: IMAGES.addMoney, label: "Deposit", alt: "3 Patti World deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.invite, label: "Invite & Earn", alt: "3 Patti World invite friends and referral rewards screen" },
] as const;

export type ImageKey = keyof typeof IMAGES;
