function description(
  { name, given, should }: { name?: string; given: string; should: string },
): string {
  if (name) {
    return `${name}:\n  given: ${given}\n  should: ${should}\n`;
  }
  return `\n  given: ${given}\n  should: ${should}\n`;
}

export { description };
