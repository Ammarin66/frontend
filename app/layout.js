import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer";


import { Prompt } from 'next/font/google';
const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});



export const metadata = {
  title: "WebSite",
  description: "kkkk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={prompt.className}>
      
        <Navigation />
    
        {children}
       <Footer />
      </body>
    </html>
  );
}