import { NextResponse } from 'next/server';

/** Legacy endpoint — prefer /robots.txt */
export async function GET() {
  return NextResponse.redirect(new URL('/robots.txt', 'https://3rrgame.co'), 308);
}
