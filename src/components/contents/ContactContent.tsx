import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const phoneNumber = "09378624436";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(phoneNumber);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Contact</h2>

      <ul className="space-y-2 text-sm p-2 drop-shadow-2xl">
        <li>
          <span className="font-semibold">Location:</span> Tehran
        </li>

        <li className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>

          {/* Click number → Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="hover:underline"
          >
            {phoneNumber}
          </a>

          {/* Click icon → Copy */}
          <button
            onClick={handleCopy}
            className="hover:opacity-70 transition"
            aria-label="Copy phone number"
            title="Copy phone number"
          >
            {copied ? (
              <FiCheck className="text-green-500" />
            ) : (
              <FiCopy />
            )}
          </button>
        </li>

        <li>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:yeganeh.bakhshi.at@gmail.com"
            className="underline"
          >
            yeganeh.bakhshi.at@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;