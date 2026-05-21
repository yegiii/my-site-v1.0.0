const WorksContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      <div className="space-y-4 text-sm leading-6 p-2">
        <div>
          <h3 className="font-semibold">WebIdeh, Tehran — Frontend Developer</h3>
          <p>January 2025 – Present</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built a server traffic manager dashboard using React and Zod</li>
            <li>Architected modular chart components</li>
            <li>Validated and sanitized 10,000+ daily API data points with Zod</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">BusNet, Tehran — Frontend Developer</h3>
          <p>July 2024 – January 2025</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built optimized web apps with Next.js, SSR/SSG/ISR</li>
            <li>Led responsive SPAs using React, Redux, and React Hook Form</li>
            <li>Integrated Leaflet.js maps</li>
            <li>Managed state with Redux and Redux Toolkit</li>
            <li>Used React Context API</li>
            <li>Built reusable UI with Shadcn-ui, MUI, and Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Tesmino, Rasht — Frontend Developer</h3>
          <p>July 2023 – July 2024</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed Tesmino user panel and website using Vue 3, Nuxt, and Tailwind</li>
            <li>
              <a href="https://next.tesmino.com/" target="_blank" rel="noreferrer" className="underline">
                https://next.tesmino.com/
              </a>
            </li>
            <li>
              <a href="https://tesmino.com/" target="_blank" rel="noreferrer" className="underline">
                https://tesmino.com/
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Self-Employed — Freelance Frontend Developer</h3>
          <p>2022 – 2023</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Built and deployed e-commerce sites, booking systems, and personal portfolios</li>
            <li>Worked with Bootstrap 3, jQuery, React, Vue.js, and Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">TPDco, Ardebil — Android Internship</h3>
          <p>September 2019 – January 2020</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Collaborated with cross-functional teams to deliver app updates on schedule</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksContent;
