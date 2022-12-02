export const dataFetching = async (
  key,
  value,
  key2,
  value2,
  key3,
  value3,
  key4,
  value4
) => {
  const response = await fetch(
    `https://itunes.apple.com/search?${key}=${value}&${key2}=${value2}&${key3}=${value3}&${key4}=${value4}`
  );
  const data = await response.json();
  return data;
};

export const dataFetchingLookUp = async (valueId, limit) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${valueId}&entity=song&${limit}=200&sort=recent`
  );
  const data = await response.json();
  return data;
};

export const dataFetchingMediaType = async (key, value, key2, key3, value3) => {
  const response = await fetch(
    `https://itunes.apple.com/search?${key}=${value}&${key2}&${key3}=${value3}`
  );
  const data = await response.json();
  return data;
};
