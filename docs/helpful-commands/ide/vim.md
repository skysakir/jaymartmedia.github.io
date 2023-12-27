# VIM

`vim {filename}` - Open a file with vim

`vim .` - Open a directory in vim (starts in netrc)

`:e .` - Browse directorys/change files (open netrc)

`gg=G` - format file - 'gg' = jump to top of file, '=' = format, 'G' = do it until end of file

`"*p` - paste from system clipboard

## Regex

`/test` -> `ENTER` - search file for instances of "test"

`n` - repeat search (find next instance of match)

`N` - repeat search backwards (find previous instance of match)

`:s/old/new` -> `ENTER` - replace the first instance of "old" with "new" in the current line only

`:s/old/new/g` -> `ENTER` - replace all instances of "old" with "new" in the current line only

`:%s/old/new/g` -> `ENTER` - replace all instances of "old" with "new" in the current file

`:%s/old/new/gc` -> `ENTER` - replace all instances of "old" with "new" in the current file but prompt for confirmation before each instance

## Visual Copy/Paste

1. Highlight the character you would like to start copying at
2. Press "v" to enter visual mode
3. Highlight the character you would like to stop copying at
4. Press "y" to yank and enter normal mode
5. Navigate to where you want to paste
6. Press "p" to paste the yanked text

ref: https://linuxize.com/post/how-to-copy-cut-paste-in-vim/

## Tabs

`CTRL+w SHIFT+t` - move current pane to new tab

`:clo` - close current tab

# Netrc

Create a new file: `:%`

# Typical Startup

`vim .` - open vim

`:term` - open terminal in vim

`CTRL+w SHIFT+t` - move terminal to new tab

`CTRL+\ CTRL+n` - in terminal, switch to vim mode

`i` - in terminal, switch to insert/live mode

`gt` - switch between tabs

`1gt`/`2gt` - switch to first or second tab

# References

vim cheat sheet: https://vim.rtorr.com/
