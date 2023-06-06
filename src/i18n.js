import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Sign Up": "Sign Up",
      "First name": "First name",
      "Last name": "Last name",
      "Email": "Email",
      "Phone": "Phone",
      "Password": "Password",
      "Password submit": "Password submit",
      "I accept terms and condition": "I accept terms and condition",
      "Submit": "Submit",
      "Required": "Required",
      "Invalid email": "Invalid email",
      "The 'Phone' field must be in the format of a phone number": "The 'Phone' field must be in the format of a phone number: +713....",
      "Password must contain at least 12 characters": "Password must contain at least 12 characters",
      "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character": "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      "Passwords must match": "Passwords must match",
      "404 not found": "404 not found",
      "Woops. Looks like this page doesn't exist.": "Woops. Looks like this page doesn't exist.",
      "To home page": "To home page",
      "News": "News",
      "History of the company": "History of the company",
      "Public offer": "Public offer",
      "Customer Service": "Customer Service",
      "Press Service": "Press Service",
      "Wholesale": "Wholesale",
      "Lorem ipsum dolor sit amet consectetur": "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga quae quos? Corporis tenetur sed obcaecati facilis quos commodi, recusandae nostrum, voluptatem, quisquam aliquam quod. Ex culpa animi aperiam atque!": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga quae quos? Corporis tenetur sed obcaecati facilis quos commodi, recusandae nostrum, voluptatem, quisquam aliquam quod. Ex culpa animi aperiam atque!",
      "Log Out": "Log Out",
      "About": "About",
      "Products": "Products",
      "Contacts": "Contacts",
      "Submit": "Submit",
      "Welcome to React": "Welcome to React and react-i18next",
      "User info": "User info",
      "firstName": "First Name",
      "lastName": "Last Name",
      "email": "Email",
      "phone": "Phone",
    }
  },
  ru: {
    translation: {
      "Sign Up": "Регистрация",
      "First name": "Имя",
      "Last name": "Фамилия",
      "Email": "Почта",
      "Phone": "Телефон",
      "Password": "Пароль",
      "Password submit": "Подтверждение пароля",
      "I accept terms and condition": "Я принимаю условия использования сайта",
      "Submit": "Подтвердить",
      "Required": "Обязательное поле",
      "Invalid email": "Некоректный email",
      "The 'Phone' field must be in the format of a phone number": "Поле 'Телефон' должно быть в формате телефонного номера: +713....",
      "Password must contain at least 12 characters": "Пароль должен содержать минимум 12 символов",
      "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character": "Пароль должен содержать по крайней мере одну заглавную букву, одну строчную букву, одну цифру и один специальный символ",
      "Passwords must match": "Пароли должны совпадать",
      "404 not found": "404 not found",
      "Woops. Looks like this page doesn't exist.": "Упс. Похоже, этой страницы не существует.",
      "To home page": "На главную",
      "News": "Новости",
      "History of the company": "История компании",
      "Public offer": "Публичная офферта",
      "Customer Service": "Поддержка клиентов",
      "Press Service": "Прессслужба",
      "Wholesale": "Стать партнером",
      "Lorem ipsum dolor sit amet consectetur": "Как принято считать, реплицированные с зарубежных источников",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga quae quos? Corporis tenetur sed obcaecati facilis quos commodi, recusandae nostrum, voluptatem, quisquam aliquam quod. Ex culpa animi aperiam atque!": "Как принято считать, реплицированные с зарубежных источников, современные исследования объявлены нарушающими общечеловеческие нормы этики и морали. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает актуальность соответствующих условий активизации. Следует отметить, что высококачественный прототип будущего проекта требует анализа первоочередных требований!",
      "Log Out": "Выйти",
      "About": "О компании",
      "Products": "Продукты",
      "Contacts": "Контакты",
      "Submit": "Подтвердить",
      "Submit": "Подтвердить",
      "Submit": "Подтвердить",
      "React": "next",
      "User info": "Информация о пользователе",
      "firstName": "Имя",
      "lastName": "Фамилия",
      "email": "Почта",
      "phone": "Телефон",
      "Welcome to React": "Bienvenue à React et react-i18next",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;