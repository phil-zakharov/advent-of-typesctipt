import { Expect, Equal } from 'type-testing';

// solutions

type FilterKey<T, exclude extends string> = {
  [K in keyof T as K extends `${exclude}${string}` ? never : K]: T[K]
}

type RemoveNaughtyChildren<T> = FilterKey<T, 'naughty'>

// tests

type SantasList = {
  naughty_tom: { address: '1 candy cane lane' };
  good_timmy: { address: '43 chocolate dr' };
  naughty_trash: { address: '637 starlight way' };
  naughty_candace: { address: '12 aurora' };
};
type test_wellBehaved_actual = RemoveNaughtyChildren<SantasList>;
//   ^?
type test_wellBehaved_expected = {
  good_timmy: { address: '43 chocolate dr' };
};
type test_wellBehaved = Expect<Equal<test_wellBehaved_expected, test_wellBehaved_actual>>;

type Unrelated = {
  dont: 'cheat';
  naughty_play: 'fair';
};
type test_Unrelated_actual = RemoveNaughtyChildren<Unrelated>;
//   ^?
type test_Unrelated_expected = {
  dont: 'cheat';
};
type test_Unrelated = Expect<Equal<test_Unrelated_expected, test_Unrelated_actual>>;
