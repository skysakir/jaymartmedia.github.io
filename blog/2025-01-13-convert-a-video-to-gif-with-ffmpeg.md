---
slug: convert-a-video-to-gif-with-ffmpeg
title: Convert a Video to GIF with FFMPEG
authors: jaymartin
tags: [FFMPEG]
toc_max_heading_level: 4
---

In this article I show you how to convert a video file to a .gif using a command line tool called FFMPEG.

I often use this when I have a video that I would like to upload to the internet, but I'm limited on file size, or I don't want to have to wait a long time for the video to upload. One of my most common use cases is for attaching a screen recording to a pull request in a git hosting tool.

<!--truncate-->

<!-- <link rel="stylesheet" href="/legacy/jmm-video.css" />

<div class="jmm-video-container">
    <iframe class="jmm-video" src="https://www.youtube.com/embed/dWZkQdD9hdE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br />

:::info
I have written this article in text form in order to save you time. In my experience, reading an article is often faster and/or more convenient (certainly quieter) than watching a video. If you would prefer to view this information in video form, you can click the video above, or [view the video on YouTube](https://www.youtube.com/watch?v=dWZkQdD9hdE).
::: -->

## Recording your screen

If you already have a video file that you would like to convert to a .gif then you can skip this step.

#### MacOS

1. Open QuickTime Player
2. Choose file > new screen recording
3. Click the red record button
4. Select the area you would like to record
   - Click a screen to start recording the entire screen
   - Drag over part of the screen to only record that area
5. Do whatever you would like to record 
6. Click stop to stop recording

https://support.apple.com/en-us/102618

#### Windows 11

1. Press `Windows`+`SHIFT`+`S` to open the clipboard
2. Click the video camera icon to change from screenshot to record
3. Select the area that you would like to capture
4. Click record to start recording
5. Do whatever you would like to record
6. Click the record button again to stop the recording

https://www.microsoft.com/en-us/windows/learning-center/how-to-record-screen-windows-11

#### Windows 10

You may be able to use Xbox Game Bar, or have to install a tool such as OBS.

https://support.xbox.com/en-US/help/games-apps/game-setup-and-play/get-to-know-game-bar-on-windows-10

#### Ubuntu

1. Press `Shift`+`CTRL`+`ALT`+`R` to start recording
2. Do whatever you would like to record
3. Press the red button to staop the recording

https://help.ubuntu.com/stable/ubuntu-help/screen-shot-record.html#screencast

## Installing FFMPEG

Go to the FFMPEG download page and download the proper version for your operating system: https://www.ffmpeg.org/download.html

Once FFMPEG has installed, open a shell (bash, CMD, PowerShell, etc. should all work), and run `ffmpeg` to verify that it is installed.

If you get a message which lists the version number, similar to the one shown below, then you have successfully installed FFMPEG
```shell
ffmpeg version 6.0-essentials_build-www.gyan.dev Copyright (c) 2000-2023 the FFmpeg developers
```

If you get a message similar to this one, which mentions that the command could not be found, then you may need to manually add FFMPEG to your path
```shell
The term 'ffmpeg' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

Detailed steps to install on Windows: https://phoenixnap.com/kb/ffmpeg-windows

## Convert to GIF

Below are a few different settings that you may want to use when converting the image. The below commands assume that the file that you are converting is named "input.mp4" and that you want to name the new file "output.gif". Feel free to change the input/output file names as needed/desired.

Before running the command, you'll need to use `cd` to change to the directory with the files. Alternatively you could use the full relative path to the input and output files, but I typically find it quicker to change to the directory.

#### Keep the current resolution and scaling

`ffmpeg -i input-video.mp4 output.gif`

#### Scale the resolution down (to reduce file size)
`ffmpeg -i input-video.mp4 -s 960x540 output.gif`

-s denotes scale to \{width\}x\{height\}

#### Reduce the frame rate (to reduce file size)
`ffmpeg -r 15 -i input-video.mp4 output.gif`

-r sets the new frame rate to 15 frames per second

