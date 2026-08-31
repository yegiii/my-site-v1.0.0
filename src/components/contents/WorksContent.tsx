const WorksContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>

      <div className="space-y-5 text-sm leading-6 p-2 drop-shadow-2xl">
        {/* HIWEB */}
        <div>
          <h3 className="font-semibold">
            HIWEB, Tehran — Frontend Developer
          </h3>
          <p>June 2025 – Present</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Owned frontend development of core insurance and customer-facing
              products, including customer and agent panels, access management,
              and API management platforms.
            </li>

            <li>
              Built the customer-facing insurance panel from scratch and
              developed the agent sales panel supporting multiple customer,
              agent, and insurance workflows.
            </li>

            <li>
              Developed chat and ticket-management features for the agent
              panel using React and TypeScript, with API-driven workflows,
              form validation, loading/error states, and role-based access
              control.
            </li>

            <li>
              Designed complex multi-step insurance, claims, and
              policy-endorsement workflows by translating business rules into
              reliable frontend flows.
            </li>

            <li>
              Implemented RBAC and hierarchical permission management with
              granular access control across routes, pages, and actions.
            </li>

            <li>
              Built reusable React/TypeScript components and shared UI
              building blocks using HeroUI and Material UI, with Framer Motion
              animations and Jest unit tests.
            </li>

            <li>
              Managed client and server state using Redux, Zustand, and
              TanStack React Query, including caching, loading/error handling,
              and data synchronization.
            </li>

            <li>
              Developed an API Management and Monitoring Panel covering API
              health, latency, response time, error rates, request volume,
              logs, charts, filtering, and performance analysis.
            </li>

            <li>
              Implemented administrator-controlled API rate and usage-limit
              management for users and APIs.
            </li>

            <li>
              Used AI-assisted development tools such as Claude and Cursor
              Agent to accelerate development while performing code reviews to
              maintain code quality.
            </li>

            <li>
              Improved frontend performance through memoization, lazy loading,
              pagination, image optimization, and reducing unnecessary API
              calls.
            </li>
          </ul>
        </div>

        {/* WebIdeh */}
        <div>
          <h3 className="font-semibold">
            WebIdeh, Tehran — Frontend Developer
          </h3>
          <p>January 2025 – June 2025</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Developed a server traffic manager dashboard using React and
              Zod, transforming API data into actionable insights through
              interactive throughput and error-rate charts.
            </li>

            <li>
              Architected a modular chart component system using reusable
              hooks and props, reducing future feature development time by
              30–50%.
            </li>

            <li>
              Used Zod schemas to validate and sanitize 10,000+ daily API data
              points, preventing client-side rendering crashes caused by
              malformed data.
            </li>
          </ul>
        </div>

        {/* BusNet */}
        <div>
          <h3 className="font-semibold">
            BusNet, Tehran — Frontend Developer
          </h3>
          <p>July 2024 – January 2025</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Built and optimized Next.js applications using SSR, SSG, and ISR
              for improved performance and SEO.
            </li>

            <li>
              Developed responsive SPAs using React, Redux, and React Hook
              Form with advanced form validation and real-time feedback.
            </li>

            <li>
              Integrated Leaflet.js interactive maps for route visualization
              and real-time location tracking.
            </li>

            <li>
              Managed complex global state and asynchronous data flows using
              Redux and Redux Toolkit.
            </li>

            <li>
              Built reusable UI components using Shadcn UI, MUI, and Tailwind
              CSS.
            </li>

            <li>
              Used React Context API to efficiently share state and reduce
              unnecessary prop drilling.
            </li>
          </ul>
        </div>

        {/* Tesmino */}
        <div>
          <h3 className="font-semibold">
            Tesmino, Rasht — Frontend Developer
          </h3>
          <p>July 2023 – July 2024</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Developed the Tesmino user panel with Vue 3 and the company
              website using Vue 3, Nuxt, and Tailwind CSS.
            </li>

            <li>
              Migrated Vue components and features to React while improving
              performance, maintainability, and frontend architecture.
            </li>

            <li>
              Refactored React components and introduced Redux state
              management, reducing bugs and improving maintainability.
            </li>

            <li>
              Built reusable components and shared UI libraries across Vue and
              React projects.
            </li>

            <li>
              Implemented JWT-based authentication and protected application
              flows.
            </li>

            <li>
              Implemented SSR for improved page-load performance and SEO while
              collaborating with the SEO specialist to improve search
              visibility.
            </li>

            <li>
              <a
                href="https://next.tesmino.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Tesmino User Panel
              </a>
            </li>

            <li>
              <a
                href="https://tesmino.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Tesmino Website
              </a>
            </li>
          </ul>
        </div>

        {/* Freelance */}
        <div>
          <h3 className="font-semibold">
            Self-Employed — Freelance Frontend Developer
          </h3>
          <p>2022 – 2023</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Built and deployed e-commerce websites, booking systems, and
              portfolio websites using React, Vue.js, Tailwind CSS, Bootstrap,
              and jQuery.
            </li>

            <li>
              Managed the frontend lifecycle from implementing UI designs and
              integrating APIs to preparing and deploying production
              applications.
            </li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h3 className="font-semibold">
            TPTCO, Ardabil — Android Intern
          </h3>
          <p>September 2019 – January 2020</p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Collaborated with designers, product managers, and QA testers to
              implement Android application updates and participate in the
              development and testing lifecycle.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksContent;