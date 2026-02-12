import { NextResponse } from 'next/server';

import { LikesSubmitRequest } from '@/app/shared/types/LikesTypes';

export async function POST(req: Request): Promise<NextResponse> {
  let body: LikesSubmitRequest;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json', message: 'Request body must be JSON.' },
      { status: 400 },
    );
  }

  const average: number = Number(body?.number);
  return NextResponse.json({ ok: true, average: average }, { status: 200 });
}
