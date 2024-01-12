export default function Footer() {
  return (
    <footer>
      <ul className="flex gap-x-1 justify-center items-center">
        <li>
          <a
            href="linkedin.com/in/jeni-b-4a5080151/"
            className="hover:underline hover:font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://github.com/jenibober"
            className="hover:underline hover:font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://paperjoycards.com/"
            className="hover:underline hover:font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Shop
          </a>
        </li>
      </ul>
    </footer>
  );
}
