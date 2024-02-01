export const diffTime = (end: number, start: number) => {
  const second = Math.floor((end - start) / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);

  return {
    second,
    minute,
    hour,
    day,
  };
};
