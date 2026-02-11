export type RequestedSeed = {
  seed: string;
};

export type SendSeedResponse =
  | { ok: true; seed: string }
  | { ok: false; error: string; message: string };

export type SeedFormProps = {
  initialSeed: string;
};
