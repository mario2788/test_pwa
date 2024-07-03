

#!/bin/bash

sudo  docker run -it --rm --name clinic-printed \
-v ${PWD}:/app -w /app --network host \
node:20-alpine3.17  /bin/ash

