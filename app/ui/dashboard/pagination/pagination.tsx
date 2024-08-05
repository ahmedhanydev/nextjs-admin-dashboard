"use client";
import styles from "./pagination.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
type Props = {
  count: number;
};
const Pagination = ({ count }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const itemsPerPage = 2;
  const hasPrev = itemsPerPage * (page - 1) > 0;
  const hasNext = itemsPerPage * (page - 1) + itemsPerPage < count;

  const handleChangePage = (type: string) => {
    const newPage = type === "previous" ? page - 1 : page + 1;
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("previous")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
