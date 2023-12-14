---
draft: false 
date: 2023-05-15 

hide:
#   - navigation
  - toc
categories:
  - competitions
  - audio

authors:
  - thanatoz

links:
  - Projects/index.md

title: Sound demixing challenge.
description: Using neural networks to solve the source separation problem. These audio inverse problems are mainly for sound demixing and cinematic demixing challenge. 
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

<center>

# Sound demixing challenge

#### <p style="text-align: center;">Tushar Dhyani</p>
<!-- <p style="text-align: center;">Institut für Maschinelle Sprachverarbeitung, University of Stuttgart</p> -->
</center>

<center>
<img class="center-block" style="max-width:750px;" src="https://ik.imagekit.io/tushard/Personal/projects/sound_demixing_banner_SE0lHotR6?updatedAt=1702507794406">
</center>

### Problems:

> This project was a part of Sound demixing challenge organized by Sony on [AIcrowd](https://www.aicrowd.com/challenges/sound-demixing-challenge-2023). The report to this challenge is available [here](https://doi.org/10.3389/frsip.2021.808395).

Sound demixing or source separation problem is the task of separating an audio file into its components. In this project I tackled only two of other possible use-cases for this: music and movies. Music source separation is the task of extracting vocals and other musical intruments used in the song. To understand with an audio example, here are the components of  

| Source   | Sample 1                                                                                 | Sample 2                                                                      |
|----------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Mixture  | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song1/mixture.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song2/mixture.wav" type="audio/flac"></audio> | 
| Vocals  | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song1/vocals.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song2/vocals.wav" type="audio/flac"></audio> | 
| Drums  | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song1/drums.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song2/drums.wav" type="audio/flac"></audio> | 
| Bass  | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song1/bass.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="../sound_separ_files/song2/bass.wav" type="audio/flac"></audio> |  

### Method

### Results

### Rankings: