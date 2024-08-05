import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt={user.username} fill />
          <Image src={user.img || "/noavatar.png"} alt={user.username} fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} readOnly />
          <label>Username</label>
          <input type="text" name="username" defaultValue={user.username} />
          <label>Email</label>
          <input type="email" name="email" defaultValue={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" defaultValue={user.phone} />
          <label>Address</label>
          <textarea name="address" defaultValue={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true.toString()} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false.toString()} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true.toString()} selected={user.isActive}>
              Yes
            </option>
            <option value={false.toString()} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
