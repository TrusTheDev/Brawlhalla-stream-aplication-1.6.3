# Ballstats 1.6.2
[TOC]

Description
-------------
This desktop application retrieves player data from the Brawlhalla API and stores it in text files dynamically for use in programs like OBS Studio. By referencing a player list in an Excel table with associated IDs, the app automatically fetches relevant information when a player's name is entered, updating the text files for seamless integration with OBS.


Features
-------------
| example information  | example value |
| ------------- | ------------- |
| name  | Fiend  |
| region  | SA  |
| country  | Brazil  |
| earnings  | $ 93811.67  |
| top32  | 50  |
| top8  | 35  |
complete list of information that can be gathered below

####List 

- name
- region
- country
- earnings
- top32
- top8
- gold
- silver
- bronze
- pr
- twitch
- twitter
- Legend (displayed as a .png)
####Normal mode
Let you choose between 1v1 or 2v2 information from **ONE player only** to display.
####Confrontation mode
Let you choose between 1v1 or 2v2 information from **TWO UP TO 4 players** to display.

[Instalation guide](https://www.youtube.com/ "Instalation guide") / dependencies 
-------------
* [Node.js](https://nodejs.org/en/download/package-manager "Node.js") (Must have else wont work)
* [esports/sdk](https://www.npmjs.com/package/%40bmg-esports%2Fsdk)
* [xlsx](https://www.npmjs.com/package/xlsx "xlsx")
1. either Clone the repo or download as ZIP from <> Code green button
2. Unzip wherever you want
3. **download dependencies**, open command prompt from the main file and paste:

`npm i @bmg-esports/sdk`

also paste:

`npm i xlxs`

**Should work now.**

here you have a collection of [splash arts](https://drive.google.com/file/d/1dnm5cQ_WMkC3RpuOhQ19McD5jyeGUZ44/view?usp=sharing "splash arts") to use, unzip at Brawlhalla-stream-aplication-main\resources\playersImgs

FAQ
-------------
**Can i use icons instead of splah arts?**
Sure, just make sure it ends with a .png extension and has the same name as the legend in quesiton

**Can i add more players in confrontation mode?**
Yes, just copy and paste player file in order at stats/[1v1 or 2v2]

About
-------------
Program developed by Mr.Ivansito, Maxy
###Contact info
[Mr.Ivansito](mailto:ivanbordeira2015@hotmail.com)
[Maxy](mailto:maxib193@gmail.com)

License
-------------
MIT
