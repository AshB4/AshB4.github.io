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
    title: 'Echo Studio',
    subtitle: 'Automation System',
    problem:
      'Manually identifying and prioritizing high-performing content/products is time-consuming and inconsistent at scale.',
    solution:
      'Built a content automation pipeline with scoring, scheduling, and job execution to manage multi-platform posting workflows.',
    impact:
      'Reduces manual decision-making and enables repeatable, data-driven content workflows.',
    tech: ['React', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/AshB4/Echo-Studio-Demo',
    demoUrl: 'https://youtu.be/AbK1G9n1RDQ',
    img: EchoStudio,
    imgAlt: 'Echo Studio marketing workflow branding with Ashley Broussard portrait',
    details: {
      features: [
        'Keyword and niche-based filtering with configurable thresholds',
        'Automated scoring system to rank high-value content candidates',
        'Multi-source ingestion (API + local datasets with fallback handling)',
        'Auto-generated platform-specific post angles (Facebook, Pinterest, X)',
        'Persisted outputs with metadata for reuse and tracking',
      ],
      technicalHighlights: [
        'Multi-factor scoring model (relevance, commission, price band, social fit)',
        'Data normalization and defensive parsing for inconsistent third-party inputs',
        'Deduplication logic to retain highest-value candidate per product',
        'Batch-processing pipeline with reusable JSON output artifacts',
        'Configurable CLI-style controls for filtering and scoring behavior',
      ],
      keyDecisions: [
        'Used a transparent weighted scoring model instead of ML for faster iteration and explainability',
        'Implemented API + local fallback strategy to maintain reliability during outages',
        'Structured outputs as reusable JSON artifacts for downstream automation workflows',
        'Prioritized threshold filtering and top-N selection to reduce cognitive overload',
      ],
      challenges: [
        'Handling inconsistent and incomplete third-party data (missing fields, malformed values)',
        'Designing a scoring system that balances multiple competing factors',
        'Maintaining performance while processing large candidate datasets',
        'Limited historical data reduced early personalization accuracy',
      ],
      impact:
        'Transforms a manual, time-intensive content selection process into a structured, repeatable system. Demonstrates automation thinking, data modeling, and scalable workflow design.',
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
    title: 'DMV Kiosk Redesign',
    problem:
      'DMV kiosks are difficult to use for seniors and high-volume users, leading to errors and slow processing.',
    solution:
      'Designed an ADA-compliant touchscreen interface focused on large touch targets, simplified flows, and reduced cognitive load.',
    impact:
      'Improved usability for non-technical and senior users in high-traffic environments.',
    tech: ['Figma', 'UX Design', 'Accessibility', 'ADA'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
    linkLabel: 'View Prototype',
    img: DmvKiosk,
    imgAlt: 'Accessible DMV kiosk interface with large buttons and high contrast',
    details: {
      features: [
        'Large touch targets for accessibility and accuracy',
        'Simplified navigation flow for high-speed interactions',
        'Multi-language support (English, Spanish, French)',
        'High-contrast UI for visibility in public environments',
      ],
      technicalHighlights: [
        'Designed with WCAG accessibility principles',
        'Structured flows to reduce user decision fatigue',
        'Optimized layouts for kiosk hardware constraints (touch + distance)',
      ],
      keyDecisions: [
        'Prioritized large UI elements to reduce input errors in high-traffic environments',
        'Simplified flows to minimize cognitive load for non-technical users',
        'Used high-contrast layouts to improve visibility in public lighting conditions',
      ],
      challenges: [
        'Designing for both speed and accessibility simultaneously',
        'Balancing minimal UI with required DMV complexity',
        'Accounting for diverse user groups (elderly, non-English speakers)',
      ],
      impact:
        'Demonstrates ability to design real-world, accessibility-first interfaces under constraint-heavy environments.',
    },
  },
  {
    slug: 'redstick-waggers',
    featured: true,
    featuredOrder: 5,
    title: 'Redstick Waggers',
    problem:
      'Finding parks that support specific activities is difficult due to scattered and unstructured civic data.',
    solution:
      'Built a mobile app that filters open city park data by user activity and location.',
    impact:
      'Helps users quickly find relevant parks without manually sorting through large datasets.',
    tech: ['React Native', 'Firebase', 'Open Data BR', 'Geolocation'],
    githubUrl: 'https://github.com/jbrackin1/RedStickWaggers',
    img: RedStick,
    imgAlt: 'Mobile app showing dog park locations and amenities with map-based UI',
    details: {
      features: [
        'Activity-based park filtering (e.g. dog-friendly, walking, recreation)',
        'Location-aware search using user position',
        'Real-time results based on Baton Rouge open data',
        'Simple mobile interface for quick discovery',
      ],
      technicalHighlights: [
        'Processed and filtered large civic datasets from Open Data BR',
        'Implemented dynamic filtering logic based on user-selected activities',
        'Integrated geolocation to surface nearby results',
        'Structured inconsistent public data into usable UI output',
      ],
      keyDecisions: [
        'Focused on activity-first filtering to simplify user decision-making',
        'Used lightweight data processing instead of heavy backend for speed',
        'Prioritized mobile UX for on-the-go usability',
      ],
      challenges: [
        'Handling inconsistent and messy open data formats',
        'Filtering large datasets efficiently on mobile',
        'Mapping user-friendly categories to raw dataset fields',
      ],
      impact:
        'Makes public park data actually usable by helping users quickly find locations that match their needs. Demonstrates practical data handling and real-world filtering logic.',
    },
  },
  {
    slug: 'oris-verba',
    featured: true,
    featuredOrder: 6,
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
        'Live microphone capture with continuous transcription loop',
        'Voice Activity Detection (VAD) to filter silence and reduce noise',
        'Real-time transcript display with confidence-based highlighting',
        'Session controls: start, pause, resume, and stop',
        'Low-confidence flagging for manual review',
      ],
      technicalHighlights: [
        'Modular pipeline separating audio capture, VAD filtering, and transcription stages',
        'Faster-Whisper model optimized for CPU (int8) for local execution',
        'Background transcription worker running asynchronously alongside API',
        'Frontend polling architecture for real-time transcript and system status updates',
        'Configurable parameters for chunking, confidence thresholds, and audio processing',
      ],
      keyDecisions: [
        'Used polling instead of WebSockets for faster prototyping and simpler architecture',
        'Chose CPU-based Whisper implementation to reduce setup complexity and hardware dependency',
        'Applied VAD pre-filtering to minimize unnecessary transcription load',
        'Used in-memory buffering to prioritize speed over persistence in early stages',
      ],
      challenges: [
        'Chunk-based processing introduces latency for real-time captioning use cases',
        'Global state limits multi-user/session scalability',
        'No persistent transcript storage in current implementation',
        'Handling inconsistent transcription confidence across edge cases',
      ],
      impact:
        'Delivers a working real-time transcription pipeline that teams can run locally and extend into production systems. Demonstrates audio processing, async system design, and practical AI integration.',
    },
  },
  {
    slug: 'dealership-toolkit',
    featured: false,
    eyebrow: 'Contract Engagement',
    title: 'Dealership Toolkit',
    description: 'Built Python email automation that replaced third-party software and saved approximately $10,000 per month; also developed React applications and inventory data automation.',
    tech: ['Python', 'React'],
  },
  {
    slug: 'turbovet',
    featured: true,
    featuredOrder: 1,
    eyebrow: 'TurboVets Full Stack Challenge',
    title: 'TurboVet',
    description: 'A multi-organization task management platform with JWT authentication and role-based access controls.',
    tech: ['Angular', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'Nx'],
    githubUrl: 'https://github.com/AshB4/TurboVetChallenge',
    demoUrl: 'https://youtu.be/lwTDHOJgSyg',
    img: TurboVet,
    imgAlt: 'TurboVet Command Center sign-in screen',
  },
  {
    slug: 'la-storm-mapr',
    featured: true,
    featuredOrder: 3,
    eyebrow: 'Civic Technology',
    title: 'LAStormMapr',
    description: 'A hurricane preparedness and shelter-tracking app for Louisiana residents, with an interactive map and preparation checklist.',
    tech: ['React', 'Leaflet', 'Bootstrap', 'GeoJSON'],
    githubUrl: 'https://github.com/AshB4/LaStormMapr',
    demoUrl: 'https://youtu.be/7EOdd2xvej0',
    img: LaStormMapr,
    imgAlt: 'LAStormMapr interactive shelter map centered around Baton Rouge',
  },
  {
    slug: 'omnibar',
    featured: false,
    eyebrow: 'Public fork of BrainGnosis/OmniBAR',
    title: 'OmniBAR',
    description: 'A Python framework for evaluating AI agents across multiple objectives, including outputs, action paths, and system state.',
    tech: ['Python', 'LangChain', 'Pydantic'],
    githubUrl: 'https://github.com/AshB4/OmniBAR',
    demoUrl: 'https://youtu.be/1mEUYETDSjM',
    img: OmniBar,
    imgAlt: 'OmniBAR reliability studio interface alongside its Python backend in VS Code',
  },
];
