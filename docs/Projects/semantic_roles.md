# Semantic Roles

> A detailed scientific report on this project is available on [Researchgate](https://www.researchgate.net/publication/355360232_Investigating_Semantic_Roles_for_Emotion_Role_Prediction). Please feel free to read and share your feedback with me over [email](mailto:dhyanitushar@gmail.com)

Emotion analysis primarily focuses on classifying, predicting, and retrieving emotions and their related properties from text. However, only a few studies have analyzed the semantic roles of emotions, that is, who is experiencing which emotion, what caused it, and what or whom it is directed towards. In this project, I attempt to approach this problem and compare existing solutions, along with their effectiveness on the task. This project was conducted under the supervision of [Dr. Roman Klinger](https://www.romanklinger.de/)

## What is Semantic Role Labelling?

In natural languages, we understand the _who_, _why_, _which_, _what_, etc. in a sentence by understanding the words and phrases and their semantic meaning. This semantic meaning helps a lot in understanding why emotion is triggered, towards whom it is directed, or what gets affected. The process of pointing these individual components from a sentence is called Semantic Role Labelling or is sometimes analogous to Emotion Role labeling.

Semantic role labeling provides us with fine-grained control over emotion classification or prediction as we get a clear understanding of it. 

![emotion_roles](https://github.com/Thanatoz-1/EmotionStimuli/blob/main/docs/_static/image/sentence_exmaple.jpg?raw=true)
Here, **who (experiencer) feels which emotion (indicated by cue), which object, person, or instance the emotion is directed towards (target), and what evoked the emotion in the feeler (cause)**.

## Corpus used:
- [Reman](https://aclanthology.org/C18-1114.pdf)
- [Good News Everyone (GNE)](https://arxiv.org/abs/1912.03184)
- [Emotion stimuli](https://link.springer.com/chapter/10.1007/978-3-319-18117-2_12)
- [Electoral Tweets](https://aclanthology.org/W14-2607.pdf)
- [Emotion Cause Analysis (ECA)](https://research.nii.ac.jp/ntcir/workshop/OnlineProceedings13/pdf/ntcir/01-NTCIR13-OV-ECA-GaoQ.pdf)

## Results

We evaluate our approach by calculating the Jaccard value and reporting the F1 score of the overlapping spans. The threshold for calculating the F1 score is set to 0.8 arbitrarily. 

![compared_results](https://ik.imagekit.io/tushard/Personal/projects/image_jC1Kg2gkt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665650666425){ width=350px}


> A detailed scientific report on this project is available on [Researchgate](https://www.researchgate.net/publication/355360232_Investigating_Semantic_Roles_for_Emotion_Role_Prediction). Please feel free to read and share your feedback with me over [email](mailto:dhyanitushar@gmail.com)