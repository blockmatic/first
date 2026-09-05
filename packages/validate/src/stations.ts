export const stations = [
  'PRODUCT',
  'JOURNEYS',
  'ARCHITECTURE',
  'DATA',
  'API',
  'DOCUMENTATION',
  'WORKFLOW',
  'QUALITY',
  'SECURITY',
  'OPERATIONS',
] as const

export const rootFiles = ['README.md', 'ABOUT.md', 'AGENTS.md', 'FIRST.md'] as const

export const maintainerFiles = [
  'maintainers/README.md',
  'maintainers/PACKAGING.md',
  'maintainers/IDEAS.md',
  'maintainers/FEEDBACK.md',
] as const

export const principleHeadings = [
  'Principle',
  'Statement',
  'Outcome',
  'Artifacts',
  'Minimum Useful Artifact',
  'Recipe',
  'Validation',
  'Definition of Done',
  'Agent Prompt',
  'Notes',
] as const

export const articleHeadings = [
  'Principle',
  'The Case',
  'Product Leverage',
  'Engineering Leverage',
  'In an Agentic System',
  'What "First" Does Not Mean',
  'Spec',
  'Further Reading',
] as const

export const skillFolderByStation = {
  PRODUCT: 'f-product',
  JOURNEYS: 'f-journeys',
  ARCHITECTURE: 'f-architecture',
  DATA: 'f-analyst',
  API: 'f-api',
  DOCUMENTATION: 'f-info-architect',
  WORKFLOW: 'f-workflow',
  QUALITY: 'f-quality',
  SECURITY: 'f-security',
  OPERATIONS: 'f-operations',
} as const

export const nestedSkillFolders = [...Object.values(skillFolderByStation), 'f-ai-expert'] as const
