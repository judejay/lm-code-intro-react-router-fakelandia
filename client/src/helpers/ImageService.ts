const getRandomImage = async (): Promise<string> => {
  try {
    const response = await fetch("https://picsum.photos/200/300");
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    return `data:${response.headers.get("content-type")};base64,${base64}`;
  } catch (error) {
    throw new Error("Error fetching image: " + JSON.stringify(error));
  }
};

export default getRandomImage;
