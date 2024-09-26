

const Heading = ({ title, center, subtitle }) => {
  return (
    <div className={`${center} ? "text-center" : "text-start" my-3`}>
      <div className="text-2xl">{title}</div>
      <div className="font-light text-neutral-500 ">{subtitle}</div>
    </div>
  );
};

export default Heading;