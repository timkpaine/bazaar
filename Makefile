run:  ## clean and make target, run target
	python3 manage.py runserver 

migrate:  ## run db migrations
	python3 manage.py migrate

makemigrate:  ## make migrations
	python3 manage.py makemigrations bazaarapp

fixtures:  ## make fixtures
	python3 manage.py loaddata fixture_metadata
	python3 manage.py loaddata fixture_initial
	python3 manage.py loaddata fixture_general

su:  # make superuser
	python3 manage.py createsuperuser

shell:  # run django shell
	python3 manage.py shell

purgedb:  # purge db
	rm -rf db.sqlite3 bazaarapp/migrations/*

test: ## run the tests for travis CI
	echo "Done!"

dtest:  ## run the django tests
	python3 manage.py test bazaarapp 

clean: ## clean the repository
	find . -name "__pycache__" | xargs  rm -rf 
	find . -name "*.pyc" | xargs rm -rf 
	rm -rf .coverage cover htmlcov logs build dist *.egg-info

# Thanks to Francoise at marmelab.com for this
.DEFAULT_GOAL := help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

print-%:
	@echo '$*=$($*)'

.PHONY: clean run migrate makemigrate su test dtest help annotate annotate_l
