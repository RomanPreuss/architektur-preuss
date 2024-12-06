.PHONY: help

help:
	@echo "Available tasks:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-30s %s\n", $$1, $$2}'

default: help

dev: ## Serve locally using python
	@echo "Serving the project..."
	@python -m http.server 3000

build: ## Build the project
	@echo "Not yet implemented..."