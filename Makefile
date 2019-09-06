# ===========================
# Main commands
# ===========================

init: do-init do-build do-start
dev: do-start do-watch
start: do-start
stop: do-stop
build: do-build

# ===========================
# Snippets
# ===========================

compose-file = -f `pwd`/example/docker-compose.yml 

# ===========================
# Recipes
# ===========================

do-init:
	@echo "\n=== Initialisation ===\n"
	docker-compose ${compose-file} run --rm appBuilder npm ci

do-start:
	@echo "\n=== Start ===\n"
	docker-compose ${compose-file} up -d app

do-watch:
	@echo "\n=== Watch assets ===\n"
	docker-compose ${compose-file} run --service-ports --rm appBuilder npm run dev

do-stop:
	@echo "\n=== Stop ===\n"
	docker-compose ${compose-file} stop

do-build:
	@echo "\n=== Build assets ===\n"
	docker-compose ${compose-file} run --rm appBuilder npm run build
