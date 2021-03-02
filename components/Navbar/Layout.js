import Footer from "./Footer";
import Nav from "./Navbar";

const Layout = ({ children, categories, seo }) => (
    <>
        <Nav categories={categories} />
        {children}
        <Footer />
    </>
);

export default Layout;