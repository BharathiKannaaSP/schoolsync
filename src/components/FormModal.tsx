import Image from "next/image";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor = (type === "create" || type === "update") ? "bg-blueSky" : "";
  const btnSize = type === "delete" ? "25" : "16"
  return (
    <button
      className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
    >
        <Image alt={`${type}`} src={`/${type}.png`} width={btnSize} height={btnSize} />
    </button>
  );
};

export default FormModal;
