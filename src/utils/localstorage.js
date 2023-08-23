export function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
