# FFMPEG
FFMPEG is a FOSS for encoding audio and video: https://www.ffmpeg.org/

## Audio

### Re-encode .mp3 audio file as .wav
`ffmpeg -i someaudiofile.mp3 someaudiofile.wav`

### Convert video to gif

Scale down 1080p video into 1/4: `ffmpeg -i "input-video.mkv" -s 960x540 output.gif`
