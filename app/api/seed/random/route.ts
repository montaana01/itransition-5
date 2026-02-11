import { NextResponse } from 'next/server';
import { formatSeedU64Decimal, randomSeedU64 } from '@/app/shared/helpers/seed';

export function POST(): NextResponse {
  const seed = randomSeedU64();
  return NextResponse.json({ seed: formatSeedU64Decimal(seed) }, { status: 200 });
}
