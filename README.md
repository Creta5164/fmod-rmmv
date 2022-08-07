# FMOD_MV.js

<p align="center">
  <img alt="FMOD_MV.js" width="640" src="./og-image.png"/>
</p>

### [Download plugin][releases]

A plugin that helps to use FMOD wasm upstream builds for RPG Maker MV.  
Created by Creta Park (https://creft.me/cretapark)

This plugin's license is a variant of the MIT License,
so you are free to use it as long as you comply with these terms.

Please observe the license terms below :

1. When using this plugin with other software, the software must be
   a game developed and made with RPG Maker, and `FMOD_MV.js by Creta Park`
   must be written in the credit of these game.

2. Should not be confused 1's content with the attribution of FMOD.  
   Mark completely separate from the attribution of the FMOD.

3. Neither this plugin nor any of its individual components,
   in Original or Modified Versions, may be sold by itself.

4. When redistributed after modification, the original author must be indicated.

*This can also be found in the [LICENSE][LICENSE] file.*

---

## Background

This plugin was created for the [2022 1Chicken game jam contest][1map],
a game jam event hosted by [1Map1Chicken RPG Maker contest][1map-twitter] in Korea.

The game we made by participating in this game jam was DOWNFALLEN,
and it was the opportunity to create the corresponding plug-in for this game.

[The entry page can be viewed here][DOWNFALLEN], but this game is in Korean.

> *However, the text has been pulled out to support fan translations, so contributions are always welcome!*

## Demonstration

If you curious what it does, watch this video.

<p align="center">
  <a href="https://youtu.be/YcVaRldGb4c">
    <img alt="DOWNFALLEN demonstration video thumbnail" width="640" src="https://img.youtube.com/vi/YcVaRldGb4c/maxresdefault.jpg"/>
  </a>
</p>

## Table of content


# [1.](#table-of-content) Basic knowledge requirements

- Knows how to use FMOD Studio.

- Well aware of the [license][fmod-license], [attribution][fmod-attribution]
  and [legal information][fmod-legal] of FMOD.

# [2.](#table-of-content) Limitation

This plug-in was made in a short period of almost a week,
so some RPG Maker features that were not contained from DOWNFALLEN,
the game that used this plug-in or some features of FMOD, are missed for now.  
That's the reason I released this plugin as alpha stage.

Pull request or contribution are always welcome!

Currently, the limitations I have identified are as follows.

- Velocity for doppler effect, etc.  
  The characters in RPG Maker have very consistent movement speeds,
  so when I applied velocity to them, the results were very strange
  so I didn't implement it.

- Streaming RPG Maker's native audio system to FMOD  
  FMOD has a feature that helps to read an external audio buffer
  and output it through the bus, but this has not been
  implemented yet.

- Not fully implemented ME specs  
  I have not yet implemented the specification of ME that plays
  BGM when it is interrupted during BGM playback and ME plays
  and disappears.

- Can't support event callbacks  
  Event callback is a feature that receives this signal from the game
  when a call function is put in an event created in FMOD Studio.  
  It also provides basic functions such as beat per callbacks, etc.  
  
  Anyways, this is a big mistake in my plugin design.
  
  Callbacks can be registered for events in the FMOD, but cannot be unregistered.  
  This is presumably because the FMOD assumes that the event is
  instantiated and used once and then discarded.
  
  FMOD also provides its own object pooling system.
  
  However, I implemented the pooling of the instanced event without knowing this,
  and the above problems resulted in an environment where callbacks could not be used naturally.
  
  Currently, this mistake is the biggest technical debt for this plugin.

- All of the battle related features  
  Since we didn't have to use it while making DOWNFALLEN.

# [3.](#table-of-content) Setup project

## [3.1.](#table-of-content) Add plugin to your project

Put `FMOD_MV.js` in the `plugins` folder, and then add the plugin in your RPG Maker project.  
Plugin's order doesn't matter, unless you're using additional audio-related featured plugins.

## [3.2.](#table-of-content) Add FMOD Engine

![download-fmod-html5](./img/download-fmod-html5.png)  
[Download FMOD Engine at here][fmod-download], it requires HTML5 version.

![add-library-to-project](./img/add-library-to-project.png)  
Put `fmodstudio.js` and `fmodstudio.wasm` in `api/studio/lib/upstream/wasm` of the downloaded zip file into `js/lib` in the project folder.

![modify-fmodstudio.js](./img/modify-fmodstudio.js.png)  
Then open `fmodstudio.js` and find the section `ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process`.  
Then add `false&&` after `ENVIRONMENT_IS_NODE=` and save it.

Then, open `index.html` in the project folder and add the following line as below into `<body>` tags.

```
<script type="text/javascript" src="js/libs/fmodstudio.js"></script>
```

If you've been working on the index.html you created as a new project, it should look like this :

```diff
 <!DOCTYPE html>
 <html>
     <head>
         <meta charset="UTF-8">
         <meta name="apple-mobile-web-app-capable" content="yes">
         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
         <meta name="viewport" content="user-scalable=no">
         <link rel="icon" href="icon/icon.png" type="image/png">
         <link rel="apple-touch-icon" href="icon/icon.png">
         <link rel="stylesheet" type="text/css" href="fonts/gamefont.css">
         <title>Project1</title>
     </head>
     <body style="background-color: black">
         <script type="text/javascript" src="js/libs/pixi.js"></script>
         <script type="text/javascript" src="js/libs/pixi-tilemap.js"></script>
         <script type="text/javascript" src="js/libs/pixi-picture.js"></script>
         <script type="text/javascript" src="js/libs/fpsmeter.js"></script>
         <script type="text/javascript" src="js/libs/lz-string.js"></script>
         <script type="text/javascript" src="js/libs/iphone-inline-video.browser.js"></script>
+        <script type="text/javascript" src="js/libs/fmodstudio.js"></script>
         <script type="text/javascript" src="js/rpg_core.js"></script>
         <script type="text/javascript" src="js/rpg_managers.js"></script>
         <script type="text/javascript" src="js/rpg_objects.js"></script>
         <script type="text/javascript" src="js/rpg_scenes.js"></script>
         <script type="text/javascript" src="js/rpg_sprites.js"></script>
         <script type="text/javascript" src="js/rpg_windows.js"></script>
         <script type="text/javascript" src="js/plugins.js"></script>
         <script type="text/javascript" src="js/main.js"></script>
     </body>
 </html>
```

Then you are ready to go!

# [4.](#table-of-content) Plugin options

![plugins-options](./img/plugins-options.png)  
This section covers the plugin options menu.

![celeste-fmod](./img/celeste-fmod.png)  
To see an quick example in action, create a new RPG Maker project, and overwrite the `plugins.js` enclosed in the repository with `js/plugins.js` in the newly created project directory.

![build-celeste-fmod](./img/build-celeste-fmod.png)  
Build the [Celeste FMOD Studio Project][fmod-learning-resources], and setup them by referring to
[Bank asset path](#42table-of-content-bank-asset-path),
[Bank assets](#43table-of-content-bank-assets),
and [GUIDs js path](#44table-of-content-guids-js-path) in this section.

## [4.1.](#table-of-content) Total memory

FMOD's virtual memories' maximum size. (byte units)  
Default setting is `64MB`. (`64 * 1024 * 1024`)

## [4.2.](#table-of-content) Bank asset path

Specify the path where the FMOD's Bank assets are.  
Default setting is `audio/bank`.

![bank-files](./img/bank-files.png)  
Bank files created by building in FMOD Studio must all be in the this path.

## [4.3.](#table-of-content) Bank assets

Specify banks to load.  
Master bank and it's strings must be assigned.  
i.e. if you have `Master Bank.bank`, `Master Bank.strings.bank`, `Music.bank` then
you should add `Master Bank`, `Master Bank.strings`, `Music` at this option.

## [4.4.](#table-of-content) GUIDs js path

Specify GUID collection script file.  
Default setting is `audio/bank/fmod_studio_guids.js`

This script file(`fmod_studio_guids.js`) can be created by the following below process.

1. **Overwrite `exportGUIDsHeader.js` in this repository to your FMOD Studio's scripts file**  
   ![overwrite-export-guids-header](./img/overwrite-export-guids-header.png)  
   There is a folder called `scripts` in the folder where FMOD Studio is installed, overwrite the script file in it.

2. **Export GUIDs header in FMOD Studio's menu : `Scripts/FMOD Examples/Export GUIDs Header/js File`.**  
   ![export-guids-header-as-js](./img/export-guids-header-as-js.png)  
   Then FMOD Studio will generate GUID header scripts and save as `fmod_studio_guids.js` in the same location as the project file you are currently working on.  
   ![exported-guids](./img/exported-guids.png)  
   > Note : If there is an unintentional duplicate of the event name in generated script(`fmod_studio_guids.js`) file, this script will not work due to an error.  
   This possibly can resolved by restarting FMOD Studio, and creating the GUID header script again.

3. **Move the generated script to the path in plugin option.**  
   ![move-generated-script-to-specified-path](./img/move-generated-script-to-specified-path.png)

That's it!  

## [4.5.](#table-of-content) Integrated VCAs

Specify which VCA is used for each types of channels.  
If you leave these blank, FMOD_MV.js will try finds a VCA name
with `BGM`, `BGS`, `ME`, `SE`, if found them then
it will be used automatically.

## [4.6.](#table-of-content) 

[releases]: https://github.com/creta5164/fmod-rmmv/releases
[LICENSE]: https://github.com/creta5164/fmod-rmmv/blob/main/LICENSE
[1map]: https://1map1chicken.com/entries/jam2022
[1map-twitter]: https://twitter.com/1map1chicken
[DOWNFALLEN]: https://1map1chicken.com/entries/jam2022/downfallen-다운폴른
[fmod-license]: https://www.fmod.com/licensing
[fmod-attribution]: https://www.fmod.com/attribution
[fmod-legal]: https://www.fmod.com/legal
[fmod-download]: https://www.fmod.com/download#fmodengine
[fmod-learning-resources]: https://www.fmod.com/download#learningresources