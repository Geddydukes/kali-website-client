const appApi = "http://localhost:4100/api/v1";

export const indexphotos = async () => {
  const res = await fetch(`${appApi}/photos`, { method: "Get" });
  const json = await res.json();
  return json;
};

export const showPhotos = (PhotoId) => {
  return fetch(`${appApi}/photos/${PhotoId}`).then((res) => res.json());
};
