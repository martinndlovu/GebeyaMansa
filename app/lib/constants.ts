export const DEFAULT_MODEL = 'gpt-4-turbo-preview';
export const DEFAULT_PROVIDER = {
  name: 'OpenAI',
  label: 'OpenAI',
  description: 'OpenAI API',
  url: 'https://api.openai.com',
  type: 'cloud',
  auth: 'key',
  staticModels: [
    {
      name: 'gpt-4-turbo-preview',
      label: 'GPT-4 Turbo',
      provider: 'OpenAI',
      contextWindow: 128000,
      maxTokens: 4096,
      cost: 0.01,
      type: 'chat',
    }
  ],
  dynamicModels: true,
  supportsImageInput: true,
} as const; 