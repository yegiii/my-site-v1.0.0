const SkillsContent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Technical Skills</h2>

      <div className="space-y-4 text-sm leading-6 p-2">
        
        <div>
          <h3 className="font-semibold">Core Frontend</h3>
          <p>React, TypeScript, JavaScript, Next.js</p>
        </div>

        <div>
          <h3 className="font-semibold">Architecture & State Management</h3>
          <p>
            Component Architecture, Reusable Components, Custom Hooks, Redux,
            Zustand, TanStack React Query, Pinia
          </p>
        </div>

        <div>
          <h3 className="font-semibold">UI & Styling</h3>
          <p>
            Tailwind CSS, Material UI, HeroUI, Shadcn UI, Framer Motion,
            HTML5, CSS3
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Application Engineering</h3>
          <p>
            REST API Integration, Authentication, RBAC, Hierarchical
            Permissions, Responsive Design, Performance Optimization, Lazy
            Loading, Pagination, Form Validation, Error Handling, Unit Testing
            (Jest)
          </p>
        </div>

        <div>
          <h3 className="font-semibold">AI-Assisted Development</h3>
          <p>Claude, Cursor Agents</p>
        </div>

        <div>
          <h3 className="font-semibold">Tools & Platforms</h3>
          <p>
            Git, CI/CD, Agile/Scrum, Postman, Storybook, Figma, Adobe XD, SSR,
            Technical SEO, API Monitoring, API Management
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Additional Technologies</h3>
          <p>
            Vue.js, Nuxt, Python, Django, PHP, Laravel, MongoDB, SQL Server,
            SQLite, Node.js
          </p>
        </div>

      </div>
    </div>
  );
};

export default SkillsContent;