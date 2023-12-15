---
draft: false 
date: 2023-02-21 
hide:
#   - navigation
  - toc

categories:
  - university research
  - text

authors:
  - thanatoz

links:
  - Projects/index.md

title: Investigating Semantic Roles for Emotion Role Prediction
description: Project on semantic role labelling using neural networks to find the impact of semantic role features for emotion analysis. 

slug: help-im-trapped-in-a-universe-factory
---

<style>
p{
text-align: justify;
text-justify: inter-word;
}

.MathJax {
font-size: 2em;
}
</style>


<center>

# Investigating Semantic Roles for Emotion Role Prediction

#### <p style="text-align: center;">Tushar Dhyani, Maximilian Wegge</p>
<p style="text-align: center;">Institut für Maschinelle Sprachverarbeitung, University of Stuttgart</p>

</center>

<br/><br/>

> A detailed scientific report on this project is available on [Researchgate](https://www.researchgate.net/publication/355360232_Investigating_Semantic_Roles_for_Emotion_Role_Prediction). Please feel free to read and share your feedback with me over [email](mailto:dhyanitushar@gmail.com)

Emotion analysis primarily focuses on classifying, predicting and retrieving emotions and their related properties from text. However, only few research was conducted towards analyzing the semantic roles of emotions, i.e. who is experiencing which emotion, what caused it and what or whom is it directed towards. This project investigate the influence of semantic role labels on emotion role prediction. Building on top of previous approaches and resources, I've implemented a framework for predicting emotion roles using different features with co-researcher _Maximilian Wegge_. We find that semantic role label features have no significant influence on the task and identify two possible reasons for that.

This project was conducted under the supervision of [Dr. Roman Klinger](https://www.romanklinger.de/)

## What is Semantic Role Labelling?

In natural languages, we understand the _who_, _why_, _which_, _what_, etc. in a sentence by understanding the words and phrases and their semantic meaning. This semantic meaning helps a lot in understanding why emotion is triggered, towards whom it is directed, or what gets affected. The process of pointing these individual components from a sentence is called Semantic Role Labelling or is sometimes analogous to Emotion Role labeling.

Semantic role labeling provides us with fine-grained control over emotion classification or prediction as we get a clear understanding of it. 

![emotion_roles](https://github.com/Thanatoz-1/EmotionStimuli/blob/main/docs/_static/image/sentence_exmaple.jpg?raw=true)
Here, **who (experiencer) feels which emotion (indicated by cue), which object, person, or instance the emotion is directed towards (target), and what evoked the emotion in the feeler (cause)**.

## Datasets used:
- [Reman](https://aclanthology.org/C18-1114.pdf)
- [Good News Everyone (GNE)](https://arxiv.org/abs/1912.03184)
- [Emotion stimuli](https://link.springer.com/chapter/10.1007/978-3-319-18117-2_12)
- [Electoral Tweets](https://aclanthology.org/W14-2607.pdf)
- [Emotion Cause Analysis (ECA)](https://research.nii.ac.jp/ntcir/workshop/OnlineProceedings13/pdf/ntcir/01-NTCIR13-OV-ECA-GaoQ.pdf)


## Methods


## Metric
We evaluate our approach by calculating the Jaccard value and reporting the F1 score of the overlapping spans. The Jaccard index is defined as $$ J(A,B) = \frac{| A \cap B |}{| A \cup B |} = \frac{| A \cap B|}{|A| + |B| - |A \cap B|} $$

In our case, we take A as our prediction span and B as the target span. We calculate a span to be correct only if the predicted and the target span have 80% overlap.

## Results

We run our experiments on the testing split of the following corpora and compare the performances using jaccard score. For our evaluation, we set the overlap threshold to 0.8 and consider only the spans that have atleast 80% overlap compared to the training spans. 

<center>

<!-- ![compared_results](https://ik.imagekit.io/tushard/Personal/projects/image_jC1Kg2gkt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665650666425){ width=350px} -->
<table>
  <tr>
    <th>Dataset</th>
    <th>Method</th>
    <th>Exp</th>
    <th>Tar</th>
    <th>Cue</th>
    <th>Cause</th>
  </tr>
  <tr>
    <td>REMAN</td>
    <td>HMM</td>
    <td>0.228</td>
    <td>0.021</td>
    <td>-</td>
    <td>0.011</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb</td>
    <td>0.435</td>
    <td>0.051</td>
    <td>-</td>
    <td>0.101</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(all)</td>
    <td><strong>0.494</strong></td>
    <td>0.025</td>
    <td>-</td>
    <td>0.078</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(slct)</td>
    <td>0.465</td>
    <td><strong>0.115</strong></td>
    <td>-</td>
    <td><strong>0.139</strong></td>
  </tr>
<caption>Table 1: Demonstrate the results of our experiments on Reman corpus. Our model achieves higher scores compared to our baseline using HMM model.</caption>
</table>



<table>
  <tr>
    <th>Dataset</th>
    <th>Method</th>
    <th>Exp</th>
    <th>Tar</th>
    <th>Cue</th>
    <th>Cause</th>
  </tr>
  <tr>
    <td>GNE</td>
    <td>HMM</td>
    <td>0.370</td>
    <td>0.062</td>
    <td>0.293</td>
    <td>0.321</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb</td>
    <td><strong>0.595</strong></td>
    <td>0.228</td>
    <td>0.441</td>
    <td><strong>0.654</strong></td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(all)</td>
    <td>0.591</td>
    <td><strong>0.312</strong></td>
    <td><strong>0.443</strong></td>
    <td>0.638</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(slct)</td>
    <td>0.553</td>
    <td>0.278</td>
    <td>0.408</td>
    <td>0.613</td>
  </tr>
<caption>Table 2: The results of our experiments on Good News Everyone corpus. Our model's performance still remains higher compared to baseline HMM model.</caption>
</table>


<table>
  <tr>
    <th>Dataset</th>
    <th>Method</th>
    <th>Exp</th>
    <th>Tar</th>
    <th>Cue</th>
    <th>Cause</th>
  </tr>
  <tr>
    <td>ES</td>
    <td>HMM</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.215</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td><strong>0.593</strong></td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(all)</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.591</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(slct)</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.553</td>
  </tr>
<caption>Table 3: Results of our model on Emotion Stimuli dataset for <i>cause</i> only. The results show that SRL features do not really impact the performance on respective corpus.</caption>
</table>

<table>
  <tr>
    <th>Dataset</th>
    <th>Method</th>
    <th>Exp</th>
    <th>Tar</th>
    <th>Cue</th>
    <th>Cause</th>
  </tr>
  <tr>
    <td>ET</td>
    <td>HMM</td>
    <td>0.0</td>
    <td>0.228</td>
    <td>0.122</td>
    <td><strong>0.124</strong></td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb</td>
    <td>0.0</td>
    <td>0.383</td>
    <td><strong>0.170</strong></td>
    <td>0.047</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(all)</td>
    <td>0.0</td>
    <td>0.434</td>
    <td>0.134</td>
    <td>0.085</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(slct)</td>
    <td>0.0</td>
    <td><strong>0.443</strong></td>
    <td>0.136</td>
    <td>0.070</td>
  </tr>
<caption>Table 4: Results of our model on Electoral Tweet dataset. The results still suggests that the model does not achieve any improvement using the SRL features.</caption>
</table>


<table>
  <tr>
    <th>Dataset</th>
    <th>Method</th>
    <th>Exp</th>
    <th>Tar</th>
    <th>Cue</th>
    <th>Cause</th>
  </tr>
  <tr>
    <td>ECA</td>
    <td>HMM</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.025</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.155</td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(all)</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td><strong>0.206</strong></td>
  </tr>
  <tr>
    <td></td>
    <td>biLSTM-emb+srl(slct)</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>0.152</td>
  </tr>
<caption> Table 5: Results demonstrate no improvement using the SRL all and selected features in improvement of emotion detection.</caption>
</table>


</center>


> A detailed scientific report on this project is available on [Researchgate](https://www.researchgate.net/publication/355360232_Investigating_Semantic_Roles_for_Emotion_Role_Prediction). Please feel free to read and share your feedback with me over [email](mailto:dhyanitushar@gmail.com)