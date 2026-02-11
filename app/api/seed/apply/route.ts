import { NextResponse } from 'next/server';

import { formatSeedU64Decimal, parseSeedU64 } from '@/app/shared/helpers/seed';
import { RequestedSeed } from "@/app/shared/types/SeedTypes";


export async function POST(req: Request): Promise<NextResponse> {
  let body: RequestedSeed;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json', message: 'Request body must be JSON.' },
      { status: 400 },
    );
  }

  try {
    const seed = parseSeedU64(body?.seed.toString());
    return NextResponse.json({ ok: true, seed: formatSeedU64Decimal(seed) }, { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Invalid seed.';
    return NextResponse.json(
      { ok: false, error: 'invalid_seed', message: msg },
      { status: 400 },
    );
  }
}
