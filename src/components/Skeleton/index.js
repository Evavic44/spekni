import Skeleton from "react-content-loader";

const MyLoader = (props) => (
  <Skeleton
    speed={3}
    width={497}
    height={160}
    viewBox="0 0 497 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="210" y="33" rx="3" ry="3" width="183" height="8" />
    <rect x="216" y="62" rx="3" ry="3" width="380" height="6" />
    <rect x="216" y="88" rx="3" ry="3" width="267" height="7" />
    <circle cx="84" cy="83" r="77" />
    <rect x="210" y="122" rx="0" ry="0" width="81" height="13" />
    <rect x="307" y="124" rx="0" ry="0" width="75" height="12" />
    <rect x="30" y="218" rx="0" ry="0" width="194" height="343" />
    <rect x="404" y="124" rx="0" ry="0" width="76" height="11" />
    <rect x="451" y="127" rx="0" ry="0" width="7" height="2" />
  </Skeleton>
);

export default MyLoader;
