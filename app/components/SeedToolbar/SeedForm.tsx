'use client';

import { useState } from 'react';
import { RequestedSeed, SeedFormProps, SendSeedResponse } from "@/app/shared/types/SeedTypes";

export function SeedForm({ initialSeed }: SeedFormProps) {
  const [seed, setSeed] = useState(initialSeed);
  const [submitted, setSubmitted] = useState(initialSeed);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitSeed = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/seed/apply', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ seed: seed }),
      });

      const json: SendSeedResponse = (await res.json());

      if (!json.ok) {
        setError(json.message);
        return;
      }

      setSubmitted(json.seed);
    } catch {
      setError('Network error while applying seed.');
    } finally {
      setLoading(false);
    }
  };

  const randomSeed = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const res: Response = await fetch('/api/seed/random', { method: 'POST' });
      const json: RequestedSeed = await res.json();

      setSeed(json.seed);
      setSubmitted(json.seed);
    } catch {
      setError('Network error while generating random seed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-80 pt-2 pb-2 shadow-sm">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <label className="block font-semibold ">Seed:</label>

          <div className="flex gap-2">
            <input
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              inputMode="numeric"
              aria-label="64-bit seed"
              placeholder="42"
              className="w-20 rounded-lg border border-black bg-white px-2 py-1 text-sm text-black outline-none focus:border-gray-400"
            />
            <button
              type="button"
              onClick={() => void submitSeed()}
              disabled={loading}
              className="shrink-0 rounded-lg border border-black-200 bg-white px-2 py-1 text-sm font-semibold text-black cursor-pointer disabled:opacity-60"
            >
              Apply
            </button>
          </div>
          <button
            type="button"
            onClick={() => void randomSeed()}
            disabled={loading}
            className="shrink-0 rounded-lg border border-white bg-black px-2 py-1 text-sm font-semibold text-white cursor-pointer disabled:opacity-60"
          >
            Random
          </button>
        </div>
        {error ? (
          <p className="text-s font-medium text-red-600">{error}</p>
        ) : (
          loading ?
            (<span> Loading</span>)
            :
            (<p className="text-s">
              Submitted: <span className="font-mono">{submitted}</span>
            </p>)
        )}
      </div>
    </section>
  );
}
