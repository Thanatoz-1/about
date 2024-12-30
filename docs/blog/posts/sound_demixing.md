---
draft: false 
date: 2023-05-15 

categories:
  - Competitions
  - Audio

authors:
    - tushar

---

<!-- <center>

# Sound demixing challenge

#### <p style="text-align: center;">Tushar Dhyani</p>
</center> -->

### Problem:
Separating different sounds in a recording is called sound separation. In this project, I focused on just two uses: music and movies. When it comes to music, sound separation means pulling out voices and instruments from a song. For example, let's break down the parts of two songs that I found randomly. Thanks to the creators.


<center>
![banner](https://ik.imagekit.io/tushard/Personal/projects/sound_demixing_banner_SE0lHotR6?updatedAt=1702507794406)
</center>

<!-- more -->

> This project was a part of Sound demixing challenge organized by Sony on [AIcrowd](https://www.aicrowd.com/challenges/sound-demixing-challenge-2023). The report to this challenge is available [here](https://doi.org/10.3389/frsip.2021.808395).


| Source   | Sound demixing sample                                                                                 | Sound demixing sample                                                                      |
|----------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Mixture  | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song1/mixture.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song2/mixture.wav" type="audio/flac"></audio> | 
| Vocals  | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song1/vocals.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song2/vocals.wav" type="audio/flac"></audio> | 
| Drums  | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song1/drums.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song2/drums.wav" type="audio/flac"></audio> | 
| Bass  | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song1/bass.wav" type="audio/flac"></audio> | <audio controls controlsList="nodownload"><source src="/blog/assets/audio/sound_separ_files/song2/bass.wav" type="audio/flac"></audio> |

The challenge was broadly divided into two tracks: Music demixing (MDX) and Cinematic sound demixing (CDX) but the aim was still similar. The complexity of the problem lay in sub-problems: Labelling noise (leaderboard A), Bleeding in recording (Leaderboard B) and General source separation (Leaderboard C). But due to contraints with time and training resources, I decided to stay with the general source separation.  


### Method

This was one of the most interesting challenges that I worked on in some time. The challenge here was not to find the available research as there were quite a few that I was already aware of, but to find resources to train the model. For this, the university student resources were very helpful, so thanks to the university student body for that.

So, for the challenge, I decided to train the availble models with some modification that I will be elaborating later. But overall the idea was to find an optimal way to train the models for each track. 

I started infering the available pretrained models. For my experiments I used the following available resources.

- Demucs [v{1,2,3,4}](https://github.com/facebookresearch/demucs)
- [MDXnet](https://github.com/kuielab/mdx-net)
- [ByteSep](https://github.com/bytedance/music_source_separation)
- [Danna-sep](https://github.com/yoyololicon/danna-sep)

Based on a my validation dataset, I found ByteSep to be the perfect candidate for training.

After checking for data consistency, I 

### Rankings:

So after the challenge, the final standing of my model were as follows for each track

<center>
<img class="center-block" style="max-width:750px;" src="https://ik.imagekit.io/tushard/Personal/projects/cdx_challenge_standing_created_FX_F8A7bi.webp?updatedAt=1702550989644">
<img class="center-block" style="max-width:750px;" src="https://ik.imagekit.io/tushard/Personal/projects/mdx_rankings_QGrmk076-.webp?updatedAt=1702551672238">

</center>