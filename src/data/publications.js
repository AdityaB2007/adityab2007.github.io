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
];
