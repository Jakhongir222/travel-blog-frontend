import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/layout.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
      </body>
    </html>
  )
}
