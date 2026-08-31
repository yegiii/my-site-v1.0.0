// components/LinksSection.jsx

const LinksContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Links</h2>

      <ul className="space-y-2 text-sm p-2 drop-shadow-2xl">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://github.com/yegiii"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://www.linkedin.com/in/yeganeh-bakhshi/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksContent;