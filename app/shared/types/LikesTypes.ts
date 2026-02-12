export type LikeSelectorProps = {
  initialState: number;
}

export type LikesSubmitRequest = {
  number: number;
};

export type LikesSubmitResponse =
  | { ok: true; average: number }
  | { ok: false; error: string; message: string };
