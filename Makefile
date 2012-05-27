SHELL := /bin/bash

build:
	@cp -r src/assets/*.png images/
	@/development/projects/DamonOehlman/boxit/bin/boxit --path src --output .

test:
	@mocha --reporter spec

.PHONY: test