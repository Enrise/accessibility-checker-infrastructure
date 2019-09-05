# ===========================
# Main commands
# ===========================

init: do-init do-start
dev: do-start do-watch
start: do-start
stop: do-stop

# ===========================
# Snippets
# ===========================

cd = cd example && 

# ===========================
# Recipes
# ===========================

do-init:
	@echo "\n=== Initialisation ===\n"
	${cd} docker-compose run --rm appBuilder npm ci

do-start:
	@echo "\n=== Start ===\n"
	${cd} docker-compose up -d app

do-watch:
	@echo "\n=== Watch assets ===\n"
	${cd} docker-compose run --rm appBuilder npm run dev

do-stop:
	@echo "\n=== Stop ===\n"
	${cd} docker-compose stop
