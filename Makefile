install:
	npm ci

lint:
	npx eslint

test:
	npx -n --experimental-vm-modules jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
