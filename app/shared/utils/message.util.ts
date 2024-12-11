export function getCounterMessage(count: number): string {
  if (count <= 0) {
    return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  }
  return `${count} taps left`;
}