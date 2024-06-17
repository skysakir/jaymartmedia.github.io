# FFMPEG
FFMPEG is a FOSS for encoding audio and video: https://www.ffmpeg.org/

## Audio

### Re-encode .mp3 audio file as .wav
`ffmpeg -i someaudiofile.mp3 someaudiofile.wav`

## Video

### Re-encode to .mp4
`ffmpeg -i input.MP4 output.mp4`

### Rotate video

Rotate 90 clockwise:

`ffmpeg -i in.mov -vf "transpose=1" out.mov`
For the transpose parameter you can pass:

```txt
0 = 90° counterclockwise and vertical flip (default)
1 = 90° clockwise
2 = 90° counterclockwise
3 = 90° clockwise and vertical flip
```
Use `-vf "transpose=2,transpose=2"` for 180 degrees.

src: https://stackoverflow.com/a/9570992

## Gif

### Convert video to gif

Scale down 1080p video into 1/4: `ffmpeg -i "input-video.mkv" -s 960x540 output.gif`
