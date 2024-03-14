import CircularLoader from "./circular-loader";

export default function LoadingButton({ children, type, isLoading, style }) {
  return (
    <button className={style} type={type}>
      {isLoading ? <CircularLoader /> : children}
    </button>
  );
}
