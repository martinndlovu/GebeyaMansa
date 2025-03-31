import type { IProviderConfig } from '~/types/model';

interface OllamaModel {
  name: string;
  details?: {
    parameter_size: string;
  };
}

export const DEFAULT_PROVIDER_SETTINGS: Record<string, IProviderConfig> = {
  Ollama: {
    name: 'Ollama',
    settings: {
      enabled: true,
      baseUrl: 'http://127.0.0.1:11434',
      defaultModel: 'llama3:latest',
    },
    staticModels: [],
    getDynamicModels: async () => {
      const response = await fetch('http://127.0.0.1:11434/api/tags');
      const data = await response.json() as { models: OllamaModel[] };
      return data.models.map((model) => ({
        name: model.name,
        label: `${model.name} (${model.details?.parameter_size || 'N/A'})`,
        provider: 'Ollama',
        maxTokenAllowed: 8000,
      }));
    },
  },
}; 