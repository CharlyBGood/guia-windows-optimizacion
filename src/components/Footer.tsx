export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 text-center bg-portfolio-deep text-portfolio-text px-2 sm:px-4">
      <p className="text-xs sm:text-sm md:text-base leading-relaxed break-words truncate max-w-[98vw] mx-auto whitespace-nowrap overflow-hidden">
        © {year} ||{' '}
        <a
          href="https://sinapsialab.com"
          className="gradient-link"
          rel="noopener noreferrer"
        >
          SinapsiaLab
        </a>
      </p>
    </footer>
  );
}
