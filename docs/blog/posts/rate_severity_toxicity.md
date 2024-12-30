---
draft: false 
date: 2018-07-15 
hide:
#   - navigation
  - toc
categories:
  - Competitions
  - Text

authors:
  - tushar

title: Jigsaw toxicity detection
description: Can you help detect toxic comments ? and minimize unintended model bias? Let's work to build a model that recognizes toxicity and minimizes this type of unintended bias with respect to mentions of identities.
  
---

<style>
p{
text-align: justify;
text-justify: inter-word;
}

.MathJax {
font-size: 2.1em;
}
</style>


![Image-banner](https://ik.imagekit.io/tushard/Personal/projects/jigsaw_cover_pbkBFn5tc.png?updatedAt=1702538682019)

## Problem

A primary focus lies in developing machine learning models capable of detecting toxicity within online discussions. Toxicity, in this context, refers to anything perceived as rude, disrespectful, or potentially causing someone to exit a conversation. Typically, toxicity is categorized using binary classification, but this approach limits the ability to discern the severity of toxic comments. In my project for a [Kaggle competition](https://www.kaggle.com/competitions/jigsaw-unintended-bias-in-toxicity-classification/overview), I present a system aimed at addressing this limitation.

<!-- more -->

## Method
My final solution was weighted average of 8 models:

- BERT Base Uncased
- BERT Base Cased
- BERT Large Uncased
- BERT Large Cased
- BERT Large Uncased WWM
- BERT Large Cased WWM
- BiLSTM with FastText and Glove
- GPT-2 Large

**Data**: I trained all final models except LSTM on 95% of data, leaving 5% as cold holdout for validation. Final LSTM was trained on full dataset. For my LSTM I used standard cleaning and preprocessing. All other models were trained on RAW data: no cleaning, no preprocessing, no feature engineering. Well, I guess future is now?

**Loss**: I used weighted sigmoid cross-entropy loss (torch.nn.BCEWithLogitsLoss) with different sets of weights and target variants (including 6 additional toxicity subtypes).

The training and inference pipelines for my model training is as follows:

![Model training](https://ik.imagekit.io/tushard/Personal/projects/jigsaw_model_training_V4bT9DmSc?updatedAt=1702540209738)
## Results
