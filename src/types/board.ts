export interface IBoardInitState {
  tried: number;
  triedData: ITriedData[][];
  inputList: string[][];
  answer: string;
}

export interface ITriedData {
  idx: number;
  key: string;
  status: WordStatusType;
}

export type WordStatusType = '' | 'C' | 'W' | 'N';
