run:
	python campaign/campaign.py &
	python worksample/worksample.py &
stop:
	@ps aux | grep "python worksample/worksample.py" | grep -v grep | awk '{print $$2}' | xargs kill -9
	@ps aux | grep "python campaign/campaign.py" | grep -v grep | awk '{print $$2}' | xargs kill -9
setup:
	pip-freeze
	init-db
pip-freeze:
	pip install -U -r requirements.txt
init-db:
	mongorestore --collection worksample --db worksample dump/worksample/worksample.bson
	mongorestore --collection campaign --db campaign dump/campaign/campaign.bson