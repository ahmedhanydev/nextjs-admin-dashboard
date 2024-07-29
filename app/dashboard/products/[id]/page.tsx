import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder="iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="10384" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="10" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Size</label>
          <textarea name="size" placeholder="size" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="desc"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
