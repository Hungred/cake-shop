export const dateFormat = (date) => {
  const timestamp = +date * 1000;
  if (timestamp <= 0 || isNaN(timestamp)) return '-';
  const d = new Date(timestamp);
  const pad = (n) => String(n).padStart(2, '0');

  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hour = pad(d.getHours());
  const minute = pad(d.getMinutes());
  const second = pad(d.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

export default {
  dateFormat,
};
