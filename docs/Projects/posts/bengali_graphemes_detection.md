---
draft: true 
date: 2023-01-31 
hide:
#   - navigation
  - toc
categories:
  - competition
  - image
  - text

authors:
  - thanatoz

links:
  - Projects/index.md

title: Bengali Handwritten Grapheme detection
description: Accelerate Bengali handwritten optical character recognition research and help enable the digitalization of educational resources. The problem is centered around given handwritten Bengali graphemes, to separately classify three constituent elements in the image - grapheme root, vowel diacritics, and consonant diacritics. 

image: https://ik.imagekit.io/tushard/Personal/projects/An-example-of-a-Bengali-word-structure-A-Bengali-word-is-constructed-with-one-or-more_bIW-jlPKJ.png?updatedAt=1665614316790
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

# Bengali Handewritten Graphemes detection

#### <p style="text-align: center;">Tushar Dhyani</p>
<!-- <p style="text-align: center;">Institut für Maschinelle Sprachverarbeitung, University of Stuttgart</p> -->

</center>



## Understanding the problem
<!-- <img src="https://ik.imagekit.io/tushard/Personal/projects/image_tzGm0Z0yIv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665653075872"  style="float: right; margin-right: 15px; max-width:250px"> -->
<p style="margin-top: 30px;">Automatic handwritten character recognition (HCR) and optical character recognition (OCR) are quite popular for commercial and academic reasons. For alpha-syllabary languages this problem increases manifolds due to its non-linear structure. Bengali, a member of alpha-syllabary family, is way trickier than English as it has 50 letters - 11 vowels and 39 consonants - plus 18 diacritics. This means there are roughly 13,000 ways to write Bengali letters, whereas English only has about 250 ways to do the same. This huge number of combinations makes recognizing Bengali characters a lot harder. These different elements has been shown below for a visual understanding. </p>


<center>
<img class="center-block" style="max-width:350px" src="https://ik.imagekit.io/tushard/Personal/projects/An-example-of-a-Bengali-word-structure-A-Bengali-word-is-constructed-with-one-or-more_bIW-jlPKJ.png?updatedAt=1665614316790">
</center>


<!-- <center>
<!-- <img class="center-block" style="max-width:350px" src="https://ik.imagekit.io/tushard/Personal/projects/image_tzGm0Z0yIv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665653075872"> 
</center> -->

<center>    
<img class="center-block" style="max-width:500px" src="https://ik.imagekit.io/tushard/Personal/projects/image_44fFKWaVP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665654843220">
</center>

Different vowel diacritics (green) and consonant diacritics (red) used in Bengali orthography. The placement of the diacritics are not dependent on the grapheme root.

we have the following distribution of graphemes in Bengali. 
```
Number of unique grapheme roots: 168
Number of unique vowel diacritic: 11
Number of unique consonant diacritic: 7
```

## Solutions

To create a mixture of different roots, I followed a unique augmentation technique - cut-mix. This technique involves randomly cutting and mixing parts of different images while training. But, as a native speaker of the same family of language, I knew that there were some specific ways to achieve this. This way involves having specific class in a specific zone. From this, I devised this zone structure and did a cut-mix augmentation while training my model. The specific zones are showcased below:

<center>
<img class="center-block" style="max-width:350px" src="https://ik.imagekit.io/tushard/Personal/projects/bengali_graphemes_cutmix_zones_Zd1PvbVCS.png?updatedAt=1702420869101">
</center>

Based on the rough distribution of the zone, I mixed respective parts to create augmentations that sometimes resembled real and sometimes unreal examples. The process could be understood from the picture below how this structure helped increase the training data distribution. 

<center>
<img class="center-block" style="max-width:550px" src="https://ik.imagekit.io/tushard/Personal/projects/cutmix_aug_eg(1)_yOZI9EEOR.webp?updatedAt=1702421988334">
</center>

Sadly this process didn't work directly, because the mistakes and unrealistic images are too much noise for the model to deal with. I was able to tone down the noise by doing the following tricks - The grapheme root zones are roughly correct most of the time, while the vowel and consonants are way off. I figured that since grapheme root and consonant 3 and 6 are the main classes to tackle, I should focus on those.

My training pipeline roughly looked as follows:
<center>
<img class="center-block" style="max-width:750px" src="https://ik.imagekit.io/tushard/Personal/projects/training_pipeline_jNR133O6L.webp?updatedAt=1702488508489">
</center>



## Results

Models are evaluated using a hierarchical macro-averaged recall. First, a standard macro-averaged recall is calculated for each component (grapheme root, vowel diacritic, or consonant diacritic). The final score is the weighted average of those three scores, with the grapheme root given double weight.

<center>
<table border="0" cellpadding="0" cellspacing="0" width="577" style="border-collapse:
 collapse;table-layout:fixed;width:433pt">
   <caption>Table 1: Results of different model that I used for training</caption>
    <colgroup>
        <col width="128" style="mso-width-source:userset;mso-width-alt:4551;width:96pt">
        <col width="67" style="mso-width-source:userset;mso-width-alt:2389;width:50pt">
        <col width="104" style="mso-width-source:userset;mso-width-alt:3697;width:78pt">
        <col width="76" span="2" style="mso-width-source:userset;mso-width-alt:2702;width:57pt">
        <col width="58" style="mso-width-source:userset;mso-width-alt:2076;width:44pt">
        <col width="68" style="mso-width-source:userset;mso-width-alt:2417;width:51pt">
    </colgroup>
    <tbody>
        <tr class="xl74" height="44" style="mso-height-source:userset;height:33.0pt">
            <td rowspan="2" height="83" class="xl69" width="128" style="border-bottom:.5pt solid black;
            height:62.4pt;width:96pt">Model name</td>
            <td colspan="4" class="xl71" width="323" style="border-right:.5pt solid black;
            border-left:none;width:242pt">Validation score</td>
            <td rowspan="2" class="xl69" width="58" style="border-bottom:.5pt solid black;
            width:44pt">Public score</td>
            <td rowspan="2" class="xl69" width="68" style="border-bottom:.5pt solid black;
            width:51pt">Private score</td>
        </tr>
        <tr class="xl68" height="39" style="mso-height-source:userset;height:29.4pt">
            <td height="39" class="xl67" width="67" style="height:29.4pt;width:50pt">Root</td>
            <td class="xl67" width="104" style="width:78pt">Vowel Dicritic</td>
            <td class="xl67" width="76" style="width:57pt">Consonant Dicritic</td>
            <td class="xl67" width="76" style="width:57pt">Overall</td>
        </tr>
        <tr height="19" style="height:14.4pt">
            <td height="19" class="xl65" style="height:14.4pt">EfficientNet B1</td>
            <td class="xl66" align="right">0.971</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.988</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.978</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.977</td>
            <td class="xl66" align="right">0.9638</td>
            <td class="xl66" align="right">0.9385</td>
        </tr>
        <tr height="19" style="height:14.4pt">
            <td height="19" class="xl65" style="height:14.4pt">EfficientNet B2</td>
            <td class="xl66" align="right">0.921</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.978</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.987</td>
            <td class="xl66" align="right">0.952</td>
            <td class="xl66" align="right">0.9615</td>
            <td class="xl66" align="right">0.9245</td>
        </tr>
        <tr height="19" style="height:14.4pt">
            <td height="19" class="xl65" style="height:14.4pt">Resnet18</td>
            <td class="xl66" align="right">0.951</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.982</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.978</td>
            <td class="xl66" align="right" style="box-sizing: border-box;text-rendering: auto;
            -webkit-font-smoothing: antialiased;max-width:none;border:rgba(221, 222, 223, 0.5)">0.966</td>
            <td class="xl66" align="right">0.9599</td>
            <td class="xl66" align="right">0.9223</td>
        </tr>
        <!--[if supportMisalignedColumns]-->
        <tr height="0" style="display:none">
            <td width="128" style="width:96pt"></td>
            <td width="67" style="width:50pt"></td>
            <td width="104" style="width:78pt"></td>
            <td width="76" style="width:57pt"></td>
            <td width="76" style="width:57pt"></td>
            <td width="58" style="width:44pt"></td>
            <td width="68" style="width:51pt"></td>
        </tr>
    <!--[endif]-->
    </tbody>
</table>
</center>

# Score on the leaderboard

With the best backbone model that I had, I scored 55 on the private leaderboard and scored my first silver medal.
<center>
<img class="center-block" style="max-width:750px" src="https://ik.imagekit.io/tushard/Personal/projects/bengali_standings_kaggle_65Z-3_TIo.png?updatedAt=1702488780127">
</center>
