SHELL := /bin/bash

build:
	@bake src/pres.js --output resources/js/
	@cp -r images output/
	@cp assets/*.png output/images
	@/development/projects/DamonOehlman/boxit/bin/boxit
	@node upload.js

test:
	@mocha --reporter spec

.PHONY: test