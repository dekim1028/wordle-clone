export interface IBoardInitState {
  tried: number;
  triedData: ITriedData[][];
  inputList: string[][];
  answer: string;
  wordData: Record<string, WordStatusType>;
  isFinished: boolean;
}

export interface ITriedData {
  idx: number;
  key: string;
  status: WordStatusType;
}

export type WordStatusType = '' | 'C' | 'W' | 'N';
