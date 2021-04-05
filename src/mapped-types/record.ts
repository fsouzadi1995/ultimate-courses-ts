type dictionary = Record<number, TrackStates>; // [x: number]: TrackStates

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: 'ae31adc',
  next: '81acffb',
};

// Numbers are coerced to String
// dictionary['player'] = item;

console.log();

interface Song {}
