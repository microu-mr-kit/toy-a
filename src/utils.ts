export function checkIntArgument(
  min: number,
  max: number,
  arg: string | number
): [v: number, error: string | undefined] {
  const v = typeof arg == "string" ? parseInt(arg) : arg;

  if (isNaN(v)) {
    return [v, `Invalid integer value: ${arg}`];
  }

  if (v > max || v < min) {
    return [v, `Value out of range(${min}-${max}): ${v}`];
  }

  return [v, undefined];
}
