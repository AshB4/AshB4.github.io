import DmvKiosk from "../assets/DmvKisok.png";
import EchoStudio from "../assets/EchoStudio.webp";
import LaStormMapr from "../assets/LaStormMapR.webp";
import OmniBar from "../assets/OmniBar.webp";
import OrisVerba from "../assets/Oris-Verba.png";
import RedStick from "../assets/RedStick.jpeg";
import TurboVet from "../assets/VetTech.webp";
import TFHA from "../assets/SHCS.png";

export const projects = [
  {
    slug: 'better-mind-care',
    featured: false,
    showInAllProjects: false,
    eyebrow: 'Private Healthcare Project',
    title: 'Better Mind Care',
    subtitle: 'Healthcare Platform',
    problem:
      'Healthcare teams need secure, accessible interfaces for sensitive patient workflows, but many systems make protected data difficult to manage efficiently.',
    solution:
      'Built a HIPAA-ready healthcare interface in React with accessible UI patterns, secure API integrations, client-side state management, and role-based workflows.',
    impact:
      'Enabled safer, more usable healthcare operations through WCAG-compliant experiences and production-ready protected data handling.',
    tech: ['React', 'TypeScript', 'AWS', 'RBAC', 'WCAG 2.1'],
    link: null,
    actionNote:
      'Details limited due to sensitive healthcare data. Additional information available upon request.',
    img: null,
    imgAlt: 'Healthcare application interface with accessible design patterns',
    details: {
      features: [
        'Accessible patient and staff workflows designed for clarity and compliance',
        'Role-based access patterns for protected healthcare actions',
        'Secure client-side state handling for sensitive application flows',
        'Reusable component patterns built for production healthcare interfaces',
      ],
      technicalHighlights: [
        'Built in React and TypeScript for maintainable UI architecture',
        'Integrated secure APIs and protected data workflows in a production environment',
        'Applied WCAG 2.1 accessibility practices across key user journeys',
        'Structured UI systems to support scale, consistency, and guardrails',
      ],
      keyDecisions: [
        'Prioritized accessibility early to reduce friction across patient-facing and staff-facing workflows',
        'Used RBAC to align interface behavior with sensitive healthcare permissions',
        'Focused on reusable interface patterns to keep the product consistent as features expanded',
      ],
      challenges: [
        'Balancing strict security expectations with fast, usable workflows',
        'Designing around protected data while keeping the interface understandable',
        'Maintaining accessibility standards inside complex healthcare flows',
      ],
      impact:
        'Demonstrates full-stack product thinking in a regulated environment, combining accessibility, security, and production-ready interface design.',
    },
  },
  {
    slug: 'echo-studio',
    featured: true,
    featuredOrder: 2,
    eyebrow: 'Build Week Prototype',
    title: 'Echo Studio',
    subtitle: 'AI-Assisted Marketing Workflow Platform',
    problem:
      'Campaign planning, content creation, scheduling, and publishing can become scattered across separate tools and workflows.',
    solution:
      'Developed a prototype workspace that connects a business goal to campaign planning, content composition, review, scheduling, and publishing workflows.',
    impact:
      'Built a demonstrable marketing operations prototype that brings campaign planning, AI assistance, scheduling, and publishing into one workflow.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'REST APIs', 'OpenAI API'],
    githubUrl: 'https://github.com/AshB4/Echo-Studio-Demo',
    demoUrl: 'https://youtu.be/AbK1G9n1RDQ',
    img: EchoStudio,
    imgAlt: 'Echo Studio marketing workflow branding with Ashley Broussard portrait',
    details: {
      features: [
        'Mission intake and Echo Brain campaign-planning workflows',
        'Product profiles, campaign library, and AI-assisted post composition',
        'Publishing calendar, scheduling controls, and product-rotation workflow',
        'Publishing workflows for Pinterest, Facebook, and Dev.to',
      ],
      technicalHighlights: [
        'React and Vite frontend styled with Tailwind CSS',
        'Node.js and Express backend exposing REST API workflows',
        'Campaign-planning routes support creating, generating, retrieving, updating, and deleting campaign plans',
        'OpenAI API integration supports context-informed content generation',
        'Playwright tooling supports browser automation and testing',
      ],
      engineeringDecisions: [
        'Organized campaign work around a business goal rather than beginning with an empty AI prompt',
        'Separated planning, composition, review, and publishing into distinct workflow stages',
        'Kept generated content connected to its campaign context so it can be reviewed before publication',
      ],
      challenges: [
        'Coordinating multiple marketing workflows without fragmenting the user experience',
        'Managing the cost of AI features in a publicly accessible demo',
      ],
      plannedWork: [
        'Multi-user workspaces, expanded analytics, and broader account onboarding remain future work',
      ],
      prototypeNotes: [
        'Some AI features are disabled in the public demo to control API costs',
      ],
      outcome:
        'A Build Week prototype and evolving personal product. The public demo demonstrates the workflow, while some AI features are disabled to control API costs.',
    },
  },
  {
    slug: 'tfha',
    featured: false,
    showInAllProjects: false,
    title: 'Healthcare Plan Comparison Tool',
    problem:
      'Consumers struggle to compare health plans using real coverage details, not just premiums.',
    solution:
      'Built a React app that integrates Marketplace APIs and matches plans to user-specific preferences.',
    impact:
      'Helps users evaluate plans based on coverage, cost, and medication needs instead of guesswork.',
    tech: ['React', 'React Router', 'Styled Components', 'FastAPI', 'MySQL', 'Chart.js', 'Healthcare.gov APIs'],
    link: 'https://www.truefidelityhealthcareadvisors.com',
    linkLabel: 'View Live Demo',
    img: TFHA,
    imgAlt: 'Healthcare platform interface for Medicare plan comparison with accessible UI',
    details: {
      features: [
        'Marketplace plan search using household and location data (ZIP to FIPS resolution)',
        'Preference matching engine with "matched vs missing" plan scoring',
        'Sortable comparison view by cost and match strength',
        'Medication workflow with autocomplete plus per-plan coverage lookup',
        'Plain-English glossary ("Mom Mode") for complex insurance terms',
      ],
      technicalHighlights: [
        'Progressive data enrichment by merging plan-level API details into search results',
        'Centralized matching logic reused across comparison and detail views',
        'State persistence via localStorage for user inputs and selected plans',
        'FastAPI backend with parameterized SQL for secure autocomplete queries',
        'Async frontend flows for real-time medication search and coverage checks',
      ],
      keyDecisions: [
        'Used client-side matching logic to iterate quickly on recommendation behavior',
        'Chose direct Marketplace API integration for faster development and simpler architecture',
        'Implemented progressive enrichment instead of loading all plan data upfront',
        'Used localStorage-based auth for rapid prototyping instead of full backend session management',
      ],
      challenges: [
        'Managing incomplete API data and merging fallback benefit information',
        'Handling edge cases in plan comparison and user preference scoring',
        'Inconsistent API year handling required normalization across requests',
        'Auth system is partially implemented, requiring future RBAC and route protection',
      ],
      impact:
        'Enables users to make more informed healthcare decisions by comparing plans based on real coverage needs, including medication support. Demonstrates full-stack problem solving across data integration, UX clarity, and decision logic.',
    },
  },
  {
    slug: 'dmv-kiosk',
    featured: true,
    featuredOrder: 4,
    eyebrow: 'Client Design Prototype',
    title: 'DMV Kiosk Redesign',
    problem:
      'DMV kiosks are difficult to use for seniors and high-volume users, leading to errors and slow processing.',
    solution:
      'Designed an accessibility-focused touchscreen prototype with large touch targets, simplified flows, and clear visual hierarchy.',
    impact:
      'Delivered an accessibility-focused kiosk design prototype for review and demonstration.',
    tech: ['Figma', 'UI/UX Design', 'Touchscreen Interfaces', 'Accessibility Principles'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
    linkLabel: 'View Prototype',
    img: DmvKiosk,
    imgAlt: 'Accessible DMV kiosk interface with large buttons and high contrast',
    details: {
      features: [
        'Appointment and walk-in check-in flows',
        'Large touchscreen controls, high-contrast presentation, and step-by-step navigation',
        'Prototype screens for a multilingual check-in experience',
      ],
      technicalHighlights: [
        'Figma interface design focused on touchscreen interaction',
        'Accessibility-focused sizing, readability, contrast, and visual hierarchy',
        'Layouts consider kiosk viewing distance and touch input',
      ],
      engineeringDecisions: [
        'Prioritized the main check-in actions and simplified decision points',
        'Designed controls for touchscreen use rather than desktop pointer input',
      ],
      challenges: [
        'Balancing quick check-in with clear instructions for people with different levels of technical experience',
        'Keeping the workflow understandable while representing required service choices',
      ],
      outcome:
        'Delivered an accessibility-focused kiosk design prototype for review and demonstration. It is not an officially deployed or ADA-certified system.',
    },
  },
  {
    slug: 'redstick-waggers',
    featured: true,
    featuredOrder: 5,
    eyebrow: 'Collaborative Mobile Project',
    title: 'Redstick Waggers',
    problem:
      'Finding Baton Rouge parks that match particular activities can require navigating public park information in different formats.',
    solution:
      'Collaborated on a React Native and Expo app that presents BREC park data through a map, amenity filters, and park details.',
    impact:
      'Contributed to a collaborative mobile application for exploring Baton Rouge park locations and amenities.',
    tech: ['React Native', 'Expo', 'Firebase', 'Clerk', 'React Navigation', 'Open Data BR', 'Geolocation', 'JavaScript'],
    githubUrl: 'https://github.com/jbrackin1/RedStickWaggers',
    img: RedStick,
    imgAlt: 'Mobile app showing dog park locations and amenities with map-based UI',
    details: {
      features: [
        'Loads park markers from Baton Rouge open-data records',
        'Amenity filtering, including dog-park discovery',
        'Park detail screens with amenity information and map directions',
        'Current-location map centering after location permission is granted',
        'Bookmark and account flows in the collaborative application',
      ],
      technicalHighlights: [
        'React Native Maps renders the mobile park map; Expo Location requests foreground geolocation',
        'Fetches park records from Baton Rouge public data endpoints and maps amenity fields into UI filters',
        'Clerk authentication and Firebase configuration are present in the app setup',
        'React Navigation routes between park discovery, details, bookmarks, and account screens',
      ],
      engineeringDecisions: [
        'Presented park locations and amenity information through mobile map and detail views rather than exposing raw records',
        'Built collaboratively; this portfolio does not claim sole authorship of the repository or all implementation',
      ],
      challenges: [
        'Mapping public dataset fields to amenity filters and park detail views',
        'Handling location permission and map behavior as part of a collaborative mobile project',
      ],
      outcome:
        'Contributed to a collaborative mobile application project demonstrating React Native, Expo, Firebase, and location-oriented park discovery.',
    },
  },
  {
    slug: 'oris-verba',
    featured: true,
    featuredOrder: 6,
    eyebrow: 'Working Local Application',
    title: 'Oris-Verba',
    subtitle: 'Speech Transcription System',
    problem:
      'Capturing and converting live speech into usable text is difficult without heavy infrastructure.',
    solution:
      'Built a real-time transcription system using Whisper with voice detection and streaming output.',
    impact:
      'Enables low-friction, local speech-to-text workflows with real-time feedback and review signals.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'faster-whisper', 'NumPy', 'sounddevice', 'WebRTC VAD', 'React', 'Vite'],
    githubUrl: 'https://github.com/AshB4/Oris-Verba',
    img: OrisVerba,
    imgAlt: 'Speech transcription interface with live captions and review highlights',
    details: {
      features: [
        'Live microphone transcription with pause, resume, and stop controls',
        'Audio and video file transcription with progress and error reporting',
        'Optional local speaker detection',
        'Vocabulary hints for names, acronyms, and uncommon terms',
        'Editable transcripts with copy and text-download options',
      ],
      technicalHighlights: [
        'FastAPI backend and React/Vite frontend',
        'faster-whisper CPU inference with int8 compute and WebRTC voice activity detection',
        'FFmpeg decoding for supported audio and video uploads',
        'Background capture and transcription work with progress reporting',
        'Optional sherpa-onnx speaker detection runs in a separate Python environment',
      ],
      engineeringDecisions: [
        'Runs transcription locally rather than requiring a cloud transcription API; after the model is cached, transcription can run offline',
        'Separates capture, voice detection, transcription, and optional diarization into distinct processing stages',
        'Uses a separate environment for speaker-detection native dependencies to isolate them from transcription',
      ],
      challenges: [
        'Chunk-based processing introduces latency during live transcription',
        'The current in-memory session model is intended for local use, not multi-user cloud deployment',
        'Speaker detection requires separate model and dependency setup',
      ],
      outcome:
        'A working local application for live and file-based transcription with optional speaker labeling. The repository describes local operation; it does not represent a cloud deployment.',
    },
  },
  {
    slug: 'dealership-toolkit',
    featured: false,
    eyebrow: 'Contract Engagement',
    title: 'Dealership Toolkit',
    description: 'Replaced third-party email software with Python automation, saving approximately $10,000 per month; also contributed to React applications and inventory data workflows.',
    problem: 'Recurring email-software costs and manual dealership data workflows added operational overhead.',
    solution: 'Built custom Python email automation and contributed to React applications and inventory data processing.',
    impact: 'The email automation replaced third-party software and saved approximately $10,000 per month.',
    tech: ['Python', 'React', 'APIs', 'Data Processing'],
    details: {
      features: [
        'Custom mass-email automation replacing third-party email software',
        'React application work and inventory data automation',
      ],
      technicalHighlights: [
        'Python automation, API integration, and inventory data processing',
      ],
      engineeringDecisions: [
        'Focused the automation on replacing a recurring software expense and supporting dealership workflows',
      ],
      challenges: [
        'Original project files and screenshots are no longer available, so this entry documents professional work rather than a public code demonstration',
      ],
      outcome: 'Replaced third-party email software and saved approximately $10,000 per month.',
    },
  },
  {
    slug: 'turbovet',
    featured: true,
    featuredOrder: 1,
    eyebrow: 'TurboVets Full Stack Challenge',
    title: 'TurboVet',
    subtitle: 'Secure Multi-Organization Task Management',
    description: 'A full-stack task management challenge with organization-scoped data, JWT authentication, and role-based authorization.',
    problem: 'Teams across multiple organizations need to manage tasks without exposing another organization’s records or administrative controls.',
    solution: 'Built an Angular dashboard and NestJS REST API with TypeORM, JWT authentication, organization-scoped task access, and role-based authorization.',
    impact: 'Completed a full-stack development challenge demonstrating authentication, relational data modeling, API development, and role-aware application design.',
    tech: ['Angular', 'NestJS', 'TypeORM', 'SQLite (default)', 'PostgreSQL (configurable)', 'JWT', 'TypeScript', 'Nx', 'Tailwind CSS'],
    githubUrl: 'https://github.com/AshB4/TurboVetChallenge',
    demoUrl: 'https://youtu.be/lwTDHOJgSyg',
    img: TurboVet,
    imgAlt: 'TurboVet Command Center sign-in screen',
    details: {
      features: [
        'JWT authentication for protected API and application access',
        'Organization-scoped task listing and mutations',
        'Owner, Admin, and Viewer role model with role-aware task controls',
        'Task creation, updates, status tracking, deletion, and audit views',
      ],
      technicalHighlights: [
        'Nx monorepo with Angular dashboard, NestJS API, and shared TypeScript libraries',
        'TypeORM entities model users, organizations, tasks, roles, and permissions',
        'NestJS guards and decorators enforce authentication and role checks on the server',
        'SQLite is the default database; PostgreSQL is available through DB_TYPE configuration',
        'Shared DTOs and role definitions keep frontend and backend contracts aligned',
      ],
      engineeringDecisions: [
        'Enforced organization boundaries in API service logic instead of relying on hidden frontend controls',
        'Separated authentication, authorization, entities, and shared data contracts across workspace libraries',
      ],
      challenges: [
        'Checking organization ownership and role permissions consistently for task creation and updates',
        'Keeping role-aware interface behavior aligned with server-side authorization',
      ],
      outcome: 'A full-stack development challenge implementation; it is presented as a challenge project, not as a deployed production application.',
    },
  },
  {
    slug: 'la-storm-mapr',
    featured: true,
    featuredOrder: 3,
    eyebrow: 'Civic Technology',
    title: 'LAStormMapr',
    subtitle: 'Louisiana Hurricane Preparedness and Shelter Mapping',
    description: 'A civic-technology prototype for exploring Louisiana shelter information on an interactive map and using preparedness resources.',
    problem: 'During hurricane preparation, residents may need to consult multiple sources to locate shelters, check pet accommodations, and find local storm information.',
    solution: 'Built a React mapping application that presents shelter information with filtering, location-aware discovery, and preparedness tools.',
    impact: 'Developed an interactive civic-technology prototype demonstrating geographic data processing, shelter discovery, and emergency-preparedness interface design.',
    tech: ['React', 'Vite', 'React Leaflet', 'Leaflet', 'Bootstrap', 'GeoJSON', 'JavaScript'],
    githubUrl: 'https://github.com/AshB4/LaStormMapr',
    demoUrl: 'https://youtu.be/7EOdd2xvej0',
    img: LaStormMapr,
    imgAlt: 'LAStormMapr interactive shelter map centered around Baton Rouge',
    details: {
      features: [
        'Interactive map with shelter markers and shelter information',
        'General shelter and pet-shelter filters',
        'Browser geolocation, directions links, and location-aware discovery',
        'Active National Weather Service Louisiana alerts where available, plus preparedness resources and checklist functionality',
      ],
      technicalHighlights: [
        'React frontend using React Leaflet and Leaflet map components',
        'Normalizes general-shelter GeoJSON and Baton Rouge open-data pet facilities into consistent names, coordinates, addresses, and categories',
        'Converts source GeoJSON [longitude, latitude] coordinates to the [latitude, longitude] order used by Leaflet',
        'Combines normalized shelter sources for map markers and shelter cards',
        'Queries the National Weather Service active-alert endpoint for Louisiana alerts',
        'The README identifies NOAA or parish-level feeds as future integration possibilities',
      ],
      engineeringDecisions: [
        'Added a normalization layer so source records can be rendered consistently despite differing field formats',
        'Prioritized shelter discovery, pet-related filtering, and location context in the interface',
      ],
      challenges: [
        'Shelter source data may require transformation before it can be shown consistently on a map',
        'The prototype does not verify live shelter status or real-time storm paths',
      ],
      plannedWork: [
        'Verified open/closed shelter status and real-time storm-path integration are described as planned work in the project README',
      ],
      outcome: 'A civic-technology prototype, not an official emergency information service. Shelter availability should be confirmed with local authorities.',
    },
  },
  {
    slug: 'omnibar',
    featured: false,
    eyebrow: 'Open-Source Fork · Original Project by BrainGnosis',
    title: 'OmniBAR',
    description: 'A public fork of BrainGnosis’s Python framework for multi-objective AI-agent evaluation.',
    tech: ['Python', 'AI Agent Evaluation', 'Asynchronous Processing'],
    githubUrl: 'https://github.com/AshB4/OmniBAR',
    demoUrl: 'https://youtu.be/1mEUYETDSjM',
    img: OmniBar,
    imgAlt: 'OmniBAR reliability studio interface alongside its Python backend in VS Code',
    problem: 'Evaluating an AI agent only by its final answer can miss whether its actions and resulting system state satisfied the task.',
    solution: 'Explored BrainGnosis’s open-source OmniBAR evaluation framework through a public fork. The upstream framework supports configurable multi-objective agent evaluation.',
    impact: 'Maintained a public fork for exploration. The upstream framework and its core capabilities are credited to BrainGnosis; this portfolio does not claim those features as original work.',
    details: {
      features: [
        'Upstream BrainGnosis framework supports output-, path-, state-, and LLM-judge-based evaluation objectives',
        'Upstream framework supports configurable objectives and asynchronous benchmark execution',
      ],
      technicalHighlights: [
        'Python framework for multi-objective AI-agent benchmarking (upstream project)',
        'Evaluation can consider outputs, action paths, and state changes (upstream project)',
        'My public repository is a fork of BrainGnosis/OmniBAR',
      ],
      engineeringDecisions: [
        'Kept attribution with BrainGnosis because the repository is a fork and the framework predates this portfolio entry',
        'Avoided presenting upstream framework features as independent contributions',
      ],
      challenges: [
        'LLM-judged evaluation can involve subjective scoring and should be interpreted as one evaluation signal',
        'Any specific original changes require a direct comparison with the upstream repository before they can be claimed',
      ],
      outcome: 'A public fork used to explore agent-evaluation concepts. BrainGnosis is the original creator; no independent feature contribution is claimed here.',
    },
  },
];
