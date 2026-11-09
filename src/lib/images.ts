/** Teen Patti Spin image assets — filenames match teenpattispingame.com.pk / local public/ */
export const IMAGES = {
  app: "/teen-patti-spin.webp",
  logo: "/3-patti-spin-logo.webp",
  icon: "/3-patti-spin-icon.webp",
  pakistan: "/3-patti-spin-pakistan.webp",
  gamePakistan: "/3-patti-spin-game.webp",
  gameInterface: "/3-patti-spin-game-interface.webp",
  apk: "/3-patti-spin-bonuses.webp",
  account: "/3-patti-spin-account.webp",
  addMoney: "/3-patti-spin-add-money.webp",
  withdraw: "/3-patti-spin-withdraw-money.webp",
  invite: "/3-patti-spin-refer-and-earn.webp",
  spinWheel: "/3-patti-spin-spin-wheel.webp",
  rebate: "/teen-patti-spin-recharge-rebate.webp",
  og: "/feature-og.webp",
} as const;

export const APP_ICON_SIZE = { width: 1024, height: 1024 } as const;
/** Landscape screenshots from teenpattispingame.com.pk */
export const SCREENSHOT_SIZE = { width: 1200, height: 565 } as const;

/** Images listed in image-sitemap.xml — must match on-page src URLs exactly */
export const SITEMAP_IMAGES = [
  { src: IMAGES.app, title: "Teen Patti Spin App", caption: "Teen Patti Spin official app icon for Pakistan Android download" },
  { src: IMAGES.logo, title: "Teen Patti Spin Logo", caption: "Teen Patti Spin brand logo" },
  { src: IMAGES.pakistan, title: "Teen Patti Spin Pakistan Lobby", caption: "Teen Patti Spin Pakistan home screen with card games and promotions" },
  { src: IMAGES.gamePakistan, title: "Teen Patti Spin Game Lobby", caption: "Teen Patti Spin lobby with Classic, Joker, Muflis and more" },
  { src: IMAGES.gameInterface, title: "Teen Patti Spin Game Interface", caption: "Teen Patti Spin in-game card table interface for Android" },
  { src: IMAGES.apk, title: "Teen Patti Spin Bonuses", caption: "Teen Patti Spin bonuses and rewards screen" },
  { src: IMAGES.account, title: "Teen Patti Spin Account", caption: "Teen Patti Spin create account and profile screen" },
  { src: IMAGES.addMoney, title: "Teen Patti Spin Deposit", caption: "Teen Patti Spin deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.withdraw, title: "Teen Patti Spin Withdraw", caption: "Teen Patti Spin withdrawal screen for JazzCash and EasyPaisa" },
  { src: IMAGES.invite, title: "Teen Patti Spin Refer and Earn", caption: "Teen Patti Spin invite friends and referral rewards screen" },
  { src: IMAGES.spinWheel, title: "Teen Patti Spin Wheel", caption: "Teen Patti Spin lucky spin wheel mini game" },
  { src: IMAGES.rebate, title: "Teen Patti Spin Recharge Rebate", caption: "Teen Patti Spin recharge rebate promotion screen" },
  { src: IMAGES.og, title: "Teen Patti Spin Open Graph Image", caption: "Teen Patti Spin social share image" },
] as const;

/** All app screenshots except the main app icon — used once in the gallery */
export const SCREENSHOTS = [
  { src: IMAGES.gamePakistan, label: "Game Lobby", alt: "Teen Patti Spin lobby showing Teen Patti modes and promotions" },
  { src: IMAGES.gameInterface, label: "Game Interface", alt: "Teen Patti Spin in-game card table interface for Android" },
  { src: IMAGES.spinWheel, label: "Spin Wheel", alt: "Teen Patti Spin lucky spin wheel with bonus prizes" },
  { src: IMAGES.apk, label: "Bonuses & Rewards", alt: "Teen Patti Spin bonuses and rewards events screen" },
  { src: IMAGES.rebate, label: "Recharge Rebate", alt: "Teen Patti Spin recharge rebate promotion for deposits" },
  { src: IMAGES.account, label: "Account Setup", alt: "Teen Patti Spin create account and profile screen" },
  { src: IMAGES.addMoney, label: "Deposit", alt: "Teen Patti Spin deposit screen with JazzCash and EasyPaisa" },
  { src: IMAGES.withdraw, label: "Withdraw", alt: "Teen Patti Spin withdraw screen for JazzCash and EasyPaisa cash-out" },
  { src: IMAGES.invite, label: "Invite & Earn", alt: "Teen Patti Spin invite friends and referral rewards screen" },
] as const;

export type ImageKey = keyof typeof IMAGES;
