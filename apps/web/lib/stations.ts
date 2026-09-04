export const stations = [
  {
    file: 'PRODUCT',
    slug: 'product',
    title: 'Product First',
    owns: 'What, why, audience, GTM, and how we will know',
  },
  {
    file: 'JOURNEYS',
    slug: 'journeys',
    title: 'Journeys First',
    owns: 'Actors, states, permissions, errors, and completion',
  },
  {
    file: 'DESIGN',
    slug: 'design',
    title: 'Design First',
    owns: 'How the interface behaves and communicates',
  },
  {
    file: 'ARCHITECTURE',
    slug: 'architecture',
    title: 'Architecture First',
    owns: 'System boundaries, dependency direction, and deployment shape',
  },
  {
    file: 'DATA',
    slug: 'data',
    title: 'Data First',
    owns: 'Canonical domain concepts, ownership, lifecycle, and evolution',
  },
  { file: 'API', slug: 'api', title: 'API First', owns: 'Capability and contract boundaries' },
  {
    file: 'DOCUMENTATION',
    slug: 'documentation',
    title: 'Documentation First',
    owns: 'Durable, accurate, discoverable context',
  },
  {
    file: 'WORKFLOW',
    slug: 'workflow',
    title: 'Workflow First',
    owns: 'Actors, handoffs, work state, and human gates',
  },
  {
    file: 'PIPELINES',
    slug: 'pipelines',
    title: 'Pipelines First',
    owns: 'Automated validation and delivery',
  },
  {
    file: 'QUALITY',
    slug: 'quality',
    title: 'Quality First',
    owns: 'Acceptance, tests, evals, and budgets',
  },
  {
    file: 'SECURITY',
    slug: 'security',
    title: 'Security First',
    owns: 'Trust, authorization, secrets, and agent permissions',
  },
  {
    file: 'OPERATIONS',
    slug: 'operations',
    title: 'Operations First',
    owns: 'Runtime health, support, and recovery',
  },
] as const

export type StationSlug = (typeof stations)[number]['slug']

export function stationBySlug(slug: string) {
  return stations.find(station => station.slug === slug)
}
