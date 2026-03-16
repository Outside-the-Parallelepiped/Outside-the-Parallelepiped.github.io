SHELL := bash
.DEFAULT_GOAL:=help

.PHONY: help
help: Makefile
	@echo "Usage:"
	@sed -n 's/^##//p' $<

## local    	Run a local development server
.PHONY: local
local :
	export NVM_DIR="$$([ -z "$${XDG_CONFIG_HOME-}" ] && printf %s "$${HOME}/.nvm" || printf %s "$${XDG_CONFIG_HOME}/nvm")" && \
	[ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" && \
	nvm use 22 && \
	npm run dev

## production	Deploy to production
.PHONY: production
production :
	export NVM_DIR="$$([ -z "$${XDG_CONFIG_HOME-}" ] && printf %s "$${HOME}/.nvm" || printf %s "$${XDG_CONFIG_HOME}/nvm")" && \
	[ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh" && \
	nvm use 22 && \
	npm run deploy
	