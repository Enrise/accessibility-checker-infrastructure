# ===========================
# Main commands
# ===========================

info: do-info
init: do-init do-build do-start
dev: do-start do-watch
start: do-start
stop: do-stop
build: do-build
test: do-test

# ===========================
# Recipes
# ===========================

do-info:
	@echo "\n=== Accessibility Checker Infrastructure ===\n"
	@echo "  Commands:"
	@echo "    make init          build the example and start init"
	@echo "    make build         build the assets"
	@echo "    make start         start the example app"
	@echo "    make stop          stop the app"
	@echo "    make dev           watch for file changes"
	@echo "    make test          run the accessibility tests"

do-init:
	@echo "\n=== Initialisation ===\n"
	# Normally we would run this in the docker container
	# But since I want to show how to run the test locally we need chromium to be installed on the system
	# If you are only using docker this is better: docker-compose run --rm appBuilder npm ci
	npm ci	

do-start:
	@echo "\n=== Start ===\n"
	docker-compose up -d app
	@echo "\n-- Your app is running at http://localhost:1000\n"

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
