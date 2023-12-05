import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

// این قسمت حواست باشه توی بخش اول چک میکنه که مدل آیا وجود داره ؟ اگر نداره میره بخش دوم که میاد میسازه
// برعکس بزاری هی میاد میسازه میسازه به ارور بر میخوری
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);


export default Product
