# TMUX

TMUX is a terminal multiplexer which allows you to have quick access to multiple terminal windows.

All commands in tmux are triggered by a **prefix key** followed by a **command key** (similar to emacs). By default, tmux uses `C-b` as prefix key. This notation might read a little weird if you're not used to it. In this emacs notation `C-` means "press and hold the `Ctrl` key". Thus `C-b` simply means press the `Ctrl` and `b` keys at the same time. [src](https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)

## Starting/Restarting TMUX

To start tmux: `tmux`

To start tmux with a named session: `tmux new -s mysession`

To attach to an existing session: `tmux ls` then `tmux attach -t {session id (number, or name if provided)}`

Rename existing session: `tmux rename-session -t {old session id (number or name if provided)} {new session name}`

## Pane/Tile Management

Split left and right: `C-b %`

Split vertically: `C-b "`

Change selected pane: `C-b <arrow key>`

Close currently selected pane: `C-d` or type `exit`

Make pane full sized (same command to shrink again): `C-b z`

Resize pane in direction: `C-b C-<arrow ey>`

## Exiting TMUX

You can exit tmux by exiting all the panes inside

You can exit tmux (and leave session running in background) by detaching.

Detach from current session: `C-b d`

Detach from sessions (prompt): `C-b D`

Resource: https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/
