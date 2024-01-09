import React, { useEffect, useState } from "react";
import getRandomImage from "../helpers/ImageService";

type Props = {
  width: number | undefined;
  height: number | undefined;
};

const Punishment: React.FC<Props> = (props) => {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await getRandomImage();
        setImageData(image);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageData && <img src={imageData} alt="Random Lorem Picsum" width={props.width}
        height={props.height} />}


    </div>
  );
};

export default Punishment;
