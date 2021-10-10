#
# COPYRIGHT 2021 Stephen Hahn. All rights reserved.
#
# This copyright notice is Copyright Management Information under 17 USC 1202
# and is included to protect this work and deter copyright infringement.
# Removal or alteration of this Copyright Management Information without the
# express written permission of Stephen Hahn is prohibited, and any
# such unauthorized removal or alteration will be a violation of federal law.
#

SRCS = \
	background.js \
	icons/rt.svg \
	manifest.json

randomtab.zip: $(SRCS)
	zip -r randomtab.zip $(SRCS)
