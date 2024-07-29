import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
type Props = {
  placeholder: string;
};
const Search = ({ placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
