#
# Copyright 2024 Stephen Hahn. All rights reserved.
#

SRCS = \
	background.js \
	icons/rt.svg \
	manifest.json

randomtab.zip: $(SRCS)
	zip -r randomtab.zip $(SRCS)
