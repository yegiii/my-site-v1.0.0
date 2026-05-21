const ContactContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Contact</h2>
      <ul className="space-y-2 text-sm p-4 drop-shadow-2xl">
        <li>
          <span className="font-semibold">Location:</span> Tehran
        </li>
        <li>
          <span className="font-semibold">Phone:</span> 09378624436
        </li>
        <li>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:yeganeh.bakhshi.at@gmail.com" className="underline">
            yeganeh.bakhshi.at@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactContent;
