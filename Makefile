
# common config
SHELL = bash
MAKEFLAGS += --no-print-directory

# help
.PHONY: help

help: ## Show this help
help: _cmd_prefix= [^_]+
help: _help

_help:
	@awk 'BEGIN {FS = ":.*?## "} \
	/^$(_cmd_prefix)[0-9a-zA-Z_-]+$(_cmd_suffix):.*?##/ \
	{printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | \
	sed -E 's/@([0-9a-zA-Z_-]+)/\o033[31m@\o033[0m\o033[33m\1\o033[0m/g' | \
	uniq --group -w 20

# include nested makefiles
include ./*/*.mk

# leave the empty line at end of file for autocomplete to work
