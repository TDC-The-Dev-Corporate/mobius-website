import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobius",
  description: "Generated by Mobius",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google Tag Manager --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WHTLHHQK');
              `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                 (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', '6ZPuvh25Jszax5NL');
          `,
        }}
      />

      {/* <!-- End Google Tag Manager --> */}

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHTLHHQK"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <div>
          {children}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
