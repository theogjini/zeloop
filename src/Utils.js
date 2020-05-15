function calculateTempoInMs(tempo) {
  const divided = 60 / tempo;
  return divided * 1000;
}

export { calculateTempoInMs };
