import Skeleton from "react-loading-skeleton";

const Loading = ({ count, width }) => {
  return (
    <div>
      <Skeleton
        count={count || 1}
        className={"picked"}
        style={{ width: width }}
        direction="rtl"
        duration={2}
      />
    </div>
  );
};

export default Loading;
