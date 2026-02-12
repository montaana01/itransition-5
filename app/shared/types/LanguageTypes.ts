export type LanguageCodeType = 'en-US' | 'de-DE';

export type LanguageOptionType = {
  code: LanguageCodeType;
  label: string;
};

export type LanguageSelectorProps = {
  value: LanguageCodeType;
  options: Array<LanguageOptionType>;
  onChangeAction: (value: LanguageCodeType) => void;
  disabled?: boolean;
};
