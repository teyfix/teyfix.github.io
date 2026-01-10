import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import {
  Article,
  ArticleHeader,
  Callout,
  CalloutTitle,
  CompetencyContent,
  CompetencyGrid,
  CompetencyItem,
  CompetencyTitle,
  Contact,
  ContactItem,
  ContactLink,
  ContactSection,
  Container,
  EducationHeader,
  EducationNote,
  ExperienceDate,
  ExperienceDetails,
  ExperienceHeader,
  ExperienceTitle,
  Footer,
  Header,
  Heading,
  List,
  ListItem,
  ProjectContainer,
  ProjectTitle,
  Section,
  SkillCategory,
  SkillList,
  SkillsGrid,
  SkillTitle,
  TeamInfo,
  TechStack,
  Text,
} from "./resume/reusable";

export function Resume() {
  return (
    <Container>
      {/* Header Section */}
      <Header>
        <Heading level={1}>Halil Teyfik Dolmaci</Heading>

        <Contact>
          <ContactSection>
            <ContactItem>
              <Mail size={16} />
              <ContactLink href="mailto:hlltvfk@gmail.com" variant="underline">
                hlltvfk@gmail.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              <ContactLink
                href="mailto:teyfiik@outlook.com"
                variant="underline"
              >
                teyfiik@outlook.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <SiWhatsapp size={16} />
              <ContactLink
                href="https://wa.me/905425085278"
                variant="underline"
              >
                (+90) 542-508-5278
              </ContactLink>
            </ContactItem>
          </ContactSection>
          <ContactSection>
            <ContactItem>
              <MapPin size={16} />
              <ContactLink
                href="ttps://maps.google.com/maps?q=Istanbul,Turkey"
                variant="underline"
              >
                Istanbul, Turkey
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <SiGithub size={16} />
              <ContactLink
                href="https://github.com/teyfix"
                target="_blank"
                variant="underline"
              >
                github.com/teyfix
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <SiLinkedin size={16} />
              <ContactLink
                href="https://linkedin.com/in/teyfik/"
                target="_blank"
                variant="underline"
              >
                linkedin.com/in/teyfik
              </ContactLink>
            </ContactItem>
          </ContactSection>
        </Contact>
      </Header>

      {/* Professional Summary */}
      <Section>
        <Heading level={2}>Professional Summary</Heading>
        <Text size="xs">
          Senior Full-Stack Engineer with 10+ years building high-performance,
          observable systems for 250K+ users. Specialized in performance
          engineering (50x improvements), real-time architectures, and emerging
          AI/ML platforms. Led cross-functional teams of 3-12 engineers
          delivering 99.9% uptime and 40% cost reductions. Strong foundation in
          TypeScript, Node.js, React, AWS, with hands-on ML experience (vector
          embeddings, pgvector). Seeking tech leadership roles in AI product
          companies to drive scalable architecture while expanding into Go/Rust
          and advanced ML systems.
        </Text>
      </Section>

      {/* Core Competencies */}
      <Section>
        <Heading level={2}>Core Competencies</Heading>
        <CompetencyGrid>
          <CompetencyItem>
            <CompetencyTitle>
              Technical Leadership & Architecture
            </CompetencyTitle>
            <CompetencyContent>
              System Design • Microservices Architecture • API Design • Design
              Patterns • Domain-Driven Design • Event-Driven Architecture
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyTitle>Team Leadership</CompetencyTitle>
            <CompetencyContent>
              Cross-Functional Leadership • Engineering Mentorship • Code Review
              • Agile/Scrum • Sprint Planning
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyTitle>Performance & Optimization</CompetencyTitle>
            <CompetencyContent>
              Database Optimization • Application Performance • Scalability
              Engineering • Load Testing • Production Monitoring & Observability
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem>
            <CompetencyTitle>DevOps & Cloud</CompetencyTitle>
            <CompetencyContent>
              CI/CD Pipelines • Infrastructure as Code • Container Orchestration
              • AWS/GCP • Production Management
            </CompetencyContent>
          </CompetencyItem>

          <CompetencyItem className="col-span-2">
            <CompetencyTitle>Methodologies & Practices</CompetencyTitle>
            <CompetencyContent>
              Agile/Scrum, Test-Driven Development (TDD), Continuous
              Integration/Continuous Deployment (CI/CD), Code Review, Technical
              Documentation, Security-First Development (OWASP Top 10 awareness,
              dependency scanning, secrets management), API Security (rate
              limiting, authentication, authorization patterns)
            </CompetencyContent>
          </CompetencyItem>
        </CompetencyGrid>
      </Section>

      {/* Technical Skills */}
      <Section>
        <Heading level={2}>Technical Skills</Heading>
        <SkillsGrid>
          <SkillCategory>
            <SkillTitle>Frontend Technologies</SkillTitle>
            <SkillList>
              React, Next.js, Angular, TypeScript, JavaScript (ES6+), HTML5,
              CSS3, TailwindCSS, shadcn/ui, Redux, Redux-Saga, RxJS, webpack,
              Vite, Storybook
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Backend Technologies</SkillTitle>
            <SkillList>
              Node.js, NestJS, Express.js, Elysia, TypeORM, Drizzle ORM, Prisma,
              GraphQL, REST APIs, OpenAPI, Swagger, Microservices Architecture
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Databases</SkillTitle>
            <SkillList>
              PostgreSQL, ClickHouse, TimescaleDB, Redis, MongoDB, MySQL,
              Database Optimization, Query Performance Tuning
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Event Streaming & Messaging</SkillTitle>
            <SkillList>
              Apache Kafka, Redpanda, NATS, RabbitMQ, WebSockets, WebRTC,
              Event-Driven Architecture
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Cloud & DevOps</SkillTitle>
            <SkillList>
              AWS (EC2, S3, Lambda, RDS, CloudFront, EKS), Google Cloud Platform
              (GCP), Kubernetes, Docker, Terraform, Traefik, CI/CD Pipelines,
              GitHub Actions, Rancher, MinIO (S3 API), Infrastructure as Code
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Monitoring & Observability</SkillTitle>
            <SkillList>
              Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana),
              OpenTelemetry, Pino, Pino-Elasticsearch, Application Performance
              Monitoring (APM), Distributed Tracing, Metrics Collection, Log
              Aggregation
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>AI & Machine Learning</SkillTitle>
            <SkillList>
              Vector Embeddings (pgvector, Qdrant), ML Recommendation Systems,
              michaelfeil/infinity, Python (emerging), LLM Integration,
              AI-Assisted Development (Cursor, GitHub Copilot)
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Programming Languages</SkillTitle>
            <SkillList>
              TypeScript, JavaScript, Node.js (expert), SQL, Lua, Python
              (expanding for ML/AI), Go (active learning for
              performance-critical systems), Rust (exploring for systems
              programming)
            </SkillList>
          </SkillCategory>

          <SkillCategory className="col-span-2">
            <SkillTitle>Authentication & Security</SkillTitle>
            <SkillList>
              OAuth 2.0, JWT, Keycloak, Next-Auth, RBAC, Secure Application
              Development, API Security Best Practices, DDoS Protection (Kong
              Gateway, rate limiting), Secrets Management, Input Validation &
              Sanitization, HTTPS/TLS Configuration, CORS Policy Implementation,
              Security Headers (CSP, HSTS), Dependency Vulnerability Scanning
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      {/* Team Leadership & Collaboration */}
      <Section>
        <Heading level={2}>Team Leadership & Collaboration</Heading>
        <List spacing="md">
          <ListItem>
            Led cross-functional teams of 3-12 engineers across frontend,
            backend, and data roles
          </ListItem>
          <ListItem>
            Constant collaboration with 2-7 core team members; regular
            coordination with 3-12+ stakeholders across product, design,
            support, and operations
          </ListItem>
          <ListItem>
            {`Mentorship through explanation-driven guidance (e.g., "why imgproxy
            vs. sharp" grounded in performance benchmarks)`}
          </ListItem>
          <ListItem>
            <Text weight="semibold" as="span">
              Cross-domain communication:
            </Text>{" "}
            Translated complex technical decisions to non-technical stakeholders
            (moderators, support teams, legal/compliance)
          </ListItem>
          <ListItem>
            <Text weight="semibold" as="span">
              Knowledge transfer emphasis:
            </Text>{" "}
            Building team understanding over directive management
          </ListItem>
          <ListItem>
            <Text weight="semibold" as="span">
              Mentorship Approach:
            </Text>{" "}
            Explanation-driven guidance over directives
          </ListItem>
        </List>

        <Callout variant="info">
          <CalloutTitle>Collaboration Example</CalloutTitle>
          <Text size="sm">
            During imgproxy recommendation for multiple projects, I explained{" "}
            <em>
              {`"Next.js uses sharp (Node.js) for image processing, but imgproxy
              is purpose-built in Go and consistently performs 10x faster. This
              isn't preference; it's a data-backed architectural decision."`}
            </em>{" "}
            Ensured engineers understood the <strong>{"'why'"}</strong> behind
            technology choices, improving decision-making autonomy.
          </Text>
        </Callout>
      </Section>

      {/* Professional Experience */}
      <Section>
        <div className="print:break-inside-avoid">
          <Heading level={2}>Professional Experience</Heading>

          {/* User Experience Center */}
          <Article>
            <ArticleHeader>
              <ExperienceHeader>
                <ExperienceTitle>Senior Full-stack Developer</ExperienceTitle>
                <ExperienceDetails>
                  <ExperienceTitle>User Experience Center</ExperienceTitle>
                  <ExperienceDate>Sep 2024 - Present</ExperienceDate>
                </ExperienceDetails>
              </ExperienceHeader>

              <TeamInfo>
                <Text weight="semibold" as="span" size="sm">
                  {"Team: "}
                </Text>
                <Text as="span" size="sm">
                  8 engineers (3 constant collaboration, 1 regular coordination
                  across projects)
                </Text>
              </TeamInfo>

              <List spacing="sm">
                <ListItem size="sm">
                  Led decision-making on technical architecture and
                  implementation across frontend, data engineering, and API
                  design, ensuring high performance and clear communication
                </ListItem>
                <ListItem size="sm">
                  Guided engineers on API design, performance optimization,
                  observability, and OpenAPI documentation, improving team
                  velocity and maintainable workflows
                </ListItem>
                <ListItem size="sm">
                  Translated business requirements into scalable technical
                  designs understandable by non-technical stakeholders
                </ListItem>
                <ListItem size="sm">
                  Rapidly adopted and applied new tools and frameworks,
                  including{" "}
                  <Text weight="semibold" as="span" size="sm">
                    NATS, ClickHouse, TimescaleDB
                  </Text>
                  , and vector-based AI pipelines
                </ListItem>
              </List>
            </ArticleHeader>
            <ProjectContainer>
              <ProjectTitle>
                AI-Powered Dating Platform (Pair.center @ UX Center)
              </ProjectTitle>
              <List spacing="sm">
                <ListItem size="sm">
                  Enabled{" "}
                  <Text weight="semibold" as="span" size="sm">
                    1M+ daily events
                  </Text>{" "}
                  (peak 50K ops/sec) with{" "}
                  <Text weight="semibold" as="span" size="sm">
                    99.9% uptime
                  </Text>{" "}
                  via a{" "}
                  <Text weight="semibold" as="span" size="sm">
                    high-throughput event-driven pipeline
                  </Text>{" "}
                  built with{" "}
                  <Text weight="semibold" as="span" size="sm">
                    Node.js (Bun runtime) + pg-copy-streams
                  </Text>
                  , including{" "}
                  <Text weight="semibold" as="span" size="sm">
                    Redis-based deduplication
                  </Text>{" "}
                  with 3-second idempotency windows
                </ListItem>
                <ListItem size="sm">
                  Built ML recommendation engine using vector embeddings,
                  improving match accuracy by{" "}
                  <Text weight="semibold" as="span" size="sm">
                    20%
                  </Text>
                </ListItem>
                <ListItem size="sm">
                  Reduced storage footprint by{" "}
                  <Text weight="semibold" as="span" size="sm">
                    85%
                  </Text>{" "}
                  using{" "}
                  <Text weight="semibold" as="span" size="sm">
                    TimescaleDB compression
                  </Text>{" "}
                  while maintaining low-latency queries
                </ListItem>
                <ListItem size="sm">
                  Extended{" "}
                  <Text weight="semibold" as="span" size="sm">
                    TimescaleDB
                  </Text>{" "}
                  with{" "}
                  <Text weight="semibold" as="span" size="sm">
                    Postgres Wrappers
                  </Text>{" "}
                  to enable ClickHouse FDW, bridging transactional and
                  analytical systems with type-safe{" "}
                  <Text weight="semibold" as="span" size="sm">
                    drizzle-orm
                  </Text>{" "}
                  queries
                </ListItem>
                <ListItem size="sm">
                  Designed{" "}
                  <Text weight="semibold" as="span" size="sm">
                    NATS-backed WebSocket gateway
                  </Text>{" "}
                  to offload stateful connections from the backend, enabling
                  real-time messaging with guaranteed delivery and JetStream
                  support for new clients
                </ListItem>
                <ListItem size="sm">
                  <Text weight="semibold" as="span" size="sm">
                    Developed a flexible quota validation service
                  </Text>{" "}
                  utilizing{" "}
                  <Text weight="semibold" as="span" size="sm">
                    SQL window functions
                  </Text>{" "}
                  and{" "}
                  <Text weight="semibold" as="span" size="sm">
                    CTEs
                  </Text>{" "}
                  to aggregate real-time usage logs, supporting complex renewal
                  cycles and ensuring 100% data integrity for user action limits
                </ListItem>
              </List>
              <TechStack>
                <Text weight="semibold" as="span" size="xs">
                  Stack:
                </Text>
                <Text as="span" size="xs" color="muted">
                  Kafka, PostgreSQL (CTEs, window functions, TimescaleDB),
                  ClickHouse, Redis, NATS, pg-copy-streams, Node.js (Bun
                  runtime), ML embeddings, Drizzle ORM
                </Text>
              </TechStack>
            </ProjectContainer>

            <ProjectContainer>
              <ProjectTitle>
                E-Commerce Performance Engineering (Pazmanya.com @ UX Center)
              </ProjectTitle>
              <List spacing="sm">
                <ListItem size="sm">
                  Accelerated page load times and improved infrastructure
                  efficiency via{" "}
                  <Text weight="semibold" as="span" size="sm">
                    intelligent caching strategies
                  </Text>
                  , SSR/SSG, and optimized API layers
                </ListItem>
                <ListItem size="sm">
                  Integrated{" "}
                  <Text weight="semibold" as="span" size="sm">
                    imgproxy
                  </Text>{" "}
                  for 10× faster image processing with WebP/AVIF formats
                </ListItem>
                <ListItem size="sm">
                  Implemented automated{" "}
                  <Text weight="semibold" as="span" size="sm">
                    CI/CD pipelines
                  </Text>{" "}
                  for zero-downtime deployments with Docker, Kubernetes, and
                  GitHub Actions
                </ListItem>
              </List>
              <TechStack>
                <Text weight="semibold" as="span" size="xs">
                  Stack:
                </Text>
                <Text as="span" size="xs" color="muted">
                  Next.js, imgproxy, MinIO, S3, GitHub Actions, Docker, Redis,
                  Storybook
                </Text>
              </TechStack>
            </ProjectContainer>

            <ProjectContainer>
              <ProjectTitle>
                Rewards Platform Engineering (Cashygo.com @ UX Center)
              </ProjectTitle>
              <List spacing="sm">
                <ListItem size="sm">
                  Achieved{" "}
                  <Text weight="semibold" as="span" size="sm">
                    95+ Lighthouse scores
                  </Text>{" "}
                  with Largest Contentful Paint{" "}
                  <Text weight="semibold" as="span" size="sm">
                    &lt;1s
                  </Text>
                  , making results visible to customers
                </ListItem>
                <ListItem size="sm">
                  Guided backend engineers to adopt OpenAPI, deploy{" "}
                  <Text weight="semibold" as="span" size="sm">
                    imgproxy
                  </Text>
                  , and connect to S3, optimizing frontend workflows and
                  maintainability
                </ListItem>
              </List>
              <TechStack>
                <Text weight="semibold" as="span" size="xs">
                  Stack:
                </Text>
                <Text as="span" size="xs" color="muted">
                  Next.js, TypeScript, OpenAPI, Node.js, Docker, GitHub Actions,
                  Storybook, Lighthouse
                </Text>
              </TechStack>
            </ProjectContainer>
          </Article>
        </div>

        {/* Osoci */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Senior Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>Osoci</ExperienceTitle>
                <ExperienceDate>Aug 2023 - Sep 2024</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                7 engineers (3 constant collaboration, 4 regular); led
                cross-functional team of 4 (team lead, 2 full-stack engineers, 1
                designer) before lead departure
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Led a small cross-functional team (team lead, 2 full-stack
                engineers, 1 designer), later taking ownership of platform
                decisions after lead departure
              </ListItem>
              <ListItem size="sm">
                Guided engineers on performance improvements and observability,
                introducing better use of existing tools (e.g., MongoDB lookups
                vs Mongoose population)
              </ListItem>
              <ListItem size="sm">
                Translated business requirements into scalable technical
                solutions, ensuring HR and non-technical stakeholders understood
                architecture decisions
              </ListItem>
              <ListItem size="sm">
                Quickly learned new tools and languages, including{" "}
                <Text weight="semibold" as="span" size="sm">
                  Lua for custom Prosody plugins
                </Text>
                , demonstrating adaptability to unfamiliar technologies
              </ListItem>
              <ListItem size="sm">
                Maintained close communication with support team to understand
                user pain points from feedback, translating qualitative reports
                into quantitative performance metrics and actionable technical
                improvements
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>Real-time Video Streaming (Alve)</ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Migrated platform from{" "}
                <Text weight="semibold" as="span" size="sm">
                  Janus Gateway
                </Text>{" "}
                (port-per-client, non-scalable) to{" "}
                <Text weight="semibold" as="span" size="sm">
                  Jitsi
                </Text>{" "}
                on Kubernetes for 500K+ MAU
              </ListItem>
              <ListItem size="sm">
                Refactored slow MongoDB queries (previously using Mongoose
                population) to efficient lookups and indexing, achieving{" "}
                <Text weight="semibold" as="span" size="sm">
                  ~50× faster responses
                </Text>{" "}
                (10–15s → &lt;200ms)
              </ListItem>
              <ListItem size="sm">
                Built full observability stack (
                <Text weight="semibold" as="span" size="sm">
                  Elasticsearch, Logstash, Kibana, Prometheus, Grafana,
                  OpenTelemetry
                </Text>
                ) with real-time alerts
              </ListItem>
              <ListItem size="sm">
                Developed{" "}
                <Text weight="semibold" as="span" size="sm">
                  custom Prosody (XMPP) plugins in Lua
                </Text>{" "}
                for real-time stream monitoring and analytics
              </ListItem>
              <ListItem size="sm">
                Implemented hybrid{" "}
                <Text weight="semibold" as="span" size="sm">
                  Hetzner + AWS
                </Text>{" "}
                auto-scaling infrastructure with Terraform IaC, reducing costs
                by 35%
              </ListItem>
              <ListItem size="sm">
                Built{" "}
                <Text weight="semibold" as="span" size="sm">
                  Angular micro-frontend admin panel
                </Text>{" "}
                with embedded React components for Jitsi Meet SDK integration
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                Kubernetes, Terraform, Rancher, Jitsi, Prosody (XMPP), MongoDB,
                Elasticsearch, Logstash, Kibana, Prometheus, Grafana,
                OpenTelemetry, Angular, React
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* Creatopy */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Senior Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>Creatopy</ExperienceTitle>
                <ExperienceDate>Mar 2022 - Aug 2023</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                12 engineers (3 constant collaboration, 4 regular coordination
                across product, design, and backend teams)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Collaborated with product, design, and backend teams to deliver
                features for a high-traffic digital ad platform serving 10K+
                marketing teams across multiple channels
              </ListItem>
              <ListItem size="sm">
                Standardized developer workflows with Windows WSL2 and CI/CD
                automation, reducing onboarding time from 2 days to 4 hours and
                cutting build/test friction
              </ListItem>
              <ListItem size="sm">
                Identified and resolved performance bottlenecks, improving
                template rendering speed by 35% and reducing overall CPU load on
                high-volume pages
              </ListItem>
              <ListItem size="sm">
                Streamlined designer-to-developer handoff by implementing{" "}
                <Text weight="semibold" as="span" size="sm">
                  pixel-perfect Figma integration
                </Text>{" "}
                in template list and editor views, improving efficiency by 40%
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>
              Digital Ad Platform (Creatopy @ Creatopy)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Contributed to a{" "}
                <Text weight="semibold" as="span" size="sm">
                  multi-platform digital ad creation and campaign management
                  platform
                </Text>{" "}
                used by 10K+ marketing teams worldwide
              </ListItem>
              <ListItem size="sm">
                Developed and optimized{" "}
                <Text weight="semibold" as="span" size="sm">
                  template editor, asset library, and campaign dashboard
                </Text>
                , improving responsiveness and usability for high-volume users
              </ListItem>
              <ListItem size="sm">
                Implemented caching strategies, lazy loading, and
                code-splitting, reducing initial load time by 25% and improving
                interactive performance across large campaigns
              </ListItem>
              <ListItem size="sm">
                Designed{" "}
                <Text weight="semibold" as="span" size="sm">
                  reusable UI components and editor modules
                </Text>{" "}
                adopted across multiple product teams, improving consistency and
                accelerating feature rollout
              </ListItem>
              <ListItem size="sm">
                Delivered 15+ major features across 6 sprints, including
                multi-platform export, real-time asset preview, and
                collaborative editing tools
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                React, Next.js, Node.js, TypeScript, TailwindCSS, Figma API,
                CI/CD, Docker, Redis, WebSockets
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* La3eb */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Senior Frontend Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>La3eb</ExperienceTitle>
                <ExperienceDate>Nov 2021 - Mar 2022</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                12 engineers (3 constant collaboration, 7 regular coordination
                with product and backend teams)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Collaborated across product, design, and backend teams to
                deliver features for a high-traffic superapp serving GCC users
              </ListItem>
              <ListItem size="sm">
                Standardized UI/UX patterns by creating a reusable component
                library adopted by 3 internal teams
              </ListItem>
              <ListItem size="sm">
                Modernized legacy React codebase with hooks and best practices,
                improving maintainability and developer productivity
              </ListItem>
              <ListItem size="sm">
                Contributed to performance-minded culture by identifying
                bottlenecks and implementing frontend optimizations
              </ListItem>
              <ListItem size="sm">
                Streamlined development processes with CI/CD and documentation
                standards
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>Superapp Platform (La3eb @ La3eb)</ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Contributed to a{" "}
                <Text weight="semibold" as="span" size="sm">
                  gaming superapp and e-commerce marketplace
                </Text>{" "}
                serving 50K+ users, unifying shopping, account management, and
                community engagement into a single platform
              </ListItem>
              <ListItem size="sm">
                Refactored{" "}
                <Text weight="semibold" as="span" size="sm">
                  checkout, delivery, and authentication flows
                </Text>
                , ensuring smooth multi-region operations and scalable
                performance
              </ListItem>
              <ListItem size="sm">
                Implemented{" "}
                <Text weight="semibold" as="span" size="sm">
                  in-memory caching
                </Text>{" "}
                and frontend optimizations, reducing CPU usage by 10% and
                improving time-to-interactive by 15%
              </ListItem>
              <ListItem size="sm">
                Achieved faster loading via{" "}
                <Text weight="semibold" as="span" size="sm">
                  code-splitting, lazy loading, and bundle optimization
                </Text>
                , improving overall page performance by 5–10%
              </ListItem>
              <ListItem size="sm">
                Developed a{" "}
                <Text weight="semibold" as="span" size="sm">
                  reusable component library
                </Text>{" "}
                with JSDoc documentation supporting multiple teams and future
                product expansion
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                React, Redux, TypeScript, Webpack, JSDoc, React Hooks, In-memory
                caching, CI/CD, Jenkins, GitLab
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* KAÇPARA Inc */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Lead Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>KAÇPARA Inc</ExperienceTitle>
                <ExperienceDate>Dec 2020 - Nov 2021</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                5 total (2 constant collaboration, 3 regular stakeholder
                coordination)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Launched SaaS platform serving 7 renovation market, handling
                20K+ quote requests in first week
              </ListItem>
              <ListItem size="sm">
                Facilitated cross-department collaboration, translating complex
                business requirements into scalable technical solutions
              </ListItem>
              <ListItem size="sm">
                Established CI/CD pipelines with automated testing, blue-green
                deployments, and monitoring to ensure reliable and maintainable
                operations
              </ListItem>
              <ListItem size="sm">
                Achieved 84% customer satisfaction based on early user feedback
                and retention rates
              </ListItem>
              <ListItem size="sm">
                Enabled cost estimates across 15+ renovation categories with
                real-time quote generation, processing 200K+ calculations
                monthly
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>SaaS Renovation Cost Platform (KAÇPARA)</ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Built dynamic cost estimation engine covering{" "}
                <Text weight="semibold" as="span" size="sm">
                  15+ renovation categories
                </Text>{" "}
                with real-time quote generation and PDF exports
              </ListItem>
              <ListItem size="sm">
                Implemented{" "}
                <Text weight="semibold" as="span" size="sm">
                  inflation-adaptive pricing
                </Text>{" "}
                handling{" "}
                <Text weight="semibold" as="span" size="sm">
                  10% monthly fluctuations
                </Text>{" "}
                without redeployment
              </ListItem>
              <ListItem size="sm">
                Developed secure authentication and subscription management
                using{" "}
                <Text weight="semibold" as="span" size="sm">
                  OAuth 2.0
                </Text>
                ,{" "}
                <Text weight="semibold" as="span" size="sm">
                  RBAC
                </Text>
                , and{" "}
                <Text weight="semibold" as="span" size="sm">
                  Stripe payment integration
                </Text>
              </ListItem>
              <ListItem size="sm">
                Deployed full-stack platform on{" "}
                <Text weight="semibold" as="span" size="sm">
                  DigitalOcean Apps
                </Text>{" "}
                using{" "}
                <Text weight="semibold" as="span" size="sm">
                  Docker containers
                </Text>
                , enabling reproducible environments and simplified application
                management despite limited prior DevOps experience
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                React, Next.js, TailwindCSS, NestJS, TypeORM, PostgreSQL, OAuth
                2.0, Stripe, Docker, DigitalOcean Apps
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* Orenda Software */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>Orenda Software</ExperienceTitle>
                <ExperienceDate>Dec 2018 - Dec 2020</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                12+ engineers (7 constant collaboration including moderators,
                12+ regular coordination across frontend, backend, and
                operations)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Built a{" "}
                <Text weight="semibold" as="span" size="sm">
                  Pusher-compatible WebSocket solution
                </Text>{" "}
                with Node.js, reducing latency by{" "}
                <Text weight="semibold" as="span" size="sm">
                  60%
                </Text>{" "}
                and cutting monthly costs by{" "}
                <Text weight="semibold" as="span" size="sm">
                  $5K–$10K
                </Text>
              </ListItem>
              <ListItem size="sm">
                Led backend migration from PHP to Node.js for real-time features
                (exchange operations, wallet management), mentoring 3 developers
                on scalable{" "}
                <Text weight="semibold" as="span" size="sm">
                  Node.js architecture
                </Text>{" "}
                for high-frequency trading
              </ListItem>
              <ListItem size="sm">
                Implemented monitoring and security using{" "}
                <Text weight="semibold" as="span" size="sm">
                  Prometheus
                </Text>
                ,{" "}
                <Text weight="semibold" as="span" size="sm">
                  Grafana
                </Text>
                , and{" "}
                <Text weight="semibold" as="span" size="sm">
                  Kong Gateway
                </Text>
                , tracking WebSocket throughput, frame rates, memory usage, and
                protecting the system from DDoS attacks
              </ListItem>
              <ListItem size="sm">
                Collaborated with site moderators during TradingView integration
                to understand financial chart requirements and trading
                workflows, ensuring technical implementation matched user mental
                models
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>
              Cryptocurrency Exchange Platform (Sistemkoin @ Orenda)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Architected the Angular frontend for a cryptocurrency exchange
                serving{" "}
                <Text weight="semibold" as="span" size="sm">
                  5,000+ daily users
                </Text>
                , ensuring smooth rendering and real-time updates
              </ListItem>
              <ListItem size="sm">
                Maintained{" "}
                <Text weight="semibold" as="span" size="sm">
                  60fps
                </Text>{" "}
                during volatile market periods by manual{" "}
                <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                  ChangeDetectorRef
                </code>{" "}
                updates, preventing UI freezes under high-frequency WebSocket
                traffic
              </ListItem>
              <ListItem size="sm">
                Integrated{" "}
                <Text weight="semibold" as="span" size="sm">
                  TradingView charts
                </Text>{" "}
                with an efficient Angular-to-canvas bridge for real-time candle
                rendering
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                Angular, RxJS, NgRx, OnPush change detection, TradingView,
                WebSockets, Node.js, Prometheus, Grafana, Kong Gateway
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* Talha IT */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>Talha IT</ExperienceTitle>
                <ExperienceDate>Jul 2017 - Dec 2018</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                5 engineers (2 constant collaboration, 3 regular coordination)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Contributed to fast-paced, high-stakes projects with real-time
                and high-throughput requirements
              </ListItem>
              <ListItem size="sm">
                Collaborated with cross-functional teams including frontend,
                backend, and DevOps engineers to deliver reliable systems
              </ListItem>
              <ListItem size="sm">
                Mentored peers on coding best practices and debugging strategies
                on JavaScript environments
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>
              Real-time Auction Platform (Bihale @ Talha IT)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Built a pay-per-bid auction system supporting{" "}
                <Text weight="semibold" as="span" size="sm">
                  250+ concurrent bidders per auction
                </Text>
              </ListItem>
              <ListItem size="sm">
                Optimized bid processing with{" "}
                <Text weight="semibold" as="span" size="sm">
                  MySQL stored procedures
                </Text>
                , ensuring sub-millisecond performance and zero transaction
                conflicts
              </ListItem>
              <ListItem size="sm">
                Developed real-time chat and notifications using{" "}
                <Text weight="semibold" as="span" size="sm">
                  Socket.IO
                </Text>
                ,{" "}
                <Text weight="semibold" as="span" size="sm">
                  Node.js
                </Text>
                , and{" "}
                <Text weight="semibold" as="span" size="sm">
                  MongoDB
                </Text>
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                AngularJS, Node.js, PHP, MySQL, MongoDB, Socket.IO, WebSockets
              </Text>
            </TechStack>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectTitle>
              Cafe-focused POS System (Check @ Talha IT)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Designed a cross-platform, serverless POS system for cafes using{" "}
                <Text weight="semibold" as="span" size="sm">
                  Firebase
                </Text>{" "}
                and{" "}
                <Text weight="semibold" as="span" size="sm">
                  Ionic
                </Text>
              </ListItem>
              <ListItem size="sm">
                Implemented real-time order and inventory management with
                offline support via{" "}
                <Text weight="semibold" as="span" size="sm">
                  Firestore
                </Text>{" "}
                and{" "}
                <Text weight="semibold" as="span" size="sm">
                  Cloud Functions
                </Text>
              </ListItem>
              <ListItem size="sm">
                Integrated mobile frontends via{" "}
                <Text weight="semibold" as="span" size="sm">
                  Ionic
                </Text>
                , enabling fast deployment across iOS and Android
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                Firebase, Ionic, Angular
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>

        {/* GD Holding Inc */}
        <Article>
          <ArticleHeader>
            <ExperienceHeader>
              <ExperienceTitle>Full-stack Developer</ExperienceTitle>
              <ExperienceDetails>
                <ExperienceTitle>GD Holding Inc</ExperienceTitle>
                <ExperienceDate>Jun 2015 - Jun 2017</ExperienceDate>
              </ExperienceDetails>
            </ExperienceHeader>

            <TeamInfo>
              <Text weight="semibold" as="span" size="sm">
                {"Team: "}
              </Text>
              <Text as="span" size="sm">
                13 engineers (7 constant collaboration including
                legal/accounting stakeholders, 12+ regular coordination)
              </Text>
            </TeamInfo>

            <List spacing="sm">
              <ListItem size="sm">
                Contributed to multiple full-stack projects, gaining hands-on
                experience across{" "}
                <Text weight="semibold" as="span" size="sm">
                  frontend, backend, and API integration
                </Text>
              </ListItem>
              <ListItem size="sm">
                Collaborated with cross-functional teams to deliver feature
                modules impacting billing workflows and recruitment processes
              </ListItem>
              <ListItem size="sm">
                Learned to architect distributed systems and real-time
                pipelines, improving{" "}
                <Text weight="semibold" as="span" size="sm">
                  data accuracy, scalability, and operational efficiency
                </Text>
              </ListItem>
              <ListItem size="sm">
                Partnered with legal/accounting stakeholders during custom
                invoice builder development, learning invoice and waybill
                compliance requirements to ensure drag-and-drop system produced
                legally valid outputs with correct formatting
              </ListItem>
            </List>
          </ArticleHeader>
          <ProjectContainer>
            <ProjectTitle>
              Customer Relationship Management (TRCRM @ GD Holding)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Developed billing automation and invoice templating modules,
                including{" "}
                <Text weight="semibold" as="span" size="sm">
                  custom drag-and-drop invoice builder
                </Text>{" "}
                with precise printing alignment
              </ListItem>
              <ListItem size="sm">
                Integrated{" "}
                <Text weight="semibold" as="span" size="sm">
                  Parasut billing API
                </Text>{" "}
                to automate invoice creation and management, streamlining
                accounting operations
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                Symfony, AngularJS, PostgreSQL
              </Text>
            </TechStack>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectTitle>
              Recruitment Intelligence Platform (Eleman.net @ GD Holding)
            </ProjectTitle>
            <List spacing="sm">
              <ListItem size="sm">
                Designed distributed crawling system aggregating{" "}
                <Text weight="semibold" as="span" size="sm">
                  50K+ daily job postings
                </Text>{" "}
                from multiple marketplaces with{" "}
                <Text weight="semibold" as="span" size="sm">
                  99% data accuracy
                </Text>
              </ListItem>
              <ListItem size="sm">
                Built real-time lead normalization pipeline,{" "}
                <Text weight="semibold" as="span" size="sm">
                  deduplicating and enriching data
                </Text>{" "}
                for call-center consumption, improving outbound call efficiency
                by{" "}
                <Text weight="semibold" as="span" size="sm">
                  35%
                </Text>
              </ListItem>
              <ListItem size="sm">
                Architected{" "}
                <Text weight="semibold" as="span" size="sm">
                  event-driven microservices
                </Text>{" "}
                to scale horizontally to 100K+ daily leads with{" "}
                <Text weight="semibold" as="span" size="sm">
                  fault isolation and reliability
                </Text>
              </ListItem>
            </List>
            <TechStack>
              <Text weight="semibold" as="span" size="xs">
                Stack:
              </Text>
              <Text as="span" size="xs" color="muted">
                Node.js, RabbitMQ, MongoDB, Redis, Microservices Architecture
              </Text>
            </TechStack>
          </ProjectContainer>
        </Article>
      </Section>

      <div className="grid grid-cols-2 gap-2">
        {/* Education */}
        <Section>
          <Heading level={2}>Education</Heading>
          <EducationHeader layout="horizontal">
            <ExperienceTitle size="base">Kocaeli University</ExperienceTitle>
            <ExperienceDetails>
              <ExperienceTitle size="base">
                International Relations
              </ExperienceTitle>
              <ExperienceDate>2016</ExperienceDate>
            </ExperienceDetails>
          </EducationHeader>
          <EducationNote>
            Transitioned to full-time software development to focus on technical
            expertise
          </EducationNote>
        </Section>

        {/* Certifications & Professional Development */}
        <Section>
          <Heading level={2}>Certifications & Professional Development</Heading>
          <EducationHeader>
            <ExperienceTitle size="base">
              AWS Certified Solutions Architect – Associate
            </ExperienceTitle>
            <ExperienceDate>(In Progress, Expected Q1 2026)</ExperienceDate>
          </EducationHeader>
        </Section>
      </div>

      {/* Continuous Learning & Professional Courses */}
      <Section className="print:break-inside-avoid">
        <Heading level={2}>Continuous Learning & Professional Courses</Heading>
        <CompetencyGrid spacing="none">
          <EducationHeader>
            <ExperienceTitle size="base">
              Advanced TypeScript Patterns & Performance Optimization
            </ExperienceTitle>
            <ExperienceDate>(Frontend Masters, 2024)</ExperienceDate>
          </EducationHeader>

          <EducationHeader>
            <ExperienceTitle size="base">
              Node.js Performance, Profiling & Debugging
            </ExperienceTitle>
            <ExperienceDate>(Frontend Masters, 2024)</ExperienceDate>
          </EducationHeader>

          <EducationHeader>
            <ExperienceTitle size="base">
              Kubernetes for Application Developers
            </ExperienceTitle>
            <ExperienceDate>(Linux Foundation, 2023)</ExperienceDate>
          </EducationHeader>

          <EducationHeader>
            <ExperienceTitle size="base">
              System Design & Scalable Architecture
            </ExperienceTitle>
            <ExperienceDate>(Udemy, 2023)</ExperienceDate>
          </EducationHeader>

          <EducationHeader>
            <ExperienceTitle size="base">
              Database Design & Query Optimization (PostgreSQL & NoSQL)
            </ExperienceTitle>
            <ExperienceDate>(Coursera, 2024)</ExperienceDate>
          </EducationHeader>
        </CompetencyGrid>
      </Section>

      {/* Open Source Contributions */}
      <Section>
        <Heading level={2}>Open Source Contributions</Heading>
        <Text as="p" size="xs">
          <em>
            Active contributor on GitHub (
            <ContactLink
              href="https://github.com/teyfix"
              target="_blank"
              variant="underline"
            >
              @teyfix
            </ContactLink>
            ) with a focus on TypeScript utilities, distributed systems
            experiments, Docker-based development environments, and developer
            tooling.
          </em>
        </Text>
      </Section>

      {/* Footer */}
      <Footer>
        <p>&copy; 2026 Halil Teyfik Dolmaci. All rights reserved.</p>
      </Footer>
    </Container>
  );
}
