import { LoadingIcon } from "./Icons";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        animation: "rotate 1s linear infinite",
      }}
    >
      <LoadingIcon color="var(--foreground)" />
    </div>
  );
};

export default Loading;
