export const PROJECT_FILTERS = ['All', 'Data & Pipelines', 'ML & Vision', 'Systems & Web'];

export const PROJECTS = [
  {
    title: 'HydroDAQ',
    categories: ['Data & Pipelines'],
    status: 'In progress',
    repo: 'https://github.com/AdityaB2007/HydroDAQ',
    summary:
      'Ingestion and SQL storage design for multi-rate hydraulic sensor logs from the UCI test rig (1 Hz, 10 Hz, 100 Hz across 2,205 cycles), validating row counts before resampling.',
    metric: '17 channels · 43,680 readings/cycle',
    tags: ['Python', 'SQL', 'Time-Series', 'C'],
  },
  {
    title: 'GeoVision',
    categories: ['Data & Pipelines', 'ML & Vision'],
    repo: 'https://github.com/AdityaB2007/GeoVision',
    summary:
      'Sentinel-2 land-cover pipeline over 10 classes. Includes MD5-verified Zenodo and HuggingFace ingestion, spatial and official splits across 5,400 test tiles, and a FastAPI Grad-CAM viewer.',
    metric: '93.28% top-1 · 0.9966 ROC-AUC',
    tags: ['PyTorch', 'FastAPI', 'scikit-learn', 'Python'],
  },
  {
    title: 'MovieLens Hybrid Recommender',
    categories: ['Data & Pipelines', 'ML & Vision'],
    repo: 'https://github.com/AdityaB2007/CSC3730-Group4',
    summary:
      'Evaluated popularity, genre cosine-similarity, and hybrid ranking on MovieLens 100K (943 users, 1,682 movies, 93.7% sparse) using an 80/20 time split; alpha=0.3 hit 0.0442 precision@10.',
    metric: '100k ratings · 0.1249 MRR@10',
    tags: ['Python', 'pandas', 'NumPy'],
  },
  {
    title: 'SONAR',
    categories: ['Data & Pipelines', 'ML & Vision'],
    repo: 'https://github.com/AdityaB2007/SONAR',
    summary:
      'Unsupervised audio analysis on Spotify track tables. Audited missing rows, standardized features, ran PCA and K-Means with silhouette checks, and tested cosine kNN against a random baseline.',
    metric: 'PCA · K-Means · Cosine kNN',
    tags: ['Python', 'pandas', 'scikit-learn'],
  },
  {
    title: 'ApolLens',
    categories: ['ML & Vision', 'Systems & Web'],
    badge: '2nd Place · GeauxHack 2026',
    repo: 'https://github.com/AdityaB2007/ApolLens',
    summary:
      'Offline repair assistant pairing a YOLOX-Nano detector (ONNX Runtime) with on-device reasoning (Apple Foundation Models or Qwen3-1.7B), offline speech, and a React/TypeScript companion.',
    metric: 'ONNX YOLOX-Nano · Local LLM',
    tags: ['Flutter', 'ONNX', 'React', 'TypeScript'],
  },
];
