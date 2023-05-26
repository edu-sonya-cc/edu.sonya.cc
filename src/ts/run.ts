const [_diagnostics, actual] = await Deno.bundle("global.ts", undefined, {
  target: "es3",
});

console.log(actual);
