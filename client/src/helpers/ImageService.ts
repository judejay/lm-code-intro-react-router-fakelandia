const getRandomImage = async (): Promise<string> => {
  try {
    const response = await fetch("https://picsum.photos/200/300");
    const arrayBuffer = await response.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(arrayBuffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return `data:${response.headers.get("content-type")};base64,${base64}`;
  } catch (error) {
    throw new Error("Error fetching image: " + (error as Error).toString());
  }
};

export default getRandomImage;
