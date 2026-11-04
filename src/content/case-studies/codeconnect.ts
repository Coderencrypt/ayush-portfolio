/**
 * CodeConnect case study copy.
 * Facts under "implementation" were checked against the public repository
 * (github.com/Coderencrypt/CodeConnect). Problems and personas are design
 * hypotheses — no formal user research or usability testing was conducted.
 */

export const codeconnect = {
  title: "CodeConnect",
  subtitle: "Online Interview Platform",
  intro:
    "A real-time space where an interviewer and a candidate can meet on video, read the same coding problem and work through a solution — without juggling separate tools.",
  github: "https://github.com/Coderencrypt/CodeConnect",
  live: "https://codeconnect-1-h9vi.onrender.com",
  meta: [
    { label: "Type", value: "Personal project" },
    { label: "Focus", value: "UI/UX design & full-stack build" },
    { label: "Platform", value: "Web (desktop-first)" },
    { label: "Stack", value: "MERN · Stream · Clerk" },
  ],
} as const;

export const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "users", label: "Target users" },
  { id: "journey", label: "User journey" },
  { id: "architecture", label: "Information architecture" },
  { id: "wireframes", label: "Wireframes" },
  { id: "final-ui", label: "Final UI" },
  { id: "decisions", label: "Design decisions" },
  { id: "responsive", label: "Responsive design" },
  { id: "implementation", label: "Implementation" },
  { id: "reflection", label: "Reflection" },
] as const;

export const overviewCapabilities = [
  {
    title: "Video & chat in the room",
    body: "Each session creates its own video call and chat channel, so conversation stays next to the code.",
  },
  {
    title: "Problem + editor side by side",
    body: "The problem statement, a code editor and a run-output panel share one resizable workspace.",
  },
  {
    title: "Sessions at a glance",
    body: "A dashboard lists active sessions to join and recently completed ones to revisit.",
  },
] as const;

export const problems = [
  {
    title: "Too many tools for one conversation",
    body: "Interviews can involve a video app, a separate code pad and a shared doc for the question — each with its own link and login.",
  },
  {
    title: "Setup friction before the first question",
    body: "Time at the start of a session may be spent on links, permissions and getting both people into the same place.",
  },
  {
    title: "Context is split across windows",
    body: "When the problem, the code and the person are in different windows, both sides may lose track of what's being discussed.",
  },
  {
    title: "Unclear session status",
    body: "Without a shared overview, it can be hard to tell which sessions are live, which are waiting and which are finished.",
  },
] as const;

export const personas = [
  {
    role: "Interviewer",
    archetype: "Hosts technical interviews",
    quote: "I want to spend the hour evaluating how someone thinks — not fixing links.",
    goals: [
      "Start a session quickly with a chosen problem",
      "Watch the candidate's approach as they code",
      "Talk through decisions without switching apps",
    ],
    frustrations: [
      "Coordinating several tools per interview",
      "Losing minutes to setup at the start",
    ],
    needs: ["One room with video, problem and editor", "Clear list of live sessions"],
  },
  {
    role: "Candidate",
    archetype: "Preparing for technical interviews",
    quote: "I just want to join, read the problem and start writing code.",
    goals: [
      "Join without installing anything",
      "See the problem while coding",
      "Run code and check output before explaining it",
    ],
    frustrations: [
      "Unfamiliar tools adding to interview nerves",
      "Not knowing where to look or what to click",
    ],
    needs: ["Simple join flow", "Familiar, readable editor", "Visible run output"],
  },
] as const;

export const journeys = {
  interviewer: [
    { step: "Sign in", detail: "Authenticates and lands on the dashboard." },
    {
      step: "Create session",
      detail:
        "Opens the create modal and selects a problem; difficulty is filled in automatically.",
    },
    {
      step: "Review summary",
      detail: "Confirms the room summary — problem and a 1-on-1 limit — then creates the room.",
    },
    {
      step: "Enter the room",
      detail: "Video call and chat start for that session; the session shows as active.",
    },
    {
      step: "Interview",
      detail: "Discusses the problem on video while the candidate writes and runs code.",
    },
    { step: "End session", detail: "Marks the session complete; it moves to recent sessions." },
  ],
  candidate: [
    { step: "Sign in", detail: "Authenticates and lands on the dashboard." },
    {
      step: "Find session",
      detail: "Spots the interviewer's room in the list of active sessions.",
    },
    { step: "Join", detail: "Joins as the second participant of the 1-on-1 room." },
    {
      step: "Read & code",
      detail: "Reads the problem on one side, writes code in the editor on the other.",
    },
    {
      step: "Run & explain",
      detail: "Runs code, checks output and talks through the approach on video.",
    },
    { step: "Leave", detail: "Exits the room when the interviewer ends the session." },
  ],
} as const;

export const designDecisions = [
  {
    title: "One room, three zones",
    body: "Problem, editor and people are always visible together, so neither side has to switch windows to keep context.",
    principle: "Clarity",
  },
  {
    title: "Resizable panels",
    body: "Users can give more space to whatever matters at that moment — the problem early on, the editor while coding.",
    principle: "Usability",
  },
  {
    title: "Progressive disclosure when creating",
    body: "The create modal asks for one thing — a problem — and only then reveals a room summary to confirm.",
    principle: "Clarity",
  },
  {
    title: "Explicit session states",
    body: "Sessions are either active or completed, which keeps the dashboard lists simple to scan.",
    principle: "Clarity",
  },
  {
    title: "Immediate feedback",
    body: "Toasts confirm actions such as creating or ending a session, and run output appears right below the editor.",
    principle: "Usability",
  },
  {
    title: "Shared component styles",
    body: "Buttons, inputs, modals and cards come from one utility-based component set, so patterns repeat predictably.",
    principle: "Consistency",
  },
] as const;

export const responsiveModes = [
  {
    device: "Desktop",
    width: "≥ 1024px",
    body: "The full workspace: problem, editor and output in resizable panels, with video and chat alongside. This is the primary target for live interviews.",
  },
  {
    device: "Tablet",
    width: "768–1023px",
    body: "Panels stack into two columns — problem and editor share the main area while video collapses into a smaller tile.",
  },
  {
    device: "Mobile",
    width: "< 768px",
    body: "Best suited to joining, browsing sessions and following along. Content stacks into tabs (Problem · Code · Call) rather than panels.",
  },
] as const;

export const implementationGroups = [
  {
    title: "Frontend",
    items: [
      "React 19",
      "Vite",
      "React Router",
      "Tailwind CSS v4",
      "DaisyUI",
      "TanStack Query",
      "Lucide icons",
      "react-hot-toast",
    ],
  },
  {
    title: "Coding workspace",
    items: ["Monaco Editor", "react-resizable-panels", "Piston API (JavaScript, Python, Java)"],
  },
  {
    title: "Real-time",
    items: ["Stream Video React SDK (WebRTC)", "Stream Chat"],
  },
  {
    title: "Auth & users",
    items: ["Clerk", "Inngest (syncs new users to the database)"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose"],
  },
  {
    title: "Deployment",
    items: ["Render"],
  },
] as const;

export const implementationNotes = [
  {
    title: "Page structure",
    body: "Five routes — Home, Dashboard, Problems, Problem and Session — with signed-out users redirected to Home and signed-in users sent to the Dashboard.",
  },
  {
    title: "Composable UI",
    body: "The interface is split into focused components: WelcomeSection, StatsCards, ActiveSessions, RecentSessions, CreateSessionModal, ProblemDescription, CodeEditorPanel, OutputPanel and VideoCallUI.",
  },
  {
    title: "Data & state",
    body: "Session data is fetched through an API layer and custom hooks (useSessions, useStreamClient) built on TanStack Query.",
  },
  {
    title: "Session lifecycle",
    body: "Creating a session stores it in MongoDB with its problem, difficulty, host and status, and creates a matching video call and chat channel.",
  },
] as const;

export const lessons = [
  {
    title: "Design the room before the features",
    body: "Deciding what must always be visible — problem, code, people — made every later layout decision easier.",
  },
  {
    title: "Lean on proven real-time services",
    body: "Using managed video and chat let me focus effort on the interface instead of low-level connection handling.",
  },
  {
    title: "Write assumptions down",
    body: "Separating hypotheses from facts in this case study made it clear what still needs validating with real users.",
  },
] as const;

export const futureImprovements = [
  "Run usability sessions with interviewers and candidates to test these hypotheses",
  "Add scheduled interviews with time, invitee and calendar reminders",
  "Interviewer-only notes and a simple evaluation rubric",
  "A dedicated mobile join-and-follow view",
  "An accessibility audit — keyboard flow, focus order and contrast in the editor",
  "Role-specific dashboards for interviewers and candidates",
] as const;
