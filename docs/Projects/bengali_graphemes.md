# Bengali Graphemes

## Understanding the problem
Optical character recognition is particularly challenging for Bengali or any of the member of alpha-syllabary family of languages. One of the prime reasons behind this is due to non-linear characteristics of alpha-syllabary languages. A quick comparision of various orthographies can be seen below. 

<center>
<img class="center-block" style="max-width:350px" src="https://ik.imagekit.io/tushard/Personal/projects/image_tzGm0Z0yIv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665653075872">
</center>

One of the way to solve this problem is to form a way to linearize the structure of detection of graphemes and this can help us improve the OCR. A visual representation of graphemes can be seen in the image below.

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

OCR pass information in a linear manner (From left-to-right or right-to-left), so alpha-syllabary languages has to be converted to a linear representations for implementing convolution based OCR. Once this is achieved, we can approach this problem with multihead convolutional network.   

My main motivation was to prepare a single inference model performing best. I experimented with couple of convolution based models. A comparision of various models have been shown in the results table below. 


## Results

Models are evaluated using a hierarchical macro-averaged recall. First, a standard macro-averaged recall is calculated for each component (grapheme root, vowel diacritic, or consonant diacritic). The final score is the weighted average of those three scores, with the grapheme root given double weight.

<table border="0" cellpadding="0" cellspacing="0" width="577" style="border-collapse:
 collapse;table-layout:fixed;width:433pt">
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

