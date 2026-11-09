/** 3rr Game image assets in /public */
export const IMAGES = {
  app: "/3rr-game.webp",
  logo: "/3rr-game-logo.webp",
  icon: "/3rr-icon.webp",
  pakistan: "/3rr-game-pakistan.webp",
  apk: "/3rr-game-apk.webp",
  account: "/3rr-game-account.webp",
  addMoney: "/3rr-game-deposit-money.webp",
  invite: "/3rr-game-invite-friends-and-earn.webp",
  og: "/feature-og.webp",
} as const;

export const APP_ICON_SIZE = { width: 512, height: 512 } as const;
/** Portrait phone screenshots from 3rrapk.com.pk */
export const SCREENSHOT_SIZE = { width: 680, height: 1200 } as const;

/** Images listed in image-sitemap.xml — must match on-page src URLs exactly */
export const SITEMAP_IMAGES = [
  { src: IMAGES.app, title: "3rr Game App", caption: "3rr Game official app icon for Pakistan Android download" },
  { src: IMAGES.logo, title: "3rr Game Logo", caption: "3rr Game brand logo" },
  { src: IMAGES.pakistan, title: "3rr Game Pakistan Lobby", caption: "3rr Game Pakistan home screen with games and promotions" },
  { src: IMAGES.apk, title: "3rr Game Events", caption: "3rr Game APK events and rewards screen" },
  { src: IMAGES.account, title: "3rr Game Account", caption: "3rr Game account profile and wallet screen" },
  { src: IMAGES.addMoney, title: "3rr Game Deposit", caption: "3rr Game deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.invite, title: "3rr Game Refer and Earn", caption: "3rr Game invite friends and referral rewards screen" },
] as const;

/** All app screenshots except the main app icon — used once in the gallery */
export const SCREENSHOTS = [
  { src: IMAGES.pakistan, label: "Game Lobby", alt: "3rr Game Pakistan home screen showing games and promotions" },
  { src: IMAGES.apk, label: "Events & Rewards", alt: "3rr Game APK events and rewards screen" },
  { src: IMAGES.account, label: "Account & Wallet", alt: "3rr Game account profile and wallet screen" },
  { src: IMAGES.addMoney, label: "Deposit", alt: "3rr Game deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.invite, label: "Invite & Earn", alt: "3rr Game invite friends and referral rewards screen" },
] as const;

export type ImageKey = keyof typeof IMAGES;
