install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	brain-progression.js

brain-prime:
	brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .


