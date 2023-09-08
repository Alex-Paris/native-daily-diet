export async function FakeDelay() {
  // Set 'false' to remove FakeDelay
  if (true) {
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}