'use client';

import {  useState } from 'react';
import {RequestedSeed, SeedFormProps, SendSeedResponse} from "@/app/shared/types/SeedTypes";

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
    <section className="w-full bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3">
          <div className="min-w-0 flex-1">
            <label className="block text-sm font-semibold text-black">Seed</label>
            <p className="mt-1 text-xs text-black">
              64-bit decimal seed (0..18446744073709551615)
            </p>
          </div>
          <button
            type="button"
            onClick={() => void randomSeed()}
            disabled={loading}
            className="shrink-0 rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            Random
          </button>
        </div>

        <div className="flex gap-2">
        <input
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          inputMode="numeric"
          aria-label="64-bit seed"
          placeholder="42"
          className="w-full rounded-lg border border-black bg-white px-3 py-2 text-sm text-black outline-none focus:border-gray-400"
        />
        <button
          type="button"
          onClick={() => void submitSeed()}
          disabled={loading}
          className="shrink-0 rounded-lg border border-black-200 bg-white px-3 py-2 text-sm font-semibold text-black disabled:opacity-60"
        >
          Apply
        </button>
      </div>

        {error ? (
          <p className="text-s font-medium text-red-600">{error}</p>
        ) : (
          <p className="text-s text-black">
            Submitted: <span className="font-mono">{submitted}</span>
            {loading ? <span> Loading</span> : null}
          </p>
        )}
      </div>
    </section>
  );
}
