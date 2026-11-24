export const PAPERS = [
  {
    title:
      'Machine Learning-based Prediction of Ciprofloxacin Resistance in Escherichia coli Using Antimicrobial Susceptibility Testing Metadata',
    venue: 'IEEE · Jul 2026',
    url: 'https://ieeexplore.ieee.org/document/11608476',
    authors: ['K. Balakrishna', 'A. Baisakh', 'M. Al-Wishah', 'H. Yu'],
    summary:
      'Metadata pipeline over 7,629 BV-BRC E. coli isolates (25% resistant) using median imputation, one-hot laboratory descriptors, and class-weighted random forest models.',
    metrics: '7,629 isolates · ~90% acc · 0.75 resistant F1 · 0.84 ROC-AUC',
  },
  {
    title:
      'Enhancing Breast Cancer Classification Through GAN-Generated Synthetic Malignant Samples',
    venue: 'IEEE FMLDS · Mar 2026',
    url: 'https://ieeexplore.ieee.org/document/11446652',
    authors: ['K. Balakrishna', 'A. Baisakh', 'V. Kanna', 'A. Lee', 'M. Al-Wishah'],
    summary:
      'Trained a tabular GAN exclusively on malignant UCI Wisconsin Breast Cancer records to balance training folds for a soft-voting ensemble under 5-fold stratified CV.',
    metrics: '98.07% val acc · 97.40% F1',
    figure: '/assets/gan-pipeline.png',
    figureAlt: 'CTGAN synthetic augmentation and ensemble pipeline',
  },
  {
    title: "ALTARN: A Tabular Residual Neural Network for Alzheimer's Disease Classification and Prediction",
    venue: 'IEEE FMLDS · Mar 2026',
    url: 'https://ieeexplore.ieee.org/document/11446700',
    authors: ['K. Balakrishna', 'A. Baisakh', 'V. Kanna', 'M. Al-Wishah', 'A. Lee'],
    summary:
      'Tabular attention residual network over clinical, demographic, and lifestyle variables for 2,149 subjects, using sigmoid feature attention and skip projections.',
    metrics: '2,149 subjects · 85.06% val acc · 78.32% F1',
    figure: '/assets/altarn-pipeline.png',
    figureAlt: 'ALTARN tabular attention residual network diagram',
  },
];

export const BOOKS = [
  {
    title: 'ACE Differential Equations and Linear Algebra',
    date: 'Mar 2026',
    url: 'https://www.tmasacademy.com/books/ace-differential-equations-and-linear-algebra',
    summary: 'First- and second-order ODEs, eigenvalues, linear systems, and Laplace transforms.',
  },
  {
    title: 'ACE Multivariable Calculus',
    date: 'Jan 2026',
    url: 'https://www.tmasacademy.com/books/ace-multivariable-calculus',
    summary: 'Vectors, partial derivatives, multiple integrals, and vector calculus.',
  },
  {
    title: 'ACE AP Biology',
    date: 'Apr 2025',
    url: 'https://www.tmasacademy.com/books/ace-ap-biology',
    summary: 'Co-authored 300+ page AP Biology review guide with 100+ practice questions.',
  },
  {
    title: 'ACE AP Chemistry',
    date: 'Sep 2024',
    url: 'https://www.tmasacademy.com/books/ace-ap-chemistry',
    summary: '400+ page AP Chemistry review guide with 100+ practice questions and solutions.',
  },
];
