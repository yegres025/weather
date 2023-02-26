import { ELEMENTS } from "../elements/elements";

export async function weatherRequest(item) {
  const url = `${ELEMENTS.serverUrl}?q=${item}&appid=${ELEMENTS.apiKey}&units=metric`;

  let promise = await fetch(url);

  const result = await promise.json();

  return result;
}
