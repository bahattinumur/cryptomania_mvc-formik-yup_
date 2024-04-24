// Yuptaki bütün fonksiyonları import et
import * as yup from "yup";

// Validasyon şeması
// Formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min. 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// Bir alan için koşullları yazarken ilk olarak o alanın tipini tanımlayan yup fonksiyonunu çağırız
export const schema = yup.object().shape({
  // Email'in geçerli olması için koşullar
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is a required field"),

  // User Name gereklilikleri
  username: yup.string().required("User Name is a required field"),
  // Yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Age must be greater than or equal to 18")
    .integer("Age must be an integer")
    .required("Age is a required field"),

  // Şifrenin geçerli olması için koşullar
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    // Şifre regex kurallarına uygun mı kontrol eder
    .matches(regex, "Password is not strong enough")
    .required("Password is a required field"),

  // Şifre onay alanın geçerli olması için koşullar
  passwordConfirm: yup
    .string()
    // Oneof() kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
    // Ref() farklı bir inputtaki veriye erişmemizi sağlar
    .oneOf([yup.ref("password")], "Your password does not match")
    .required("PasswordConfirm is a required field"),
});
