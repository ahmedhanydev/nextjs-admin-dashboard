import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { createUser } from "./../../../lib/actions";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={createUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false.toString()}>Is Admin?</option>
          <option value={true.toString()}>Yes</option>
          <option value={false.toString()}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true.toString()}>Is Active?</option>
          <option value={true.toString()}>Yes</option>
          <option value={false.toString()}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
