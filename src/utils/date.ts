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

export const formatDate = (date?: string) => {
  if (!date) return '-';

  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
