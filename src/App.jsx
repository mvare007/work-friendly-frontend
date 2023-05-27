import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_pt from "./translations/pt/common.json";
import UserDataTable from "./components/datatables/UserDataTable";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en,
    },
    pt: {
      common: common_pt,
    },
  },
});

function App() {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <UserDataTable />
      </I18nextProvider>
    </>
  );
}

export default App;
