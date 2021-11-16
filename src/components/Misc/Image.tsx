interface IImageProps {
  src: string;
  alt?: string;
}

const Image = ({ src, alt }: IImageProps) => {
  return (
    <picture>
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;
