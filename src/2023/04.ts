import { Expect, Equal } from 'type-testing';

/**
 * Christmas Present Delivery Addresses
 * [a conversation in the North Pole kitchenette on the morning of December 4th between Santa and the head elf, Bernard]
 * 
 * [Bernard] This is bullshit, Kris. I've been leading the Elves for 200+ years. Don't you trust that I know what I'm talking about?? WE NEED TO GROW THE TEAM. We're running a skeleton-crew here.
 * 
 * [Santa] Remember, we're like a family here; we all make sacrifices! We're still a startup!
 * 
 * [Bernard] I swear to you. I think if I hear another hussle-culture quip from you.... I think my little elf head will explode.
 * 
 * [Santa] If you can stick to it now and get us through one more year, there will definitely be rewards down the line.
 * 
 * [Bernard] I don't know why I even bothered asking...
 * 
 * Clearly, Bernard is a bit disgruntled. Can you blame him? Alas, there's still more work to do. Bernard walks away and mutters to himself:
 * 
 * [Bernard] Guess it's time to drag myself through another pointless TypeScript type challenge with no practical application.
 * 
 * Poor Bernard. Let's help him out.
 * 
 * Today's task is to craft a type (PresentDeliveryList) that takes an object type as an input and then replaces the values at each property with an Address. We don't know in advance what properties will be provided, which is why it needs to be a generic type. Otherwise Bernard would probably just copy/pasta it to get through the day.
 */

// solutions

type Address = { address: string; city: string };
type PresentDeliveryList<T> = Record<keyof T, Address>;

// test

type MixedBehaviorList = {
  john: { behavior: 'good' };
  jimmy: { behavior: 'bad' };
  sara: { behavior: 'good' };
  suzy: { behavior: 'good' };
  chris: { behavior: 'good' };
  penny: { behavior: 'bad' };
};
type test_MixedBehaviorTest_actual = PresentDeliveryList<MixedBehaviorList>;
//   ^?
type test_MixedBehaviorTest_expected = {
  john: Address;
  jimmy: Address;
  sara: Address;
  suzy: Address;
  chris: Address;
  penny: Address;
};
type test_MixedBehaviorTest = Expect<
  Equal<test_MixedBehaviorTest_actual, test_MixedBehaviorTest_expected>
>;

type Unrelated = {
  hello: { hello: 'hello' };
  world: { world: 'world' };
};
type test_Unrelated_actual = PresentDeliveryList<Unrelated>;
//   ^?
type test_Unrelated_expected = {
  hello: Address;
  world: Address;
};
type test_Unrelated = Expect<Equal<test_Unrelated_actual, test_Unrelated_expected>>;
