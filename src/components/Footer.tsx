export default function Footer() {
  return (
    <footer className="fixed flex justify-center gap-2 w-full bottom-0 items-center py-4 bg-gradient-to-r from-portfolio-deep via-portfolio-dark to-portfolio-base text-portfolio-light">
      <p className="text-xs">
        © {new Date().getFullYear()} Creado con ❤️ por
      </p>
      <a
        href="https://www.sinapsialab.com"
        className="gradient-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        SinapsiaLab
      </a>
    </footer>
  );
}
