import crypto from 'node:crypto';

export function parseSeedU64(input: string): bigint {
  if (input.length === 0) {
    throw new Error('seed must not be empty');
  }

  if (!/^[0-9]+$/.test(input)) {
    throw new Error('seed should contain digits only');
  }

  const number = BigInt(input);
  if (number < 0n || number > ((2n ** 64n) - 1n)) {
    throw new Error('seed should be in uint64 range');
  }
  return number;
}

export function formatSeedU64Decimal(number: bigint): string {
  if (number < 0n || number > ((2n ** 64n) - 1n)) {
    throw new Error('seed out of uint64 range');
  }
  return number.toString(10);
}

export function randomSeedU64(): bigint {
  const buf = crypto.randomBytes(8);
  return buf.readBigUInt64BE();
}
