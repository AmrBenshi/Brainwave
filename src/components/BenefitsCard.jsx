import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
const BenefitsCard = (props) => {
  return (
      <div
        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
        style={{
          backgroundImage: `url(${props.item.backgroundUrl})`,
        }}
      >
        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
          <h5 className="h5 mb-5">{props.item.title}</h5>
          <p className="body-2 mb-6 text-n-3">{props.item.text}</p>
          <div className="flex props.items-center mt-auto">
            <img
              src={props.item.iconUrl}
              width={48}
              height={48}
              alt={props.item.title}
            />
            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
              Explore more
            </p>
            <Arrow />
          </div>
        </div>

        {props.item.light && <GradientLight />}
        <div
          className="absolute inset-0.5 bg-n-7"
          style={{ clipPath: "url(#benefits)" }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
            {props.item.imageUrl && (
              <img
                src={props.item.imageUrl}
                width={380}
                height={362}
                alt={props.item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <ClipPath />
      </div>
  );
};

export default BenefitsCard;
