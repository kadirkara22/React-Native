import * as yup from 'yup';

export default SignValidationSchema = yup.object().shape({
    firstName: yup.string().required('Adınız soyadınızı girmeniz zorunludur'),
    lastName: yup.string().required('kullanıcı adı girmeniz zorunludur'),
    email: yup.string().email("Lütfen geçerli bir email adresi giriniz").required('Email adresi girmeniz zorunludur'),
    password: yup.string().min(8, ({ min }) => `Şifreniz en az ${min} karakter olmalı.`).required("Geçerli bir şifre giriniz"),
    birthday: yup.date().required(`Please enter your child's birthday/due date`)


});
