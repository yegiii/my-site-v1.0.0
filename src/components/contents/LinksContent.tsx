// components/LinksSection.jsx
const LinksContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Links</h2>
      <ul className="space-y-2 p-4">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline"
            href="https://github.com/you"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline"
            href="https://linkedin.com/in/you"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksContent;
