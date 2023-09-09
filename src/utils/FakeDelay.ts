export async function FakeDelay() {
  // Set 'false' to remove FakeDelay
  if (false) {
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}