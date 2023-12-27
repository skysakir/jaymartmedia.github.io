# JQ

JQ is a command line tool to filter/format json.

## Kubernetes

JQ is often used to parse the output from kubectl commands, for examples of that, refer to [my notes on Kubenetes](./kubernetes).

## Examples

Select and output a property

```sh
$ echo '{"hello": "world"}' | jq .hello

"world"
```

Select a value from an array

```sh
$ echo '{"hello": ["world", "earth", "space"]}' | jq .hello[0]

"earth"
```

Select all values from an array

```sh
$ echo '{"hello": ["world", "earth", "space"]}' | jq .hello[]

"world"
"earth"
"space"
```

Select nested values from an array and object

```sh
$ echo '{"hello": [{"place": "earth", "species": "humans"},{"place": "space", "species": "space-beings"}]} | jq .hello[].species

"humans"
"space-beings"
```

Select multiple nested values from an array and object and combine into string

```sh
$ echo '{"hello": [{"place": "earth", "species": "humans"},{"place": "space", "species": "space-beings"}]} | jq '.hello[] | "hello, " + .species + " from " + .place' -r

hello, humans from earth
hello, space-beings from space
```

Equivalent to (notice rather than using jq's built in pipe, we actually pipe via the normal bash pipe to a separate jq call)
```sh
$ echo '{"hello": [{"place": "earth", "species": "humans"},{"place": "space", "species": "space-beings"}]} | jq .hello[] | jq '"hello, " + .species + " from " + .place' -r

hello, humans from earth
hello, space-beings from space
```


## Helpful flags

`-r` output as strings (i.e. not wrapped in "")

## Arrays (may be able to be used on strings too)

Get specific index from array `[0]`

Get subarray `[1:3]` (lower bound inclusive, upper bound exclusive, i.e. [0,1,2,3] filtered by [1:2] returns [1,2])

Get first 3 items from array (index 0,1,2) `[:3]`

Get last 2 items from array `[-2:]`

Iterate over all items in array `[]` (may also work on objects)
