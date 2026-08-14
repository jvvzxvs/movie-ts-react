export interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSubmit: (query: string) => void;
}

export interface AdultBtnProps {
  adult: boolean;
  setAdult: (adult: boolean) => void;
}

export interface FoundProps {
  found: number;
}

export type TopBarProps = SearchBarProps & AdultBtnProps & FoundProps;

export interface BottomBarProps {
  page: number;
  setPage: (page: number) => void;
  pageMax: number;
}
