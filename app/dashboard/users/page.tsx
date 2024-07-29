import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search by user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                ِAhmed ali
              </div>
            </td>
            <td>ahmed@gmail.com</td>
            <td>29.07.2024</td>
            <td>Admin</td>
            <td>acitve</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                ِAhmed ali
              </div>
            </td>
            <td>ahmed@gmail.com</td>
            <td>29.07.2024</td>
            <td>Admin</td>
            <td>acitve</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
