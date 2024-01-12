export default function Footer() {
  return (
    <footer>
      <ul className="flex gap-x-1 justify-center items-center">
        <li>
          <a
            href="https://linkedin.com/in/jeni-b-4a5080151/"
            className="hover:underline hover:font-medium"
          >
            Linkedin
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="https://github.com/jenibober" className="hover:underline hover:font-medium">
            Github
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="https://paperjoycards.com/" className="hover:underline hover:font-medium">
            Shop
          </a>
        </li>
      </ul>
    </footer>
  );
}
