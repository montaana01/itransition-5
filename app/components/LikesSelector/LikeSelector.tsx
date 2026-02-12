'use client';

import {
  LikeSelectorProps,
  LikesSubmitRequest,
  LikesSubmitResponse
} from '@/app/shared/types/LikesTypes';
import {useEffect, useState} from "react";

export function LikeSelector(props: LikeSelectorProps) {
  const [average, setAverage] = useState<string>(String(props.initialState));
  const [likesSubmitted, setLikesSubmitted] = useState<number>(props.initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const submitAverage = async (value: number): Promise<void> => {
    setIsLoading(true);
    setError(null);

    const payload: LikesSubmitRequest = {number: value};

    try {
      const res = await fetch('/api/likes/submit', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(payload),
      });

      const json: LikesSubmitResponse = await res.json();
      if (!json.ok) {
        setError(json.message);
        return;
      }

      setLikesSubmitted(json.average);
    } catch {
      setError('Network error while submitting average.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const parsed = Number(average);

    if (!Number.isFinite(parsed) || (parsed < 0 || parsed > 10)) {
      setError('Number must be a  in range 0..10');
      return;
    }

    if (parsed === likesSubmitted) {
      if (error) setError(null);
      return;
    }

    if (error) setError(null);

    const handle = window.setTimeout(() => {
      void submitAverage(parsed);
    }, 250);

    return () => {
      window.clearTimeout(handle);
    };
  }, [average, likesSubmitted, error]);


  return (
    <>
      <div className="flex items-center gap-1 flex-col w-60">
        <label className="block text-sm font-semibold ">Likes avg</label>
        <div className="flex items-center gap-1">
          <div className="block w-20">
            {error ? (
              <p className="mt-2 text-sm font-medium text-red-600">{error}</p>
            ) : (
              isLoading ? (<p className="mt-2 text-sm"><span> Loading</span></p>) : (
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={average}
                  onChange={(e) => setAverage(e.target.value)}
                  className="w-full"
                />)
            )}
          </div>
          <input
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={average}
            onChange={(e) => setAverage(e.target.value)}
            className="w-20 rounded-lg border border-white px-2 py-1 text-sm outline-none cursor-pointer focus:border-gray-400"
          />
        </div>
      </div>
    </>
  )
}
