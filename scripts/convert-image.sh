#/bin/bash

set -euo pipefail
IFS=$'\n\t'


if [ "$#" -lt 1 ]
then
    echo "Usage $0 FILE ..."
    exit 1
fi


for f in "$@"
do
    echo "Converting $f to WEBP"
    # Via ImageMagick
    convert "$f" "${f}.webp"
done
