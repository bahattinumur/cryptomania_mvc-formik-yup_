import { useFormik } from "formik";
import { schema } from "../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();

  // Formik'in bütün özelliklerini kullanmamızı sağlayan hoook
  const formik = useFormik({
    // Formda tutulcak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // Validasyon şeması
    // Inputlardaki veriler tanımladığımız şemadaki koşullara uygun mu diye kontrol eder, eğer geçerli değilse error state'ine hataları ekler
    validationSchema: schema,

    // Form gönderilince çalışıcak olan fonksiyon
    // Otomatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda çalışabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });

  return <LoginView formik={formik} />;
};

export default LoginController;
