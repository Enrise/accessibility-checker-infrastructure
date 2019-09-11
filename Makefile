# ===========================
# Main commands
# ===========================

init: do-init do-build do-start
dev: do-start do-watch
start: do-start
stop: do-stop
build: do-build
test: do-test

# ===========================
# Recipes
# ===========================

do-init:
	@echo "\n=== Initialisation ===\n"
	docker-compose run --rm appBuilder npm ci

do-start:
	@echo "\n=== Start ===\n"
	docker-compose up -d app

do-watch:
	@echo "\n=== Watch assets ===\n"
	docker-compose run --service-ports --rm appBuilder npm run dev

do-stop:
	@echo "\n=== Stop ===\n"
	docker-compose stop

do-build:
	@echo "\n=== Build assets ===\n"
	docker-compose run --rm appBuilder npm run build

do-test:
	@echo "\n=== Testing page using docker ===\n"
	docker-compose run --rm test
	@echo "\n=== Testing page using a local install ===\n"
	npm test
