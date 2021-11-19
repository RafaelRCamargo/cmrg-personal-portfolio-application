import Reveal from "../../Reveal";

const Work = ({
  children,
  images,
  title,
}: {
  children: any;
  images: any[];
  title: string;
}) => {
  return (
    <div className="work-container">
      <div className="work-start-col">
        <h1 className="work-title">{title}</h1>
        <p className="work-content">{children}</p>
      </div>
      <div className="work-end-col">
        <div className="work-image">
          <Reveal
            size={400}
            img1={images[0]}
            img2={images[1]}
            displacement={images[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
