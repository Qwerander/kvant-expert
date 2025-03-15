import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
// import { Header } from './components/header/Header';
// import { Layout } from './shared/layout/Layout';
import { BackHome } from "./components/backHome/BackHome";
import { HomePage } from "./pages/homePage/HomePage";
import { ContactsPage } from "./pages/contatsPage/ContactsPage";
import { Modal } from "./shared/Modal/Modal";
import { Form } from "./components/form/Form";
import { useState } from "react";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { Header } from "./components/header/Header";
import { ServicesPage } from "./pages/servicesPage/ServicesPage";
// import { Risk } from './pages/risk/Risk';
// import { Oferta } from './pages/oferta/Oferta';
// import { Parthner } from './pages/parthner/Parthner';
// import { Politics } from './pages/politics/Politics';

export const App = () => {
  const { pathname } = useLocation();
  const [isOpenForm, toggleIsOpenForm] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/about" element={<AboutPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/services" element={<ServicesPage toggleIsOpenForm={toggleIsOpenForm}/>} />
        <Route path="/contacts" element={<ContactsPage toggleIsOpenForm={toggleIsOpenForm}/>} />
      </Routes>
      <Footer />
      <Modal isOpen={isOpenForm} onClose={toggleIsOpenForm}>
        <Form toggleIsOpen={toggleIsOpenForm} />
      </Modal>
    </>
  );
};
