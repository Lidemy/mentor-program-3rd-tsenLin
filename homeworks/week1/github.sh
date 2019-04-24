#!/bin/bash

user=$(curl -s https://api.github.com/users/$1)

name=$(node -pe 'JSON.parse(process.argv[1]).name' "$user")
bio=$(node -pe 'JSON.parse(process.argv[1]).bio' "$user")
location=$(node -pe 'JSON.parse(process.argv[1]).location' "$user")
blog=$(node -pe 'JSON.parse(process.argv[1]).blog' "$user")

echo "$name"
echo "$bio"
echo "$location"
echo "$blog"
