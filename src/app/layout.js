import "./globals.css";

export const metadata = {
  title: "Peperuney",
  description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’",
  openGraph: {
    title: "Peperuney",
    description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’",
    images: [
      {
        width: 800,
        height: 600,
        url: './meta-img.png',
        alt:'meta-img'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
