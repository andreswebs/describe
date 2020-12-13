function description(
  input: { name: string; given: string; should: string },
): string {
  const { name, given, should } = input;
  return `${name}:\n  given: ${given}\n  should: ${should}\n`;
}

export { description };
