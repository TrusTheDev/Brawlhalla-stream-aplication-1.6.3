# Ballstats 1.6.2


## Description
-------------
This desktop application retrieves player data from the Brawlhalla API and stores it in text files dynamically for use in programs like OBS Studio. By referencing a player list in an Excel table with associated IDs, the app automatically fetches relevant information when a player's name is entered, updating the text files for seamless integration with OBS.


## Features
-------------
| example information  | example value |
| ------------- | ------------- |
| name  | Fiend  |
| region  | SA  |
| country  | Brazil  |
| earnings  | $ 93811.67  |
| top32  | 50  |
| top8  | 35  |
complete list of information that can be gathered below.

##### List 

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
#### Normal mode
Let you choose between 1v1 or 2v2 information from **ONE player only** to display.
#### Confrontation mode
Let you choose between 1v1 or 2v2 information from **TWO UP TO 4 players** to display.

## [Instalation guide](https://www.youtube.com/ "Instalation guide") / dependencies 
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

## Common problems
-------------

#### Windows Script Host
-------------
![](https://i.imgur.com/QqLS0yil.png)

This means that you are compiling the program with any other program rather node.js, to solve this go to ballstats.js > properties > Opens with: and change to Node.js Javascript Runtime, Apply and you are ready to go.
#How to use

## How to use
-------------

### Excel table
-------------
Ballstats provides the use of excel tables in order to search players info
this is located in: Brawlhalla-stream-aplication-1.6.2-main\resources\playerRepository\ExcelRepository

![](https://i.imgur.com/LPiJLRt.png)

There are some players as examples to play with, do with them what you want, just make sure **their ids** matches with their players in any stats website

### [Stats website](https://prostats.brawlhalla.com/singles/327992 "Stats website")
-------------
![](https://i.imgur.com/aEmQHZf.png)

Powers ids matches with first table, now lets see if the desktop app does it. 

### Output
-------------
![](https://i.imgur.com/9vmeoa4.png)

consoles shows the information gathered and put it in the .txt files to use, you can continue writing player names until satisfied, as long as their names are in the excel table and the id actually matches.

## FAQ
-------------
**Can i use icons instead of splah arts?**

Sure, just make sure it ends with a .png extension and has the same name as the legend in quesiton

**Can i add more players in confrontation mode?**

Yes, just copy and paste player file in numbered order at stats/[1v1 or 2v2]


## About
-------------
Program developed by Mr.Ivansito, Maxy
## Contact info
[Mr.Ivansito](mailto:ivanbordeira2015@hotmail.com)
[Maxy](mailto:maxib193@gmail.com)

## License
-------------
MIT
