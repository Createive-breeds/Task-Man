export default function Errors({ message = "" }) {
  return <p className=" text-red-500 text-left text-[12px]">{message}</p>;
}
