Run tests on docker environment

1. Clone the project : git@github.com:bharat22goyal/codeceptjs-demo.git

2. Build docker container : docker build -t codeceptjs .

3. Run tests: docker run -it --rm -v $PWD:/app codeceptjs

Run tests on local env (with reports) : 
1. Install dependencies : npm install

2. npx codeceptjs run --reporter mochawesome
