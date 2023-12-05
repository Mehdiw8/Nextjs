import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

// این قسمت حواست باشه توی بخش اول چک میکنه که مدل آیا وجود داره ؟ اگر نداره میره بخش دوم که میاد میسازه
// برعکس بزاری هی میاد میسازه میسازه به ارور بر میخوری
export const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
